import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProductMore from '@components/ProductMore'
import Spinner from '@components/Spinner'

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  // router
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  if (!product) {
    return <Spinner />
  }

  return (
    <section>
      <ProductMore product={product as TProduct} />
    </section>
  )
}

export default ProductPage
