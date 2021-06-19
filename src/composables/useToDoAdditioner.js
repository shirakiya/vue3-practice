import { ref } from "vue";
import { useStore } from "vuex";
import { ADD_TODO } from "../actionTypes";

export default function useToDoAdditioner() {
  const store = useStore()

  const inputValue = ref('')

  const handleClick = () => {
    store.dispatch(ADD_TODO, {
      text: inputValue.value,
    });
    inputValue.value = "";
  };

  return {
    inputValue,
    handleClick,
  }
}
