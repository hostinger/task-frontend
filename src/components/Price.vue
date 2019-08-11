<template>
  <div class="vertical-center">
    <div class="content">
      <span class="vertical-center mid-size-font">$</span>
      <div class="felx-layout">
        <div class="column align-center">
          <span class="bubble">SAVE 82%</span>
          <b class="large-size-font">1</b>
        </div>
        <div class="column center">
          <span class="mid-size-font">45</span>
          <span class="mid-size-font">/mo</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.align-center {
  align-items: center;
}
.felx-layout {
  display: flex;
}
.content {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @include for-tablet-portrait-up {
    justify-content: center;
  }
  @include for-phone-only {
    justify-content: center;
  }
  color: white;
}
.center {
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
}
.vertical-center {
  display: flex;
  justify-items: unset;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
}
.mid-size-font {
  font-size: 10vh;
  @include for-phone-only {
    font-size: 8vh;
  }
}
.large-size-font {
  font-size: 40vh;
  margin-top: -25%;
  @include for-phone-only {
    margin-top: -10%;
    font-size: 20vh;
  }
}
.messages {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 15px;
}

.bubble {
  width: 100px;
  padding: 10px;
  position: relative;
  z-index: -1;
  background: #fd9c9c;
  color: white;
  text-align: center;
  font-weight: bold;
}
.bubble:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: 40%;
  bottom: -10px;
  width: 0;
  height: 0;
  border-top: 10px solid #fd9c9c;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
}
</style>
