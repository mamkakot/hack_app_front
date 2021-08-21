<template>
  <v-card @click="handle" elevation="7" class="justify-center">
    <v-card-title primary-title>
      {{ resident.name }}
    </v-card-title>

    <v-card-text>
      <div>{{ notification.body }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    handle() {
      
    }
  },
  props: {
    resident: Object,
  },
};
</script>

<style scoped></style>
