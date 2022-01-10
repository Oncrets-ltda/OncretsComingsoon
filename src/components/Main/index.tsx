import * as S from './styles'
import React from 'react'

import Container from '../Container'
import Logo from '../Logo'

export type TestProps = {
  title: string
  title2: string
  description: string
  img: string
}

const Main = ({
  title = 'WORLDWIDE',
  title2 = 'POST-TENSIONG PLATFORM & APP',
  description = 'CONNECTION FOR PRESTRESSING EXPERTS',
  img = '/img/bg.svg'
}: TestProps) => (
  <S.Wrapper>
    <S.Background src={img}>
      <Container>
        <Logo />

        <S.Content>
          <S.TextBlock>
            <S.Title>
              {title}
              <br></br>
              {title2}
            </S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonWrapper></S.ButtonWrapper>
          </S.TextBlock>

          <S.Image
            src="/img/Phones.png"
            alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
          />
        </S.Content>
      </Container>
    </S.Background>
  </S.Wrapper>
)

export default Main
