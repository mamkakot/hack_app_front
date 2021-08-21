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
          <div>{{ notification.user }}</div>
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

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Закрыть
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    handle() {},
  },
  props: {
    notification: Object,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 25px;
}
.title {
  margin-bottom:15px;
}
</style>
