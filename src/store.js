import { createStore } from 'vuex'
import { ADD_TODO } from './actionTypes'

export default createStore({
  state: {
    todoItems: [],
  },
  getters: {
    filteredToDoItems: (state) => (filterValue) => {
      if (!filterValue) {
        return state.todoItems;
      }
      return state.todoItems.filter((todo) => {
        return todo.text.includes(filterValue);
      });
    },
  },
  mutations: {
    [ADD_TODO](state, text) {
      state.todoItems.push({
        id: state.todoItems.length + 1,
        done: false,
        text: text,
      })
    }
  },
  actions: {
    [ADD_TODO](context, args) {
      context.commit(ADD_TODO, args.text)
    },
  },
})
