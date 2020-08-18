import * as React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  padding: 2rem;
  margin-top: 3rem;
  border-bottom: groove #fff;
`

export interface ProductCartProps {
  product: TProductCart
}

const ProductCart: React.SFC<ProductCartProps> = ({ product }) => {
  const { image, name, sku, price, amount } = product

  return (
    <Container className="container">
      <div className="row">
        <div className="col-mg5">
          <img src={image} />
        </div>
        <div className="col-md-5">
          <h1>{name}</h1>
          <p>{sku}</p>
          <p>$ {price}</p>
          <strong>Cantidad</strong>
          <p>{amount}</p>
        </div>
      </div>
    </Container>
  )
}

export default ProductCart
