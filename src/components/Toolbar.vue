<template>
  <div class="flex-between nav">
    <div id="logo">
      <img src="../assets/logo.svg" />
    </div>
    <nav id="navigation-desktop" class="flex-around">
      <a href="#">WEB HOSTING</a>
      <div class="flex-end">
        <div>
          <span class="sales">ON SALE</span>
          <a href="#">CLOUD HOSTING</a>
        </div>
      </div>
      <a href="#">VPS HOSTING</a>
      <a href="#">DOMAIN CHECKER</a>
      <a href="#">WEBSITE BUILDER</a>
    </nav>
    <nav id="mobile-navigation">

    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#menuToggle
{
  display: block;
  position: relative;
  -webkit-user-select: none;
  user-select: none;

}

#menuToggle input
{
  display: block;
  position: absolute;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -100px;
  padding-top: 100px;
  background: black;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(50%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 5px 0;
  font-size: 20px;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

.nav {
  width: 100%;
}
a {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: flex-end;
}
#logo {
  width: 30%;
  display: flex;
  align-items: flex-end;
}
#navigation-desktop {
  width: 70%;
  @include for-tablet-portrait-up {
    display: none;
  }
  @include for-phone-only  {
    display: none;
  }
}
.sales {
  font-size: 10px;
  color: yellow;
}


</style>
