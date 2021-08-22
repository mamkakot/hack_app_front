<template>
  <v-card
    :to="{
      name: 'Resident',
      params: { username: resident.name, resident: resident },
    }"
    elevation="7"
    class="justify-center card"
    @click="route"
  >
    <v-card-title primary-title>
      {{ resident.name }}
    </v-card-title>

    <v-card-text>
      <div>Почта: {{ resident.email }}</div>
      <div>Телефон: {{ resident.phone }}</div>
    </v-card-text>
  </v-card>
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
    route() {},
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
.card {
  margin-bottom: 25px;
}
</style>
