<template>
  <div>
    <h1>{{ user }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  computed: mapState('user', ['user']),
};
</script>
