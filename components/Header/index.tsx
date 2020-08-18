import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Colors } from '@constants'

export interface HeaderProps {
  mode: THeaderMode
}

const Header: React.SFC<HeaderProps> = ({ mode }) => {
  const CustomFragment = styled.div`
    a {
      color: ${mode == 'Dark' ? Colors.brownDark : 'white'};
      text-decoration: none;
      font-weight: bolder;
      font-size: 1.2rem;
      :hover {
        color: ${mode == 'Dark' ? Colors.brownClear : Colors.greenAvo};
        text-decoration: none;
      }
    }

    img {
      width: 10%;
    }
  `

  return (
    <CustomFragment>
      <Link href="/">
        <a>AvoShop</a>
      </Link>
      <img src={'/images/kawaii-avocado.png'} />
    </CustomFragment>
  )
}

export default Header
