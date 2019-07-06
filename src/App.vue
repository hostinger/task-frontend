<template>
  <div id="app">
    <Header :menu="menu" :saleItem="sale.item"></Header>
    <Content :sale="sale"></Content>
  </div>
</template>

<script>
import Header from './layout/Header';
import Content from './layout/Content';
import moment from 'moment'
export default {
  name: 'app',
  components: {
    Header,
    Content
  },
  data() {
    return {
      menu: [
        { name: 'Web Hosting', url: '#' },
        { name: 'Cloud Hosting', url: '#' },
        { name: 'VPS Hosting', url: '#' },
        { name: 'Domain Checker', url: '#' },
        { name: 'Website Builder', url: '#' },
      ],
      sale: {
        item: 'Web Hosting',
        originalPrice: 8,
        salePrice: 1.45,
        endDate: [2019, 6, 25],
        discount: 0,
        diff: { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }
  },
  mounted () {
    setInterval(this.incrementTime, 1000);
    this.sale.discount = this.calculateDiscount();
  },
  methods: {
    incrementTime() {
      const now = moment();
      const end = moment(this.sale.endDate);
      const diffDays = end.diff(now, 'days');
      const diffHours =  end.diff(now, 'hours');
      const diffMinutes = end.diff(now, 'minutes');
      const diffSeconds = end.diff(now, 'seconds');
      const diff = {
        days: this.padWithZero(diffDays),
        hours: this.padWithZero(diffHours - diffDays * 24),
        minutes: this.padWithZero(diffMinutes - diffHours * 60),
        seconds: this.padWithZero(diffSeconds - diffMinutes * 60)
      }
      this.sale.diff = diff;
    },
    calculateDiscount() {
      return Math.round(
        100 - (this.sale.salePrice / this.sale.originalPrice * 100)
      );
    },
    padWithZero(number) {
      return number < 10 ? '0' + number.toString() : number.toString();
    }
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0px;
}
#app {
  background-color: $white;
  background-image: url('assets/background.jpg');
  background-size: cover;
  height: 100vh;
}
</style>
