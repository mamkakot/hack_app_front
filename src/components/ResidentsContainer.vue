<template>
  <div>
    <ResidentCard
      v-for="resident in residents"
      :key="resident.id"
      :resident="resident"
      @updateresidents="fetchResidents"
    />
  </div>
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
      residents: [],
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
  },
  created() {
    this.fetchResidents()
  },
}
</script>
