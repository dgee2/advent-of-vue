import { ref } from 'vue'
import { Product } from '@/services/products'

const availableItems = ref([] as Product[])
const isFetchingItems = ref(true)
const itemsToCompare = ref([])

export const useItemComparison = () => ({
  availableItems,
  isFetchingItems,
  itemsToCompare,
})
