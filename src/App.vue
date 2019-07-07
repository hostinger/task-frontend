<template>
  <div id="app">
    <Header
      :menu="menu"
      :saleItem="sale.item"
      :isMobile="isMobile"
    >
    </Header>
    <Content :sale="sale"></Content>
    <Footer :footer="footer"></Footer>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'app',
  components: {
    Header: () => import('./layout/Header'),
    Content: () => import('./layout/Content'),
    Footer: () => import('./layout/Footer')
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
        offer: 'New Year Offer',
        item: 'Web Hosting',
        cta: 'Get started now',
        originalPrice: 8,
        salePrice: 1.45,
        endDate: [2019, 6, 25],
        discount: 0,
        diff: { days: 0, hours: 0, minutes: 0, seconds: 0 }
      },
      footer: [
        'Guaranteed 99.9% Uptime',
        'Superior Speed Performance',
        '24/7 Support Chat',
        '30-Day Money-Back Guarantee'
      ],
      isMobile: window.innerWidth <= 900
    }
  },
  mounted () {
    setInterval(this.incrementTime, 1000);
    this.incrementTime();
    this.sale.discount = this.calculateDiscount();
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 900;
      });
    });
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
body, html {
  height: 100%;
  min-height: 100%;
  margin: 0px;
  font-size: 100%;
  @media (max-width: 1250px) {
    font-size: 90%;
  }
  @media (max-width: 1150px) {
    font-size: 80%;
    height: auto;
  }
}
#app {
  @include flex(column, space-between);
  font-family: $mainFont;
  background-color: $white;
  background-image: url('assets/background.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>
