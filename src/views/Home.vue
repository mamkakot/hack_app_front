<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 150px;">
        <v-col cols="8">
          <events-calendar />
        </v-col>
        <v-col cols="4">
          <notification-container />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventsCalendar from '@/components/EventsCalendar'
import NotificationContainer from '@/components/NotificationContainer'
import { mapState } from "vuex";

export default {
  components: {
    EventsCalendar,
    NotificationContainer
  },
  computed: mapState('user', ['user']),
};
</script>
