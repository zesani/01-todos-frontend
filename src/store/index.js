import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    CHANGE_TODO_COMPUTED (state, { index, value }) {
      state.todos[index].completed = value
    },
    INIT_TODOS (state, todos) {
      state.todos = todos
    },
    SORT_TO (state, { newIndex, oldIndex }) {
      console.log({ newIndex, oldIndex })
      // const oldTodo = state.todos.slice(oldIndex, oldIndex + 1)
      // console.log('old', oldTodo)
      // oldTodo[0].title = 'adasndklasdfklajsldk'
      // state.todos.splice(newIndex, 0, oldTodo[0])
      // state.todos.splice(oldIndex, 1)
      // console.log('2', state.todos)
      console.log('1', state.todos)
      state.todos.splice(newIndex, 0, state.todos.splice(oldIndex, 1)[0])
      console.log('2', state.todos)

      // state.todos.splice(newIndex, 0, { title: 'aaaaaa', completed: true })
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    initTodos ({commit}, todos) {
      commit('INIT_TODOS', todos)
    },
    changeTodoComputed ({commit}, { index, value }) {
      console.log(index, value)

      commit('CHANGE_TODO_COMPUTED', { index, value })
    },
    sortTo ({commit}, { newIndex, oldIndex }) {
      commit('SORT_TO', { newIndex, oldIndex })
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
