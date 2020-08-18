import { createContext } from 'react'

export interface ICartContextState {
  items: TProductCart[] | []
  totalAmount: number
  loading: boolean
  totalPay: number
  setItems: Function
  setTotalamount: Function
  setLoading: Function
  setTotalPay: Function
}

export const ContextCart = createContext<ICartContextState | undefined>(
  undefined
)

export const CartContextProvider = ContextCart.Provider
