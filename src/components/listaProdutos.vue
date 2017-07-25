<template>
  <div>
    <div class="produto"  v-for="livro in livros">
      <h3>{{ livro.titulo }}</h3>
      <div class="img-produto">
        <img :src="livro.capa">
      </div>
      <div class="info-produto">
        <p class="autor">Autor(a): {{ livro.autor }}</p>
        <p class="editora">Editora: {{ livro.editora }}</p>
        <p class="ano-lancamento">Ano de lançamento: {{ livro.ano_lanc }}</p>
        <h2>R$ {{ livro.preco }}</h2>
      </div>
      <button class="btn-produto"><icon name="cart-plus" scale="1.3"></icon> Adicionar ao carrinho</button>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  export default {
    components: {
      Icon
    },
    data () {
      return {
        livros: [
          {
            titulo: 'Harry Potter e a Pedra Filosofal',
            autor: 'J.K. Rowling',
            editora: 'Rocco',
            ano_lanc: '2000',
            preco: '23,10',
            capa: require('../assets/img/harrypotter-1.jpg')
          },
          {
            titulo: 'Harry Potter e a Câmara Secreta',
            autor: 'J.K. Rowling',
            editora: 'Rocco',
            ano_lanc: '2000',
            preco: '23,10',
            capa: require('../assets/img/harrypotter-2.jpg')
          },
          {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'J.K. Rowling',
            editora: 'Rocco',
            ano_lanc: '2000',
            preco: '25,90',
            capa: require('../assets/img/harrypotter-3.jpg')
          },
          {
            titulo: 'Harry Potter e o Cálice de Fogo',
            autor: 'J.K. Rowling',
            editora: 'Rocco',
            ano_lanc: '2001',
            preco: '34,90',
            capa: require('../assets/img/harrypotter-4.jpg')
          },
          {
            titulo: 'Harry Potter e a Ordem da Fênix',
            autor: 'J.K. Rowling',
            editora: 'Rocco',
            ano_lanc: '2003',
            preco: '41,90',
            capa: require('../assets/img/harrypotter-5.jpg')
          },
          {
            titulo: 'Harry Potter e o Enigma do Príncipe',
            autor: 'J.K. Rowling',
            editora: 'Rocco',
            ano_lanc: '2005',
            preco: '32,90',
            capa: require('../assets/img/harrypotter-6.jpg')
          }
        ]
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
