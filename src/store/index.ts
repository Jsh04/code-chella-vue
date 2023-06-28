import IIngresso from '@/interfaces/IIngresso'
import { Store, createStore, useStore as vuexUseStore } from 'vuex'
import { CADASTRAR_INGRESSO, PEGAR_INGRESSO } from './tipo-mutacoes'
import { InjectionKey } from 'vue'
import { ADICIONAR_INGRESSO, OBTER_INGRESSO } from './tipo-actions'
import http from '@/http/HttpClient'
import ITiposDeIngresso from '@/interfaces/ITiposDeIngresso'

interface Estado{
  ingresso: IIngresso | null,
  tipos: ITiposDeIngresso[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    ingresso: null as IIngresso | null,
    tipos: [
      { 
        id:1,
        descricao:'Pista Premium'
      }, 
      {
        id:2,
        descricao:'Cadeiras térreo'
      }, 
      {
        id:3,
        descricao:'Cadeiras superiores'
      }, 
      {
        id:4,
        descricao:'Rampas'
      }
    ]
  },
  getters: {
    ingreso(state){
      
      return state.ingresso
    }
  },
  mutations: {
    [PEGAR_INGRESSO](state, ingresso: IIngresso ){
      state.ingresso = ingresso
      console.log(state.ingresso)
    }
  },
  actions: {
    [CADASTRAR_INGRESSO](contexto, ingresso: IIngresso){
      return http.post('/ingressos', {
        ...ingresso
      })
    },
    async [OBTER_INGRESSO]({ commit }, id: number){
      const response = await http.get(`/ingressos/${id}`)
      console.log(response.data)
      return commit(PEGAR_INGRESSO, response.data)
    } 
  },
  modules: {
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
