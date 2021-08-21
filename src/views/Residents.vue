<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 150px;" justify="center">
        <v-col cols="8">
          <residents-container />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResidentsContainer from '../components/ResidentsContainer.vue';

export default {
  components: {
    ResidentsContainer
  },
  computed: mapState('user', ['user']),
};
</script>
