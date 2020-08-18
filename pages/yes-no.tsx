import * as React from 'react'
import ButtonRef from '@components/ButtonRef'
import fetch from 'isomorphic-unfetch'
import styled from '@emotion/styled'
import { Colors } from '@constants'

const getServerSideProps = async () => {
  const res = await fetch('https://avo-store.vercel.app/api/yes-no')
  const { yesNo: answer } = await res.json()
  return {
    props: {
      answer,
    },
  }
}

export interface QuestionYesNoProps {
  answer: boolean
}

const Container = styled.div`
  padding: 25% 3rem;

  .title {
    color: ${Colors.greenAvo};
    font-weight: bolder;
    font-size: 5rem;
    margin: 4rem 0;
  }
`

const QuestionYesNo: React.SFC<QuestionYesNoProps> = (answer) => {
  console.log(answer)
  return (
    <Container>
      <h4>To your question the answer is....</h4>
      <h1 className="decoration-txt title">{answer ? 'YES' : 'NO'}</h1>
      <ButtonRef title="Another Try" href="/yes-no" />
      <ButtonRef title="Go Home" href="/" />
    </Container>
  )
}

export default QuestionYesNo
