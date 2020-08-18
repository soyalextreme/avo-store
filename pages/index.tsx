import React, { useState, useEffect } from 'react'
import CardProducts from '@components/CardProducts'
import Spinner from '@components/Spinner'

const HomePage = () => {
  const [productlist, setProductlist] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => setProductlist(data))

    localStorage.setItem('amount', '0')

    console.log(productlist)
  }, [])

  if (productlist.length == 0) {
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
