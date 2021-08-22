<template>
  <div>
    <v-btn
      v-for="user in users"
      :key="user.id"
      :to="{
        name: 'User',
        params: { username: user.username, user: user },
      }"
    >
      {{ user.username }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [
      {
        id: 1,
        username: 'pahome',
      },
      {
        id: 2,
        username: 'johndoe',
      },
      {
        id: 3,
        username: 'cringe',
      },
      {
        id: 4,
        username: 'animegirl1337',
      },
    ],
  }),
}
</script>
