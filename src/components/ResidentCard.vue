<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-card v-bind="attrs" v-on="on" elevation="7" class="justify-center">
        <v-card-title primary-title>
          {{ resident.name }}
        </v-card-title>

        <v-card-text>
          <div>Почта: {{ resident.email }}</div>
          <div>Телефон: {{ resident.phone }}</div>
        </v-card-text>
      </v-card>
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
            v-if="type !== 'Чек'"
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
                <v-file-input counter multiple show-size></v-file-input>
              </v-col>

              <v-spacer></v-spacer>
              <v-col>
                <v-btn color="success" @click="sendAppeal">Отправить</v-btn>
              </v-col>
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
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  data: () => ({
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
  methods: {
    handle() {},
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
  props: {
    resident: Object,
  },
  components: {},
};
</script>

<style scoped>
.appealCard {
  padding: 25px;
}
</style>
