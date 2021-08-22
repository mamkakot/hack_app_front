<template>
  <v-container>
    <v-row align="center">
      <v-col cols="6">
        <v-card-title primary-title>
          <h1 class="display-1">{{ workplace.name }}</h1>
        </v-card-title>
        <v-card-subtitle class="grey--text">
          Средняя проходимость: {{ workplace.averageAttendance }} тыс. человек в
          год
        </v-card-subtitle>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5" class="mt-12">
        <v-img :src="imageItem()"> </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="vselectValue"
          @change="update()"
          :items="items"
          label="Тип графика"
        ></v-select>

        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              label="Период"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dates" no-title scrollable range>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">
              Отмена
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="
                $refs.chart.updateSeries([
                  { data: getRandomNumbersArray(daysBetweenDates()) },
                ])
                $refs.menu.save(dates)
              "
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <apexcharts
          ref="chart"
          type="bar"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  data: function() {
    return {
      vselectValue: 'Посещаемость',
      items: ['Посещаемость', 'Прибыль'],
      dates: ['2021-06-12', '2021-07-12'],
      menu: false,
      chartOptions: {
        chart: {
          redrawOnParentResize: true,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#e76f51', '#2a9d8f', '#264653'],
        fill: {
          opacity: 1,
          type: 'solid',
        },
        xaxis: {
          type: 'category',
          tickPlacement: 'on',
          labels: {
            show: false,
            hideOverlappingLabels: true,
          },
          title: {
            text: 'Посещаемость',
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: '80%',
            barHeight: '70%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            dataLabels: {
              position: 'top',
              maxItems: 20,
              hideOverflowingLabels: true,
            },
          },
        },
      },
      series: [
        {
          name: 'Посещаемость',
          data: [],
        },
      ],
    }
  },
  props: {
    workplace: Object,
  },
  components: {
    apexcharts: VueApexCharts,
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    },
  },
  methods: {
    update() {
      this.$refs.chart.updateOptions({
        xaxis: {
          title: { text: this.vselectValue },
        },
      })
      this.$refs.chart.updateSeries([
        { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
      ])
    },
    imageItem() {
      return require(`@/assets/${this.workplace.image}`)
    },
    daysBetweenDates() {
      const date1 = new Date(this.dates[0])
      const date2 = new Date(this.dates[1])
      const diffTime = Math.abs(date2 - date1)
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    },
    getRandomNumbersArray(size) {
      let array = new Array(size)
      for (let i = 0; i < size; i++) {
        array[i] = this.getRandomInt(100, 255)
      }
      return array
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
  },

  mounted() {
    this.$refs.chart.updateSeries([
      { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
    ])
  },
}
</script>

<style lang="scss" scoped></style>
