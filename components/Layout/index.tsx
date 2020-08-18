import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import styles from './layout.module.css'
import Footer from '@components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
