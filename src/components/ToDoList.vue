<template>
  <input v-model="inputValue" />
  <button @click="handleClick">ToDoを追加</button>
  <p>
    <input v-model="filterValue" placeholder="フィルタテキスト" />
  </p>
  <ul>
    <li
      v-for="todo in filteredToDoItems"
      :key="todo.id"
      class="todo-item"
      :class="{ done: todo.done }"
      @click="todo.done = !todo.done"
    >
      <span v-if="todo.done">✓</span> {{ todo.text }}
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import useToDoItemFilter from "../composables/useToDoItemFilter";
import useToDoAdditioner from "../composables/useToDoAdditioner";

export default {
  setup() {
    const store = useStore();

    const { inputValue, handleClick } = useToDoAdditioner();
    const { filterValue, filteredToDoItems } = useToDoItemFilter();

    return {
      filterValue,
      filteredToDoItems,

      inputValue,
      handleClick,
    };
  },
  // data() {
  //   return {
  //     inputValue: "",
  //     filterValue: "",
  //   };
  // },
  // computed: {
  //   filteredToDoItems() {
  //     return this.$store.getters.filteredToDoItems(this.filterValue);
  //   },
  // },
  // methods: {
  //   handleClick() {
  //     this.$store.dispatch(ADD_TODO, {
  //       text: this.inputValue,
  //     });
  //     this.inputValue = "";
  //   },
  // },
};
</script>

<style scoped>
.todo-item.done {
  background-color: #3fb983;
  color: #ffffff;
}
</style>
