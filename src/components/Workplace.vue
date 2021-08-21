<template>
  <v-card elevation="8">
    <v-img height="228" :src="imageItem()"> </v-img>
    <v-card-title primary-title>
      {{ workplace.name }}
    </v-card-title>
    <v-card-text>
      <p class="text-justify">
        {{ workplace.shortDescription }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    imageItem() {
      return require(`@/assets/${this.workplace.image}`);
    },
  },
  props: {
    workplace: Object,
  },
};
</script>

<style lang="scss" scoped></style>
