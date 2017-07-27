import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  carrinho: [],
  livros: [
    {
      id: 1,
      titulo: 'Harry Potter e a Pedra Filosofal',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      ano_lanc: '2000',
      preco: 23.10,
      capa: require('../assets/img/harrypotter-1.jpg'),
      count: 1
    },
    {
      id: 2,
      titulo: 'Harry Potter e a Câmara Secreta',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      ano_lanc: '2000',
      preco: 23.10,
      capa: require('../assets/img/harrypotter-2.jpg'),
      count: 1
    },
    {
      id: 3,
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      ano_lanc: '2000',
      preco: 25.90,
      capa: require('../assets/img/harrypotter-3.jpg'),
      count: 1
    },
    {
      id: 4,
      titulo: 'Harry Potter e o Cálice de Fogo',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      ano_lanc: '2001',
      preco: 34.90,
      capa: require('../assets/img/harrypotter-4.jpg'),
      count: 1
    },
    {
      id: 5,
      titulo: 'Harry Potter e a Ordem da Fênix',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      ano_lanc: '2003',
      preco: 41.90,
      capa: require('../assets/img/harrypotter-5.jpg'),
      count: 1
    },
    {
      id: 6,
      titulo: 'Harry Potter e o Enigma do Príncipe',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      ano_lanc: '2005',
      preco: 32.90,
      capa: require('../assets/img/harrypotter-6.jpg'),
      count: 1
    }
  ]
}

const mutations = {
  ADD_PRODUTO (state, livro) {
    const livroId = livro.id
    const livroExiste = state.carrinho.filter(x => x.id === livroId).map(x => x.id)
    if (livroExiste.length === 0) {
      state.carrinho.push(livro)
    } else {
      livro.count++
    }
  },
  DEL_PRODUTO (state, livro) {
    state.carrinho.splice(livro, 1)
  },
  INCR_PRODUTO (state, livro) {
    livro.count++
  },
  DECR_PRODUTO (state, livro) {
    if (livro.count === 1) {
      state.carrinho.splice(livro, 1)
    } else {
      livro.count--
    }
  }
}

const getters = {
  listaLivros: state => state.livros,
  itensCarrinho: state => state.carrinho
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
