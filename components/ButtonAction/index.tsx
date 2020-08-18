import React, { Fragment } from 'react'
import { Button } from '@styled/Button.styled'

export interface ButtonActionProps {
  title: string
  action: Function
}

const ButtonAction: React.SFC<ButtonActionProps> = ({ title, action }) => (
  <Button onClick={action as any}>{title}</Button>
)

export default ButtonAction
