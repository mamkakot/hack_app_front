<template>
  <!-- с кем сотрудничает и где зависает -->
  <v-container>
    <v-row>
      <!-- user info -->
      <v-col cols="5" class="pa-2 ma-4">
        <v-card flat>
          <v-img src="@/assets/logo1.jpeg"></v-img>
          <v-card-title primary-title>
            Title
          </v-card-title>
          <v-subheader class="grey--text">Направления работы:</v-subheader>

          <v-chip
            class="mx-3"
            v-for="chip in chips"
            :key="chip.id"
            :color="chip.color"
            text-color="white"
          >
            {{ chip.text }}
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
import WorkplaceCard from '@/components/WorkplaceCard.vue'
export default {
  data: () => ({
    chips: [
      {
        id: 1,
        text: 'Музыка',
        color: 'red',
      },
      {
        id: 2,
        text: 'Архитектура',
        color: 'purple',
      },
      {
        id: 3,
        text: 'Живопись',
        color: 'green',
      },
    ],
    workplaces: [
      {
        id: 1,
        label: 'war-hole',
        name: 'Попа Рт',
        image: 'wp1.webp',
        averageAttendance: 32,
        shortDescription:
          'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
      },
      {
        id: 2,
        label: 'orange',
        name: 'Под Вал',
        image: 'wp2.jpg',
        averageAttendance: 15,
        shortDescription:
          'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
      },
    ],
  }),
  components: {
    WorkplaceCard,
  },
  props: {
    user: Object,
  },
}
</script>

<style lang="scss" scoped></style>
