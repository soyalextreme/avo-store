import * as React from 'react'
import styled from '@emotion/styled'
import { Colors } from '@constants'
import ButtonRef from '@components/ButtonRef'

const Container = styled.div`
  padding: 5rem;
  margin-top: 2rem;
  border: dotted ${Colors.greenAvo};
  border-radius: 0.8rem;

  :last-of-type {
    margin-bottom: 2rem;
  }
`

export interface CardProductsProps {
  product: TProduct
}

const CardProducts: React.SFC<CardProductsProps> = ({ product }) => {
  return (
    <Container>
      <img src={product.image} />
      <h1 className="title">{product.name}</h1>
      <p>${product.price}</p>
      <br />
      <ButtonRef title="More Info" href={`/product/${product.id}`} />
    </Container>
  )
}

export default CardProducts
