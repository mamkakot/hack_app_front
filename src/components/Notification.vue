<template>
  <v-card @click="handle" elevation="7" class="justify-center">
    <v-card-title primary-title>
      {{ notification.title }}
    </v-card-title>

    <v-card-text>
      <div>{{ notification.body }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {},
  props: {
    notification: Object,
  },
};
</script>

<style scoped></style>
