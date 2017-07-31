import Vue from 'vue'
import topo from '@/components/topo'

describe('topo.vue', () => {
  it('deve trazert o titulo do app', (done) => {
    const Constructor = Vue.extend(topo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header h1').textContent)
      .to.equal('Livraria Flip')
      done();
  })
})
