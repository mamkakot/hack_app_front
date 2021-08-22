<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 150px;">
        <v-col cols="6">
          <events-calendar @getEvent="getEvent"/>
        </v-col>
        <v-col cols="6">
          <v-card elevation="7" class="justify-center eventCard">
            <v-card-title primary-title>
              {{ event.name }}
            </v-card-title>

            <v-card-text>
              <div>Тип мероприятия: {{ event.type }}</div>
              <div>Начало: {{ event.start }}</div>
              <div>Конец: {{ event.end }}</div>
              <div>Описание: {{ event.description }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventsCalendar from "@/components/EventsCalendar";
import { mapState } from "vuex";

export default {
  data: () => ({
    event: {}
  }),
  components: {
    EventsCalendar,
  },
  computed: mapState("user", ["user"]),
  methods: {
    getEvent(event) {
      this.event = event;
    }
  }
};
</script>

<style scoped>
.eventCard {
  margin: 65px 0 50px 50px;
}
</style>
