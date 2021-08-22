<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 150px;" justify="left">
        <v-col cols="10">
          <v-dialog v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                outlined
                color="indigo"
                style="margin-bottom: 25px;"
                >Добавить резидента</v-btn
              >
            </template>
            <v-card class="appealCard">
              <v-row justify="center">
                <v-col cols="8">
                  <v-card-text>
                    <v-text-field
                      label="Название"
                      outlined
                      dense
                      required
                      v-model="resident.username"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Почта"
                      outlined
                      dense
                      required
                      v-model="resident.email"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Пароль от личного кабинета"
                      outlined
                      dense
                      required
                      v-model="resident.password"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Телефон"
                      outlined
                      dense
                      required
                      v-model="resident.phone"
                    >
                    </v-text-field>

                    <v-select
                      :items="types"
                      v-model="type"
                      label="Cфера"
                    ></v-select>

                    <v-row align="center">
                      <v-col>
                        <v-btn color="success" @click="sendAppeal"
                          >Создать</v-btn
                        >
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col>
                        <v-btn color="error" @click="dialog = false"
                          >Отмена</v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-snackbar v-model="snackbar" absolute>
                      {{ text }}

                      <template v-slot:action="{ attrs }">
                        <v-btn
                          color="blue"
                          text
                          v-bind="attrs"
                          @click="snackbar = false"
                        >
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>
          <residents-container />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResidentsContainer from "../components/ResidentsContainer.vue";
import EventService from "@/services/EventService";

export default {
  data: () => ({
    dialog: false,
    filled: false,
    snackbar: false,
    text: `Резидент был добавлен`,
    types: ["Дизайн", "Музыка", "Архитектура", "Живопись", "It"],
    type: "Дизайн",
    resident: {
      username: "",
      email: "",
      password: "",
      phone: "",
      type: "",
    },
  }),
  components: {
    ResidentsContainer,
  },
  methods: {
    sendAppeal() {
      this.snackbar = true;
      this.resident.type = 0;
      EventService.createUser(this.resident)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error: ", error.response);
        });
    },
  },
  computed: mapState("user", ["user"]),
};
</script>

<style lang="scss" scoped>
.appealCard {
  padding: 25px;
}
</style>
