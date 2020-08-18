import React, { useContext, Fragment } from 'react'
import { ContextCart, ICartContextState } from '@context/Cart/createContext'
import styled from '@emotion/styled'
import ProductCart from '@components/ProductCart'
import { Colors } from '@constants'
import { Button } from '@styled/Button.styled'

const Container = styled.div`
  padding: 2rem;
  margin: 5rem 0;
  .title {
    border-bottom: dotted ${Colors.yellowCorn};
    padding-bottom: 1rem;
  }
  strong {
    margin-bottom: 2rem;
  }
  .jc-sa {
    justify-content: space-around;
    margin-top: 2rem;
  }

  @media (min-width: 300px) and (max-width: 550px) {
    img {
      width: 50%;
    }
  }
`
export interface CartProps {}

const Cart: React.SFC<CartProps> = () => {
  let { items, totalPay } = useContext(ContextCart) as ICartContextState
  let cartItems = items as Array<TProductCart>
  return (
    <Container>
      {items.length === 0 ? (
        <Fragment>
          <h1>Sorry! Add some products to your cart</h1>
          <img src="/images/avocado.png" alt="avocado" />
        </Fragment>
      ) : (
        <Fragment>
          <h1 className="title">My Products on Cart</h1>
          {/* //! Guaranteed it will render with an array */}
          {cartItems.map((item: TProductCart) => (
            <ProductCart key={item.id} product={item} />
          ))}
          <div className="d-flex jc-sa">
            <h4>Total a pagar</h4>
            <strong>${totalPay}</strong>
            <Button>Pagar</Button>
          </div>
        </Fragment>
      )}
    </Container>
  )
}

export default Cart
