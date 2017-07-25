<template>
  <div id="app">
    <topo></topo>
    <corpo>
    </corpo>

      <listaProdutos></listaProdutos>
  </div>
</template>

<script>
import topo from './components/topo.vue'
import corpo from './components/corpo.vue'
import listaProdutos from './components/listaProdutos.vue'

export default {
  name: 'app',
  components: {topo, corpo, listaProdutos}
}
</script>

<style lang="scss">
$titillium: "Titillium Web", sans-serif;
$lato: "Lato", sans-serif;
body {
  height:100vh;
  width:100vw;
  margin:0;
}

h1 {
  font-family: $titillium;
}

p {
  font-family:$lato;
}
</style>
