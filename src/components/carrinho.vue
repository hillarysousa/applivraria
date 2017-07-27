<template>
  <div class="carrinho">
  <h2><icon name="shopping-cart" scale="1.5"></icon>Carrinho</h2>
    <table class="lista-carrinho">
      <thead>
        <tr>
          <td>Livro</td>
          <td>Quantidade</td>
          <td>Subtotal</td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itens">
          <td>{{ item.titulo }}</td>
          <td>{{ item.count }}<a class="small-btn" @click="incrProduto(item)"><icon name="plus-square"></icon></a><a class="small-btn" @click="decrProduto(item)"><icon name="minus-square"></icon></a></td>
          <td>R$ {{ formatoValor(item.count * item.preco) }}</td>
          <td><a class="remover" @click="delProduto(item)"><icon name="times-rectangle" scale="1.5"></icon></a></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td colspan="2">R$ {{ formatoValor(valorTotal) }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="painel-carrinho" v-for="item in itens">
      <div class="header-painel">
        <h2>Livro: {{ item.titulo }}</h2>
      </div>
      <div class="corpo-painel">
        <div class="qtd">
          <p>Quantidade: {{ item.count }}</p>
        </div>
        <div class="botoes">
          <a class="small-btn" @click="incrProduto(item)"><icon name="plus-square" scale="2.5"></icon></a>
          <a class="small-btn" @click="decrProduto(item)"><icon name="minus-square" scale="2.5"></icon></a>
        </div>
      </div>
      <div class="footer-painel">
        <div class="valor">
          <p>Valor: R$ {{ formatoValor(item.count * item.preco) }}</p>
        </div>
        <div class="exclusao">
          <a class="remover" @click="delProduto(item)"><icon name="times" scale="1.5"></icon> Excluir</a>
        </div>
      </div>
    </div>
    <div class="totalValor">
      <h3>Valor total: R$ {{ formatoValor(valorTotal) }}</h3>
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
      itens () {
        return this.$store.getters.itensCarrinho
      },
      valorTotal () {
        return this.itens.reduce((total, item) => {
          return total + item.preco * item.count
        }, 0)
      }
    },
    methods: {
      incrProduto (livro) {
        this.$store.dispatch('incrProduto', livro)
      },
      decrProduto (livro) {
        this.$store.dispatch('decrProduto', livro)
      },
      delProduto (livro) {
        this.$store.dispatch('delProduto', livro)
      },
      formatoValor (valor) {
        let val = (valor / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    }
  }
</script>

<style lang="scss">
  .carrinho {
    h2 {
      text-align: center;
      font-size: 30px;
      margin: 10px 0;
      color: #333;
      .fa-icon {
        color: #555;
        margin-right: 10px;
      }
    }
    .lista-carrinho {
      width: 100%;
      font-family: $lato;
      @media #{$mq-md} {
        display: none;
      }
      thead {
        background: $mainColor;
        @include whiteColor();
        td {
          padding: 8px 0 8px 5px;
          font-weight: 900;
          font-size: 17px;
          &:first-child { max-width: 80%; }
          &:last-child { width: 5%; }
        }
      }
      tbody {
        tr:nth-child(even) { background-color: #eee; }
        td {
          color: #555;
          padding: 5px 0 5px 5px;
          .small-btn {
            color: #666;
            margin-left: 5px;
            vertical-align: middle;
            cursor: pointer;
            &:hover { color: #333; }
          }
          .remover {
            color: #e00;
            text-align: center;
            background: transparent;
            border: none;
            display: block;
            margin: 0 auto;
            cursor: pointer;
            &:hover { color: #c00; }
          }
        }
      }
      tfoot {
        tr {
          background: #444;
          td {
            padding: 5px 0px 5px 5px;
            @include whiteColor();
            font-weight: 900;
            font-size: 17px;
          }
        }
      }
    }
    .painel-carrinho {
      width: 96%;
      margin: 20px 2% 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      clear: both;
      display: none;
      @media #{$mq-md} {
        display: inline-block;
      }
      .header-painel {
        background: #666;
        h2 {
          color: #FFF;
          margin: 0;
          font-size: 20px;
        }
      }
      .corpo-painel {
        margin-top: 20px;
        clear: both;
        .qtd {
          float: left;
          width: 45%;
          padding-left: 20px;
          display: inline-block;
          p {
            margin: 0;
            font-size: 17px;
          }
        }
        .botoes {
          float: right;
          width: 45%;
          text-align: right;
          padding-right: 20px;
          display: inline-block;
          cursor: pointer;
          .fa-icon {
            margin-left: 25px;
            color: #555;
          }
        }
      }
      .footer-painel {
        width: 100%;
        clear: both;
        display: inline-block;
        margin-top: 20px;
        .valor {
          width: 45%;
          float: left;
          padding-left: 20px;
          display: inline-block;
          p {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
          }
        }
        .exclusao {
          width: 45%;
          float: right;
          padding-right: 20px;
          display: inline-block;
          text-align: right;
          .remover {
            background: #e00;
            cursor: pointer;
            display: inline-block;
            padding: 5px 7px;
            color: #FFF;
            font-family: 'Lato', sans-serif;
            border-radius: 4px;
            font-size: 17px;
            .fa-icon {
              vertical-align: bottom;
              margin-right: 4px;
            }
          }
        }
      }
    }
    .totalValor {
      display: none;
      width: 100%;
      background: #333;
      @media #{$mq-md} {
        display: block;
      }
      h3 {
        color: #fff;
        padding: 5px 11px;
        font-size: 22px;
      }
    }
  }
</style>
