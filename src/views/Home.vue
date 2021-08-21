<template>
  <div>
    <h1>{{ user }}</h1>
    <AppealForm />
  </div>
</template>

<script>
import AppealForm from '@/components/AppealForm.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppealForm,
  },
  computed: mapState('user', ['user']),
};
</script>
