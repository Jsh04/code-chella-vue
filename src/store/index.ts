import IIngresso from '@/interfaces/IIngresso'
import { Store, createStore, useStore as vuexUseStore } from 'vuex'
import { CADASTRAR_INGRESSO, PEGAR_INGRESSO } from './tipo-mutacoes'
import { InjectionKey } from 'vue'
import { ADICIONAR_INGRESSO, OBTER_INGRESSO } from './tipo-actions'
import http from '@/http/HttpClient'

interface Estado{
  ingressos: IIngresso[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    ingressos: [],
  },
  getters: {
  },
  mutations: {
    [ADICIONAR_INGRESSO](state, ingresso: IIngresso ){
      state.ingressos.push(ingresso);
    }
  },
  actions: {
    [CADASTRAR_INGRESSO](contexto, ingresso: IIngresso){
      return http.post('/ingressos', {
        ...ingresso
      })

    }
  },
  modules: {
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
