import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { Colors } from '@constants'
import ButtonAction from '@components/ButtonAction'
import { ContextCart, ICartContextState } from '@context/Cart/createContext'
import {
  findItemCart,
  findAndDeleteItemCart,
  calculatePriceCart,
} from '@helpers/functions'
import Spinner from '@components/Spinner'

//? styled
const Container = styled.div`
  padding: 2.5rem;
  width: 70%;
  margin: 5rem auto;

  border: dotted ${Colors.greenAvo};
  border-radius: 0.5rem;

  img {
    border: double ${Colors.yellowCorn};
    border-radius: 20rem;
  }

  @media (min-width: 452px) and (max-width: 574px) {
    img {
      width: 15rem;
    }
  }
`

export interface ProductMoreProps {
  product: TProduct
}

const ProductMore: React.SFC<ProductMoreProps> = ({ product }) => {
  const {
    price,
    name,
    image,
    id,
    sku,
    attributes: { description, taste, shape, hardiness },
  } = product

  //? Context
  const {
    setItems,
    items,
    setTotalamount,
    totalAmount,
    setLoading,
    loading,
    setTotalPay,
  } = useContext(ContextCart) as ICartContextState

  useEffect(() => {
    const totalPay = calculatePriceCart(items)
    setTotalPay(totalPay)
  }, [items])

  const handleClick = () => {
    const amount: number = findItemCart(id, items)
    let newItem: TProductCart = {
      name,
      amount,
      id,
      image,
      price,
      sku,
    }
    if (amount === 1) {
      setItems([...items, newItem])
    }
    let newItems: Array<TProductCart> = findAndDeleteItemCart(id, items)
    setItems([...newItems, newItem])
    setTotalamount(totalAmount + 1)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <Container>
      <div>
        <img src={image} />
        <h1>{name}</h1>
        <p>{sku}</p>
      </div>
      <div>
        <p className="decoration-txt">{taste}</p>
        <strong>Price:</strong> <p>{price}</p>
        <strong>Description:</strong> <p>{description}</p>
        <strong>Shape:</strong> <p>{shape}</p>
        <strong>Hardiness:</strong> <p>{hardiness}</p>
        <br />
        <ButtonAction title="Add to Cart" action={handleClick} />
      </div>
    </Container>
  )
}

export default ProductMore
