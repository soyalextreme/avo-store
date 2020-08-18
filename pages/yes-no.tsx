import React, { useState, useEffect } from 'react'
import ButtonRef from '@components/ButtonRef'
import fetch from 'isomorphic-unfetch'
import styled from '@emotion/styled'
import { Colors, Proxy } from '@constants'
import { Button } from '@styled/Button.styled'
import Link from 'next/link'

const useContainer = (loading: boolean) => {
  return styled.div`
    padding: 12rem 3rem;
    .title {
      color: ${loading ? Colors.brownDark : Colors.greenAvo};
      font-weight: bolder;
      font-size: 5rem;
      margin: 4rem 0;
    }
  `
}

export const getServerSideProps = async () => {
  const res = await fetch(`${Proxy}/api/yes-no`)
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

const QuestionYesNo: React.SFC<QuestionYesNoProps> = ({ answer }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const Container = useContainer(loading)

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 500)
    }
  }, [loading])

  return (
    <Container>
      <h4>To your question the answer is....</h4>
      <h1 className="decoration-txt title">{answer ? 'YES' : 'NO'}</h1>
      <Link href={'/yes-no'}>
        <Button onClick={() => setLoading(true)}>Another Try</Button>
      </Link>
      <ButtonRef title="Go Home" href="/" />
    </Container>
  )
}

export default QuestionYesNo
