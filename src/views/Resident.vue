<template>
  <!-- с кем сотрудничает и где зависает -->
  <v-container>
    <v-row>
      <!-- user info -->
      <v-col cols="5" class="pa-2 ma-4">
        <v-card flat>
          <v-img src="@/assets/logo1.jpeg"></v-img>
          <v-card-title primary-title>
            {{ resident.name }}
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" persistent max-width="800px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" outlined color="indigo"
                  >Сообщение</v-btn
                >
              </template>
              <v-card class="appealCard">
                <v-row justify="center">
                  <v-col cols="8">
                    <v-card-text>
                      <v-text-field
                        label="Тема"
                        outlined
                        dense
                        required
                        v-model="notification.title"
                      >
                      </v-text-field>
                      <v-select
                        :items="types"
                        v-model="type"
                        label="Оповещение"
                      ></v-select>
                      <v-textarea
                        v-if="type == 'Оповещение'"
                        solo
                        label="Текст обращения"
                        hint="Введите текст обращения"
                        outlined
                        required
                        v-model="notification.description"
                      ></v-textarea>
                      <v-text-field
                        v-if="type == 'Чек'"
                        label="Сумма"
                        value=""
                        v-model="notification.payment"
                      ></v-text-field>
                      <v-row align="center">
                        <v-col>
                          <v-file-input
                            counter
                            multiple
                            show-size
                          ></v-file-input>
                        </v-col>

                        <v-spacer></v-spacer>
                        <v-col>
                          <v-btn color="success" @click="sendAppeal"
                            >Отправить</v-btn
                          >
                        </v-col>
                        <v-col>
                          <v-btn color="error" @click="dialog = false"
                            >Отмена</v-btn
                          >
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
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
          </v-card-title>
          <hr />
          <br />
          <div>Почта:   {{ resident.email }}</div>
          <div>Телефон: {{ resident.phone }}</div>
          <v-subheader class="grey--text">Направления работы:</v-subheader>

          <v-chip
            class="mx-3"
            :color="resident.chip.color"
            text-color="white"
          >
            {{ resident.chip.text }}
          </v-chip>
          <v-divider class="my-4"></v-divider>
          <v-card-text>
            <p class="grey--text">О компании:</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <p class="display-1">Арендует:</p>
        <WorkplaceCard
          v-for="workplace in workplaces"
          :key="workplace.id"
          :workplace="workplace"
          class="mb-6"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventService from "@/services/EventService";

import WorkplaceCard from "@/components/WorkplaceCard.vue";
export default {
  data: () => ({
    chips: [
      {
        id: 1,
        text: "Музыка",
        color: "red",
      },
      {
        id: 2,
        text: "Архитектура",
        color: "purple",
      },
      {
        id: 3,
        text: "Живопись",
        color: "green",
      },
    ],
    workplaces: [
      {
        id: 1,
        label: "war-hole",
        name: "Зона муз. индустрии",
        image: "wp1.webp",
        averageAttendance: 22,
        shortDescription:
          "Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.",
      },
      {
        id: 2,
        label: "orange",
        name: "Архитектура",
        image: "wp2.jpg",
        averageAttendance: 15,
        shortDescription:
          "Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.",
      },
    ],
    dialog: false,
    filled: false,
    snackbar: false,
    text: `Отправлено`,
    types: ["Оповещение", "Чек"],
    type: "Оповещение",
    notification: {
      title: "",
      description: "",
      payment: 0,
      receiver: 1,
      sender: 0,
    },
  }),
  components: {
    WorkplaceCard,
  },
  props: {
    username: String,
    resident: Object,
  },
  methods: {
    fetchUser() {
      EventService.getUser(this.username)
        .then((response) => {
          this.resident = response.data;
        })
        .catch((error) => {
          console.log("There was an error: ", error.response);
        });
    },
    sendAppeal() {
      this.snackbar = true;
      this.notification.receiver = this.resident.id;
      this.notification.payment = parseInt(this.notification.payment);
      console.log(this.notification);
      if (this.type == "Чек") {
        EventService.createCheck(this.notification)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log("There was an error: ", error.response);
          });
      } else {
        EventService.createNotification(this.notification)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log("There was an error: ", error.response);
          });
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style lang="scss" scoped>
.appealCard {
  padding: 25px;
}
.card {
  margin-bottom: 25px;
}
</style>
