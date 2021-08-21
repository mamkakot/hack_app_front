<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="5">
          <v-row v-for="workplace in workplaces" :key="workplace.id"
            ><v-col><Workplace :workplace="workplace"/></v-col>
          </v-row>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
    </v-container>
  </v-main>
</template>

<script>
import Workplace from '@/components/Workplace.vue';
export default {
  data() {
    return {
      workplaces: [
        {
          id: 1,
          name: 'Cringe Place 1',
          image: 'wp1.webp',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 2,
          name: 'Cringe Place 2',
          image: 'wp2.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 3,
          name: 'Cringe Place 3',
          image: 'wp3.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 3,
          name: 'Cringe Place 4',
          image: 'wp4.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 3,
          name: 'Cringe Place 5',
          image: 'wp5.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 3,
          name: 'Cringe Place 6',
          image: 'wp6.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
      ],
    };
  },
  components: {
    Workplace,
  },
};
</script>

<style lang="scss" scoped></style>
