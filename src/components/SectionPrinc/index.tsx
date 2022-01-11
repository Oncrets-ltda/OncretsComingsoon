import * as S from './styles'
import React from 'react'

import Container from '../Container'
import Logo from '../Logo'

const SectionPrinc = () => (
  <S.Wrapper>
    <S.Background src="/img/bg.svg">
      <Container>
        <Logo />

        <S.Content>
          <S.TextBlock>
            <S.Title>
              WORLDWIDE
              <br></br>
              POST-TENSIONG PLATFORM & APP
            </S.Title>
            <S.Description>CONNECTION FOR PRESTRESSING EXPERTS</S.Description>
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

export default SectionPrinc
