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

  @media (min-width: 300px) and (max-width: 452px) {
    img {
      width: 10rem;
    }
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
      <ButtonRef
        title="More Info"
        as={`/product/${product.id}`}
        href="/product/[id]"
      />
    </Container>
  )
}

export default CardProducts
