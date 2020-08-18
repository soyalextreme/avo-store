import React, { useState, useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Colors } from '@constants'
import Header from '@components/Header'
import { ContextCart, ICartContextState } from '@context/Cart/createContext'

//? Styled
const Nav = styled.div`
  background-color: ${Colors.brownDark};
  padding: 0.5rem 0;
  color: white;

  menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
  }

  .menu-item {
    width: 30%;
  }

  i {
    color: white;
  }

  span {
    background-color: ${Colors.yellowCorn};
    padding: 0.5em;
    border-radius: 1rem;
    margin: 0.4rem;
    color: ${Colors.brownClear};
    font-weight: bold;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bolder;
    font-size: 1.2rem;
    :hover {
      color: ${Colors.greenAvo};
      text-decoration: none;
    }
  }

  img {
    width: 10%;
  }
`

export default function Navbar() {
  const { totalAmount } = useContext(ContextCart) as ICartContextState

  return (
    <Nav>
      <menu>
        <div className="menu-item sec">
          <Link href="/yes-no">
            <a>Ask a Question..</a>
          </Link>
        </div>
        <div className="menu-item">
          <Header mode={'Clear'} />
        </div>
        <div className="menu-item sec">
          <i className="fas fa-shopping-basket"></i>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
          <span>{totalAmount}</span>
        </div>
      </menu>
    </Nav>
  )
}
