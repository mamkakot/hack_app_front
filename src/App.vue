<template>
  <v-app>
    
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span class="mr-2">Pososi</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="drawer = false" v-for="view in views" :key="view.name">
            <v-list-item-icon>
              <v-icon>{{view.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{view.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
        <AppealForm />
    </v-main>
  </v-app>
</template>

<script>
import AppealForm from '@/components/AppealForm.vue';
export default {
  
  name: 'App',

  components: {
    AppealForm
  },

  data: () => ({
    drawer: false,
    group: null,
    views: [
      {
        name: 'Home',
        url: '/',
        icon: 'mdi-home'
      },

      {
        name: 'Pahome',
        url: '/',
        icon: 'mdi-account'
      }
    ]
  }),
};
</script>
