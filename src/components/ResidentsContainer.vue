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
    ResidentCard
  },
  data() {
    return {
      residents: [],
    };
  },
  methods: {
    fetchResidents() {
      EventService.getUsers()
        .then((response) => {
          this.residents = response.data;
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
  },
  created() {
    this.fetchResidents();
  },
}
</script>
