<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            @click="drawer = false"
            v-for="view in views"
            :key="view.name"
            :to="view.url"
          >
            <v-list-item-icon>
              <v-icon>{{ view.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ view.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    views: [
      {
        name: 'Домашняя страница',
        url: '/',
        icon: 'mdi-home',
      },
      {
        name: 'Резиденты',
        url: '/residents',
        icon: 'mdi-account',
      },
      {
        name: 'Оповещения',
        url: '/notifications',
        icon: 'mdi-bell',
      },
      {
        name: 'Документы',
        url: '/documents',
        icon: 'mdi-file-document',
      },
      {
        name: 'Статистика',
        url: '/dashboard',
        icon: 'mdi-chart-line',
      },

      {
        name: 'Рабочие места',
        url: '/workplaces',
        icon: 'mdi-shopping',
      },
    ],
  }),
};
</script>
