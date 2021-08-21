<template>
    <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Title
            </v-card-title>

            <v-textarea
              solo
              label='Введите текст обращения, например: "Плати деньги, собака"'
              hint="Введите текст обращения"></v-textarea>

            <v-file-input
              counter
              multiple
              show-size
            ></v-file-input>
          </v-card>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>