<template>
  <v-main>
    <v-container>
      <v-row>
        <template v-for="(workplace, index) in workplaces">
          <v-col :key="index" cols="6">
            <Workplace :workplace="workplace" />
          </v-col>
          <v-spacer :key="index"></v-spacer>
          <v-responsive
            v-if="index % 2 !== 0"
            :key="`width-${index}`"
            width="100%"
          ></v-responsive>
        </template>
      </v-row>
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
          name: 'Площадка 1',
          image: 'wp1.webp',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 2,
          name: 'Площадка 2',
          image: 'wp2.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 12,
          name: 'Площадка 3',
          image: 'wp3.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 4,
          name: 'Площадка 4',
          image: 'wp4.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 5,
          name: 'Площадка 5',
          image: 'wp5.jpg',
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 6,
          name: 'Площадка 6',
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
