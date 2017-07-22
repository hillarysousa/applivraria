<template>
  <div class="box-info">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  $font: 'Dosis', sans-serif;
  $mainColor: #c3c3c3;
  body {
    font-family: $font;
    color: $mainColor;
  }
</style>
