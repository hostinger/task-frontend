<template>
  
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.svg" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">WEB <span class="clr-red">HOSTING</span></a>
            </li>
            <li class="nav-item sale-badge">
              <a class="nav-link" href="#">CLOUD HOSTING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">VPS HOSTING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">DOMAIN CHECKER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">WEBSITE BUILDER</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .nav-item {
    position: relative;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #fff;
    font-weight: 600;
  }
  
  .sale-badge::before {
    content: "on sale";
    position: absolute;
    left: 8px;
    top: -5px;
    color: yellow;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }

  @media (max-width: 991.98px) {
    nav {
      background: rgba(0,0,0,.3);
    }

    .sale-badge::before {
      left: calc(50% - 26px);
    }
  }
</style>
