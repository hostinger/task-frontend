<template>
  <header>
    <div class="main-menu">
      <div class="container">
        <div class="logo">
          <a href="#">
            <img src="../assets/logo.png" alt="">
          </a>
        </div>

        <nav>
          <div class="menu">MENU</div>
          <ul>
            <li v-for="page in pages" v-bind:class="{'sale': page.sale}"><a href="#">{{page.name}}</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'vHeader',
  data(){
    return {
      pages: [{
          name: "web hosting",
          sale: false
        },
        {
          name: "cloud hosting",
          sale: true
        }, {
          name: "vps hosting",
          sale: false
        }, {
          name: "domain checker",
          sale: false
        }, {
          name: "website builder",
          sale: false
        }
      ]
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

a {
  text-decoration: none;
  color: #fff;
}
.main-menu {
  width: 100%;
  z-index: 200;
  position: absolute;
  display: flex;
  align-items: center;
}

.main-menu>.container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 15px;
  margin: 0 auto;
}

.sale::before {
  content: "on sale";
  position: absolute;
  top: -0.5em;
  left: 15px;
  font-size: 10px;
  font-weight: 600;
  color: #eace47;
}

nav {
  text-transform: uppercase;
  margin-left: auto;
  color: #fff;
  font-size: 0.875em;
  font-weight: 600;
}

nav a {
  display: block;
}

nav ul {
  padding: 0;
  margin: 0;
  padding-left: 40px;
  display: flex;
  flex-wrap: nowrap;
}

nav ul li {
  list-style: none;
  position: relative;
  display: inline-block;
}

nav ul li a {
  padding: 10px 15px;
}

nav ul li:last-child {
  margin-right: 0;
}


.logo {
  /* width:100px; */
}

.logo img {
  max-width: 140px;
  vertical-align: middle;
}
.menu{display:none;}

</style>
