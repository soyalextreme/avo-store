import { Colors } from '@constants'
import styled from '@emotion/styled'

export const Button = styled.a`
  padding: 1rem 2rem;
  background-color: ${Colors.yellowCorn};
  color: ${Colors.brownDark};
  border-radius: 2rem;
  text-decoration: none;
  font-weight: bolder;

  :hover {
    text-decoration: none;
    color: ${Colors.greenAvo};
    background-color: ${Colors.brownClear};
    cursor: pointer;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`
