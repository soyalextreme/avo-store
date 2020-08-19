import React from 'react'
import Link from 'next/link'
import { Button } from '@styled/Button.styled'

export interface ButtonRefProps {
  href: string
  title: string
  as?: string
}

const ButtonRef: React.SFC<ButtonRefProps> = ({ href, title, as }) => (
  <Link href={href} as={as}>
    <Button>{title}</Button>
  </Link>
)

export default ButtonRef
