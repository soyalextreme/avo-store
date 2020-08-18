import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Colors } from '@constants'
import IconSocial from '@components/IconsSocial'
import Header from '@components/Header'
import { ContextCart, ICartContextState } from '@context/Cart/createContext'

const Container = styled.footer`
  padding: 2rem 1.4rem;
  background-color: ${Colors.greenAvo};
  border-top: dotted;
  border-color: ${Colors.brownDark};
  display: flex;
  justify-content: space-between;

  section {
    width: 40%;
    text-align: center;
  }

  .m-none {
    margin: 0;
  }

  .social-container {
    display: block;
    width: 50%;
    margin: auto;
  }
`

const Footer: React.SFC = () => {
  const { loading } = useContext(ContextCart) as ICartContextState

  if (loading) {
    return null
  }

  return (
    <Container>
      <section>
        <h3>About this page:</h3>
        <p>Made with NextJS and TS💚</p>
        <p>Part of a course!</p>
        <a href="https://platzi.com/@soyalextreme/">
          <p>@platziStudent</p>
        </a>
      </section>
      <section className="middle">
        <br />
        <Header mode="Dark" />
      </section>
      <section>
        <h3>About Me:</h3>
        <br />
        <div className="d-flex">
          <div className="social-container">
            <IconSocial />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Footer
