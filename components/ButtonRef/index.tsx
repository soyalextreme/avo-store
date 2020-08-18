import React from 'react'
import Link from 'next/link'
import { Button } from '@styled/Button.styled'

export interface ButtonRefProps {
  href: string
  title: string
}

const ButtonRef: React.SFC<ButtonRefProps> = ({ href, title }) => (
  <Link href={href}>
    <Button>{title}</Button>
  </Link>
)

export default ButtonRef
