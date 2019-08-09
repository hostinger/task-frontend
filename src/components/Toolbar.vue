<template>
  <div class="flex-around">
    <div id="logo">
      <img src="../assets/logo.svg" />
    </div>
    <div id="navigation" class="flex-around">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
#navigation {
  width: 70%;
}
.sales {
  font-size: 10px;
  color: yellow;
}
</style>
