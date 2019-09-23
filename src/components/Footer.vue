<template>
  <div class="footer">
    <div>
      <span class="check">&#10004;</span>
      <span>Footer 1</span>
    </div>
    <div>
      <span class="check">&#10004;</span>
      <span>Footer 2</span>
    </div>
    <div>
      <span class="check">&#10004;</span>
      <span>Footer 3</span>
    </div>
    <div>
      <span class="check">&#10004;</span>
      <span>Footer 4</span>
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
