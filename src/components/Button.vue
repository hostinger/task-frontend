<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.button {
  background-color: $primary;
  border: none;
  border-radius: 5px;
  padding: 1.1rem 3rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: $white;
  text-transform: uppercase;
  max-width: 50%;
  @media (max-width: 900px){
    max-width: 80%;
  }
}

</style>
