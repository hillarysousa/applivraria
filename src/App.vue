<template>
  <div id="app">
    <topo></topo>
    <corpo>
      <router-view></router-view>
    </corpo>
  </div>
</template>

<script>
import topo from './components/topo.vue'
import corpo from './components/corpo.vue'
import listaProdutos from './components/listaProdutos.vue'
import carrinho from './components/carrinho.vue'

export default {
  name: 'app',
  components: {topo, corpo, listaProdutos, carrinho}
}
</script>

<style lang="scss">
body {
  height:100vh;
  width:100vw;
  margin:0;
}

h1, h2, h3 {
  font-family: $titillium;
}

p {
  font-family:$lato;
}
</style>
