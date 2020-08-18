import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Colors } from '@constants'

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 30%;
  justify-content: space-between;

  i {
    color: ${Colors.brownDark};
  }
`
export interface IconSocialProps {}

const IconSocial: React.SFC<IconSocialProps> = () => {
  return (
    <Fragment>
      <Container>
        <a className="hover" href="https://github.com/soyalextreme">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a className="hover" href="https://www.instagram.com/soyalextreme/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </Container>
    </Fragment>
  )
}

export default IconSocial
