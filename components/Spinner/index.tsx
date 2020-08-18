import React from 'react'
import style from './style.module.css'

export interface SpinnerProps {}

const Spinner: React.SFC<SpinnerProps> = () => {
  return (
    <div className={style.spinner}>
      <div className={style.doubleBounce1}></div>
      <div className={style.doubleBounce2}></div>
    </div>
  )
}

export default Spinner
