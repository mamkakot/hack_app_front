<template>
  <v-card class="mx-auto mt-5" width="520">
    <v-card-text>
      <v-textarea
        solo
        label="Ответ"
        hint="Ответ"
        outlined
        required
        v-model="notification.description"
      ></v-textarea>
      <v-row align="center">
        <v-col>
          <v-file-input counter multiple show-size></v-file-input>
        </v-col>

        <v-spacer></v-spacer>
        <v-col>
          <v-btn color="success" @click="sendAppeal">Отправить</v-btn>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" absolute>
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card-text>
  </v-card>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  props: {
    not: Object    
  },
  data: () => ({
    filled: false,
    snackbar: false,
    text: `Отправлено`,
    notification: {
      title: "",
      description: "",
      receiver: 2,
      sender: 1,
    },
  }),
  methods: {
    sendAppeal() {
      this.snackbar = true
      this.notification.title = this.not.title
      EventService.createNotification(this.notification)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error: ", error.response);
        });
    },
  },
  created() {
  },
};
</script>

<style lang="scss" scoped></style>
