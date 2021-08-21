<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-card
        v-bind="attrs"
        v-on="on"
        @click="handle"
        elevation="7"
        class="justify-center card"
      >
        <v-card-title primary-title>
          <div>{{ notification.title }}</div>
        </v-card-title>

        <v-card-text>
          <div>{{ notification.senderName }}</div>
        </v-card-text>
      </v-card>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2 title">
        {{ notification.title }}
      </v-card-title>

      <v-card-text>
        {{ notification.description }}
      </v-card-text>

      <hr v-if="response" />
      <AppealForm v-if="response" class="form"/>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" text @click="response = true">
          Ответ
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="
            dialog = false;
            response = false;
          "
        >
          Закрыть
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AppealForm from "@/components/AppealForm";

export default {
  data: () => ({
    dialog: false,
    response: false,
  }),
  components: {
    AppealForm,
  },
  methods: {
    handle() {},
  },
  props: {
    notification: Object,
  },
  computed: {},
};
</script>

<style scoped>
.card {
  margin-bottom: 25px;
}
.title {
  margin-bottom: 15px;
}
.form {
  margin: 25px 0;
}
</style>
