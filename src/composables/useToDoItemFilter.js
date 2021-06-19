import { ref, computed } from "vue"
import { useStore } from 'vuex'

export default function useToDoItemFilter() {
  const store = useStore()

  const filterValue = ref("");

  const filteredToDoItems = computed(() => {
    return store.getters.filteredToDoItems(filterValue.value)
  })

  return {
    filterValue,
    filteredToDoItems,
  }
}
