<template>
  <div class="produto">
    <h3>Titulo do livro</h3>
    <div class="img-produto">
      <img src="../assets/img/capa-livro.jpg">
    </div>
    <div class="detalhe-produto">
      <p>Descrição do livro</p>
      <h2>R$ 25,00</h2>
    </div>
    <button class="btn-produto"><icon name="cart-plus"></icon>Adicionar ao carrinho</button>
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

<style>

</style>
