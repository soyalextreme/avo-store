import React from 'react'
import ProductMore from '@components/ProductMore'
import Spinner from '@components/Spinner'
import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'isomorphic-unfetch'
import { Proxy } from '@constants'

// Cuales son todas las paginas
// bult time - necesita saber antes cuantas paginas se generaran
//! Paginas Dinamicas necesitan getStaticPaths y get StaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${Proxy}/api/avo`)
  const { data: productlist } = await response.json()

  const paths = productlist.map((product: TProduct) => ({
    params: { id: product.id },
  }))

  return {
    // Todas Las rutas de las Paths
    paths,
    // herramienta Incremental Static Generation
    // cualquier pagina dinamica que no este en Paths Dara 404
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const res = await fetch(`${Proxy}/api/avo/${id}`)
  const product: TProduct = await res.json()

  return {
    props: { product },
  }
}

interface PropsProductPage {
  product: TProduct
}

const ProductPage: React.SFC<PropsProductPage> = ({ product }) => {
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
