import { Product } from '../interfaces/Product'
import api from '../api'

export const fetchProducts = async (): Promise<Product[]> =>
  await api.get('/grocery')
