<template>
  <v-card class="mx-auto mt-5" width="520">
    <v-card-text>
      <v-text-field label="Тема" outlined dense required> </v-text-field>
      <v-textarea
        solo
        label="Текст обращения"
        hint="Введите текст обращения"
        outlined
        required
      ></v-textarea>
      <v-row align="center">
        <v-col>
          <v-file-input counter multiple show-size></v-file-input>
        </v-col>

        <v-spacer></v-spacer>
        <v-col>
          <v-btn color="success" @click="snackbar = true">Отправить</v-btn>
        </v-col>
        <v-col>
          <v-btn color="error" @click="dialog = false">Отмена</v-btn>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" absolute>
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    filled: false,
    snackbar: false,
    text: `Отправлено`
  }),
  methods: {
    sendAppeal(msg) {
      console.log(msg);
    },
  },
};
</script>

<style lang="scss" scoped></style>
