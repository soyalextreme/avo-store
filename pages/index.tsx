import React from 'react'
import CardProducts from '@components/CardProducts'
import Spinner from '@components/Spinner'
import fetch from 'isomorphic-unfetch'
import { Proxy } from '@constants'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${Proxy}/api/avo`)
  const { data: productlist } = await response.json()
  return {
    props: {
      productlist,
    },
  }
}

export interface HomePageProps {
  productlist: TProduct[]
}

const HomePage: React.SFC<HomePageProps> = ({ productlist }) => {
  if (productlist.length === 0) {
    return <Spinner />
  }

  return (
    <div className="container">
      <div className="row">
        {productlist.map((product) => (
          <div key={product.id} className="col-md-12 col-sm-12 col-lg-6">
            <CardProducts product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
