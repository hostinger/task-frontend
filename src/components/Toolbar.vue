<template>
  <div class="toolbar">
    <img alt="hostinger logo" src="../assets/logo.svg"  width="50px" height="50px" />
    <nav class="navigation desktop">
      <a class="item" href="#">Header 1</a>
      <div class="item">
        <div class="sales-item ">
          <span class="sales">ON SALE</span>
          <a href="#">Header 2</a>
        </div>
      </div>
      <a class="item" href="#">Header 3</a>
      <a class="item" href="#">Header 4</a>
      <a class="item" href="#">Header 5</a>
    </nav>
    <nav class="mobile">
      <div class="content-area">
        <nav class="main">
          <div class="mobile-menu-btn" @click="toggleMobile">
            <span></span>
          </div>
          <ul class="menu">
            <li>Header 1</li>
            <li>
              <div class="sales-item ">
                <span class="sales">ON SALE</span>
                <a href="#">Header 2</a>
              </div>
            </li>
            <li>Header 3</li>
            <li>Header 4</li>
            <li>Header 5</li>
          </ul>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMobile() {
      const menuButton = document.querySelector(".mobile-menu-btn");
      const menu = document.querySelector(".menu");
      menuButton.classList.toggle("open");
      menu.classList.toggle("visible");
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 20%;
  @include for-phone-only {
    width: 40%;
  }
}
.toolbar {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
}
nav {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  @include for-phone-only {
    width: 100%;
    justify-content: flex-end;
    padding-right: 0;
  }
}
a {
  color: white;
  text-decoration: none;
}
.item {
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 13px;
  width: 200px;
  @include for-tablet-portrait-up {
    font-size: 11px;
  }
  @include for-tablet-landscape-up {
    font-size: 11px;
  }
}
.sales-item {
  display: flex;
  flex-direction: column;
}
.sales {
  color: yellow;
  font-size: 10px;
  @include for-tablet-landscape-up {
    font-size: 8px;
  }
}
.desktop {
  @include for-phone-only {
    display: none;
  }
}
.mobile {
  display: none;
  @include for-phone-only {
    display: inline;
  }
}

@include for-phone-only {
  nav.main {
    float: right;
  }
  .menu {
    position: absolute;
    right: 5%;
    list-style: none;
    font: {
      family: "Open Sans", sans-serif;
      weight: 600;
    }
    color: white;
    background: rgba(145, 144, 212, 0.95);
    text-transform: uppercase;
    padding: 15px;
    opacity: 0;

    li {
      padding: 5px;

      &:not(:first-child) {
        border-top: 1px solid white;
      }
    }

    &.visible {
      right: 5%;
      opacity: 1;
    }
  }

  .mobile-menu-btn {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 14px;
    cursor: pointer;

    span {
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 2px;
      background-color: white;
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    &:before,
    &:after {
      content: "";
      display: inline-block;
      width: 18px;
      height: 2px;
      background-color: white;
      position: absolute;
    }

    &:before {
      top: 0;
      transform: rotate(0deg);
      transition: transform 0.25s ease, top 0.25s ease 0.25s;
    }

    &:after {
      bottom: 0;
      transform: rotate(0deg);
      transition: transform 0.25s ease, bottom 0.25s ease 0.25s;
    }

    &.open {
      span {
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      &:before {
        top: 6px;
        transform: rotate(45deg);
        transition: transform 0.25s ease 0.25s, top 0.25s ease;
      }

      &:after {
        bottom: 6px;
        transform: rotate(-45deg);
        transition: transform 0.25s ease 0.25s, bottom 0.25s ease;
      }
    }
  }
}
</style>
