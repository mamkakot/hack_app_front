<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- DatePicker element -->
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
              label="Choose dates"
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
                updateCharts();
                $refs.menu.save(dates);
              "
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <apexcharts
          ref="chart"
          type="line"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>

      <v-col>
        <apexcharts
          ref="chart2"
          type="bar"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <apexcharts
          ref="chart3"
          type="area"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
      <v-col>
        <apexcharts
          ref="chart4"
          type="line"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <apexcharts
          ref="chart5"
          type="radar"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
      <v-col>
        <apexcharts
          ref="chart6"
          type="scatter"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <apexcharts
          ref="chart7"
          type="bubble"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
      <v-col>
        <apexcharts
          ref="chart8"
          type="line"
          :options="chartOptions"
          :series="series"
        >
        </apexcharts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      dates: [],
      values: [],
      menu: false,
      chartOptions: {
        chart: {
          id: 'basic-bar',
          redrawOnParentResize: true,
          sparkline: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#e76f51', '#2a9d8f', '#264653'],
        fill: {
          opacity: 1,
          type: 'solid',
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
              maxItems: 100,
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
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ');
    },
  },
  methods: {
    updateCharts() {
      this.$refs.chart.updateSeries([
        { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
      ]);
      this.$refs.chart2.updateSeries([
        { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
      ]);
      this.$refs.chart3.updateSeries([
        { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
      ]);
      this.$refs.chart4.updateSeries([
        {
          type: 'line',
          data: this.getRandomNumbersArray(this.daysBetweenDates()),
        },
        {
          type: 'bar',
          data: this.getRandomNumbersArray(this.daysBetweenDates()),
        },
      ]);
      this.$refs.chart5.updateSeries([
        { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
      ]);
      this.$refs.chart6.updateSeries([
        { data: this.getRandomNumbersArray(this.daysBetweenDates()) },
      ]);
      this.$refs.chart7.updateSeries([
        {
          data: [
            this.getRandomNumbersArray(this.daysBetweenDates()),
            this.getRandomNumbersArray(this.daysBetweenDates()),
            this.getRandomNumbersArray(this.daysBetweenDates()),
            this.getRandomNumbersArray(this.daysBetweenDates()),
            this.getRandomNumbersArray(this.daysBetweenDates()),
            this.getRandomNumbersArray(this.daysBetweenDates()),
          ],
        },
      ]);
      this.$refs.chart8.updateSeries([
        {
          type: 'line',
          data: this.getRandomNumbersArray(this.daysBetweenDates()),
        },
        {
          type: 'bar',
          data: this.getRandomNumbersArray(this.daysBetweenDates()),
        },
        {
          type: 'area',
          data: this.getRandomNumbersArray(this.daysBetweenDates()),
        },
      ]);
    },
    daysBetweenDates() {
      const date1 = new Date(this.dates[0]);
      const date2 = new Date(this.dates[1]);
      const diffTime = Math.abs(date2 - date1);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    getRandomNumbersArray(size) {
      let array = new Array(size);
      for (let i = 0; i < size; i++) {
        array[i] = this.getRandomInt(100, 255);
      }
      return array;
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
};
</script>

<style scoped></style>
