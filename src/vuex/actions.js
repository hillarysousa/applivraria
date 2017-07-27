export const addProduto = ({ commit }, livro) => {
  commit('ADD_PRODUTO', livro)
}

export const delProduto = ({ commit }, livro) => {
  commit('DEL_PRODUTO', livro)
}

export const incrProduto = ({ commit }, livro) => {
  commit('INCR_PRODUTO', livro)
}

export const decrProduto = ({ commit }, livro) => {
  commit('DECR_PRODUTO', livro)
}
