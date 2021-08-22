<template>
  <v-container>
    <v-chip-group v-model="filterProps" column multiple>
      <v-chip filter outlined v-for="chip in chips" :key="chip.id">
        {{ chip.text }}
      </v-chip>
    </v-chip-group>
    <div v-for="resident in residents" :key="resident.id">
      <ResidentCard
        v-if="filterProps.includes(resident.chip.id)"
        :resident="resident"
        @updateresidents="fetchResidents"
      />
    </div>
  </v-container>
</template>

<script>
import ResidentCard from '@/components/ResidentCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    ResidentCard,
  },
  data() {
    return {
      filterProps: [0, 1, 2],
      residents: [],
      chips: [
        {
          id: 0,
          text: 'Музыка',
          color: 'red',
        },
        {
          id: 1,
          text: 'Архитектура',
          color: 'purple',
        },
        {
          id: 2,
          text: 'Живопись',
          color: 'green',
        },
      ],
    }
  },
  methods: {
    fetchResidents() {
      EventService.getUsers()
        .then((response) => {
          this.residents = response.data
          this.addRandomChip()
          console.log(this.residents)
        })
        .catch((error) => {
          console.log('There was an error: ' + error.response)
        })
    },

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },

    addRandomChip() {
      this.residents.forEach((element) => {
        element['chip'] = this.chips[this.getRandomInt(0, 3)]
      })
    },

    print() {
      console.log(this.filterProps)
    },
  },
  created() {
    this.fetchResidents()
  },

  computed: {
    filterResidents() {
      let arr = this.chips.map((i) => i.text)

      return arr
    },
  },
}
</script>
