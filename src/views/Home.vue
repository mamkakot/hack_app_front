<template>
<<<<<<< HEAD
  <Dashboard>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
  export default {
  components: {
    Dashboard
    },
  }
</script>

<style lang="scss" scoped>

</style>
=======
  <div>
    <h1>{{ user }}</h1>
    <AppealForm />
  </div>
</template>

<script>
import AppealForm from "@/components/AppealForm.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppealForm
  },
  computed: mapState("user", ["user"]),
};
</script>
>>>>>>> 455d340b1cb2eca6131a8f626b7025dd05c04d69
