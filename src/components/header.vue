<template>
  <nav class="container fixed-top navbar navbar-expand-lg navbar-dark mt-1">
    <a class="navbar-brand" href="#"><img alt="Hostinger logo" src="@/assets/logo.png"></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Web hosting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cloud hosting
            <span class="top-info">On Sale</span>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">VPS hosting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Domain checker</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Website builder</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-toggler {
  background-color:purple!important;
}
.navbar-collapse.show,
.navbar-collapse.collapsing {
  @media (max-width: 992px) {
    background-color: purple;
    border-radius: 5px;
  }
}
.navbar-brand {
  img {
    height: 26px;
  }
}
.nav-link {
  font-size: 13px !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:white !important;

  /*padding: 0 0 !important;*/
  margin: 0 6px !important;
  position:relative;
  transition: all .5s;
  &:hover {
    opacity: 0.5 !important;
  }
  .top-info {
    text-align: center;
    font-size: 9px;
    letter-spacing: 0.05;
    color: #FBE13E;
    position: absolute;
    top:-2px;
    left:0.5rem;
    @media (max-width: 992px) {
      left:45%;
    }
  }
}
nav {
  background-color: transparent;
}
</style>
