import { CartContextProvider } from './createContext'
import { useState } from 'react'

export const CartProvider: React.SFC = ({ children }) => {
  const [items, setItems] = useState<TProduct[] | any>([])
  const [totalAmount, setTotalamount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [totalPay, setTotalPay] = useState(0)
  return (
    <CartContextProvider
      value={{
        items,
        setItems,
        totalAmount,
        setTotalamount,
        loading,
        setLoading,
        totalPay,
        setTotalPay,
      }}
    >
      {children}
    </CartContextProvider>
  )
}
