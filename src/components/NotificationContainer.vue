<template>
  <div>
    <Notification 
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification"
    @updateNotifications="fetchNotifications"
    />
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    Notification
  },
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    fetchNotifications() {
      EventService.getNotifications(0)
        .then((response) => {
          this.notifications = response.data;
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
  },
  created() {
    this.fetchNotifications();
  },
}
</script>
