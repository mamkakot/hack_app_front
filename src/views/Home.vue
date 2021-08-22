<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 700px;">
        <v-col cols="6">
          <events-calendar @getEvent="getEvent" />
        </v-col>
        <v-col cols="6">
          <v-card elevation="7" class="justify-center eventCard">
            <v-card-title primary-title>
              {{ event.name }}
            </v-card-title>

            <v-card-text>
              <div>Тип мероприятия: {{ event.type }}</div>
              <div>Начало: {{ event.start }}</div>
              <div>Конец: {{ event.end }}</div>
              <div>Описание: {{ event.description }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            outlined
            color="indigo"
            style="margin-bottom: 25px;"
            >Добавить мероприятие</v-btn
          >
        </template>
        <v-card class="appealCard">
          <v-row justify="center">
            <v-col cols="8">
              <v-card-text>
                <v-text-field
                  label="Название"
                  outlined
                  dense
                  required
                  v-model="event.title"
                ></v-text-field>
                <v-textarea
                  solo
                  label="Описание"
                  hint="Описание мероприятия"
                  outlined
                  required
                  v-model="event.description"
                ></v-textarea>

                <v-select
                  :items="types"
                  v-model="event.type"
                  label="Cфера"
                ></v-select>

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-date-picker v-model="dates" range></v-date-picker>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="dateRangeText"
                      label="Date range"
                      prepend-icon="mdi-calendar"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
                <hr />
                <br />
                <v-row align="center">
                  <v-col>
                    <v-btn color="success" @click="sendAppeal">Создать</v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                    <v-btn color="error" @click="dialog = false">Отмена</v-btn>
                  </v-col>
                </v-row>
                <v-snackbar v-model="snackbar" absolute>
                  {{ text }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="blue"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      Закрыть
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
import EventsCalendar from "@/components/EventsCalendar";
import { mapState } from "vuex";

export default {
  data: () => ({
    dialog: false,
    filled: false,
    snackbar: false,
    text: `Мероприятие было создано`,
    types: ["Дизайн", "Музыка", "Архитектура", "Живопись", "It"],
    type: "Дизайн",
    dates: [],
    event: {
      title: "",
      description: "",
      type: "Дизайн",
      start: null,
      end: null,
    },
  }),
  components: {
    EventsCalendar,
  },
  computed: {
    ...mapState("user", ["user"]),
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  methods: {
    getEvent(event) {
      this.event = event;
    },
    sendAppeal() {
      this.snackbar = true;
      this.event.start = this.dates[0];
      this.event.end = this.dates[1];
      EventService.createEvent(this.event)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error: ", error.response);
        });
    },
  },
};
</script>

<style scoped>
.eventCard {
  margin: 65px 0 50px 50px;
}
.appealCard {
  padding: 25px;
}
</style>
