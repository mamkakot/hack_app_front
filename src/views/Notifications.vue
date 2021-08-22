<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 150px;" justify="left">
        <v-col cols="10">
          <notification-container />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationContainer from '../components/NotificationContainer.vue';

export default {
  components: {
    NotificationContainer
  },
  computed: mapState('user', ['user']),
};
</script>
