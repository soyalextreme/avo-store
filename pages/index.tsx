import React from 'react'
import CardProducts from '@components/CardProducts'
import Spinner from '@components/Spinner'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = async () => {
  const response = await fetch('https://avo-store.vercel.app/api/avo')
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
