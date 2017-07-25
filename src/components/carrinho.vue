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
        <tr>
          <td>Harry Potter e o Prisioneiro e Azkaban</td>
          <td>1</td>
          <td>R$ 25,90</td>
          <td><button class="remover"><icon name="times-rectangle" scale="1.5"></icon></button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td colspan="2">R$ 25,90</td>
        </tr>
      </tfoot>
    </table>
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
      thead {
        background: $mainColor;
        @include whiteColor();
        td {
          padding: 8px 0 8px 5px;
          font-weight: 900;
          font-size: 17px;
        }
      }
      tbody {
        tr:nth-child(even) {
          background-color: #eee;
        }
        td {
          color: #555;
          padding: 5px 0 5px 5px;
          .remover {
            color: #e00;
            background: transparent;
            border: none;
            display: block;
            margin: 0 auto;
            cursor: pointer;
            &:hover {
              color: #c00;
            }
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
  }
</style>
