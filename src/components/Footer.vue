<template>
  <div class="footer">
    <div>
      <span class="check">&#10004;</span>
      <span>Guaranteed 99.9% Uptime</span>
    </div>
    <div>
      <span class="check">&#10004;</span>
      <span>Super Speed Performance</span>
    </div>
    <div>
      <span class="check">&#10004;</span>
      <span>24/7 Supprot Chat</span>
    </div>
    <div>
      <span class="check">&#10004;</span>
      <span>30-Day Money-back Guarantee</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.check {
  color: green;
  font-weight: bold;
  margin-right: 5px;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  @include for-phone-only {
    font-size: 11px;
    text-align: right;
  }
  @include for-tablet-portrait-up {
    font-size: 10px;
    text-align: right;
  }
  @include for-tablet-landscape-up {
    font-size: 11px;
  }
}
</style>
