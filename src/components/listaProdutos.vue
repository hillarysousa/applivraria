<template>
  <div>
    <div class="produto"  v-for="l in livros">
      <h3>{{ l.titulo }}</h3>
      <div class="img-produto">
        <img :src="l.capa">
      </div>
      <div class="info-produto">
        <p class="autor">Autor(a): {{ l.autor }}</p>
        <p class="editora">Editora: {{ l.editora }}</p>
        <p class="ano-lancamento">Ano de lançamento: {{ l.ano_lanc }}</p>
        <h2>R$ {{ formatoValor(l.preco) }}</h2>
      </div>
      <button class="btn-produto" @click="addProduto(l)"><icon name="cart-plus" scale="1.3"></icon> Adicionar ao carrinho</button>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  export default {
    components: {
      Icon
    },
    computed: {
      livros () {
        return this.$store.getters.listaLivros
      }
    },
    methods: {
      addProduto (livro) {
        this.$store.dispatch('addProduto', livro)
      },
      formatoValor (valor) {
        let val = (valor / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    }
  }
</script>

<style lang="scss">
  .produto {
    width: 31%;
    margin: 20px 1% 0;
    border: 1px solid #ccc;
    float: left;
    @media #{$mq-xs} {
      width: 96%;
      margin: 20px 2% 10px;
    }
    @media #{$mq-sm} {
      width: 47%;
    }
    h3 {
      font-size: 15px;
      color: #333;
      text-align: center;
    }
    .img-produto {
      width: 25%;
      float: left;
      margin-left: 20px;
      img {
        display: block;
        width: 100%;
      }
    }
    .info-produto {
      float: left;
      width: 60%;
      margin-left: 20px;
      p {
        font-size: 12px;
        color: #444;
      }
      h2 {
        font-size: 30px;
        margin: 0;
        line-height: 1;
        margin-bottom: 15px;
      }
    }
    .btn-produto {
      background: $mainColor;
      border: none;
      width: 100%;
      padding: 13px;
      border-radius: 0;
      color: #FFF;
      font-family: $lato;
      cursor: pointer;
      margin-top: 15px;
      .fa-icon {
        vertical-align: text-bottom;
        margin-right: 5px;
      }
      &:hover {
        background: #1e6600;
      }
    }
  }
</style>
