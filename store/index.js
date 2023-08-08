//imports Vue and Vuex, and then tells Vue to use Vuex as a plugin

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({ //defines a function named createStore that returns a new Vuex store instance
    state: {// The state object holds the application's centralized state. In this case, 
      //it includes properties for selectedGridLocation, selectedPlayer, and grid.
      selectedGridLocation: null,
      selectedPlayer: null,
      grid: null
    }, 
    mutations: { //Mutations are functions that directly modify the state. Each mutation receives the state as its first argument.
      setSelectedGridLocation (state, item) {
        state.selectedGridLocation = item
      },
      setSelectedPlayer (state, item) {
        state.selectedPlayer = item
      },
      clearAllOnExit (state) {
        state.selectedGridLocation = null
        state.selectedPlayer = null
      },
      setGrid (state, item) {
        state.grid = item
      }
    }
  })
}

export default createStore //The createStore function is exported as the default export. 
//This allows the store to be imported and used in other parts of the Vue application.

//this code sets up a Vuex store with state properties (selectedGridLocation, selectedPlayer, grid) 
//and mutation functions to modify these state properties.

