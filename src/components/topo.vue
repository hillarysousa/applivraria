<template>
  <div class="header">
    <button class="arrow"><icon name="chevron-left" scale="1.5"></icon></button>
    <h1>Livraria Flip</h1>
    <button class="cart"><icon name="shopping-cart" scale="1.5"></icon></button>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  export default {
    components: {
      Icon
    }
  }
</script>

<style lang="scss">
  @mixin whiteColor() {
    color: #FFF;
  }
  .header {
    width: 100%;
    clear: both;
    line-height:1.1;
    text-align: center;
    background: #2c9201;
    padding: 10px 0;
      h1 {
        @include whiteColor();
        display: inline-block;
        margin: 0;
    }
  }

  .btn {
    background: transparent;
    box-shadow: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  .arrow {
    @extend .btn;
    @include whiteColor();
    margin-left: 5%;
    float: left;
  }

  .cart {
    @extend .btn;
    @include whiteColor();
    margin-right: 5%;
    float: right;
  }
</style>
