import * as S from './styles'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Container from '../Container'
import Header from '../Header'
import Button from '../Button'
import messages from '../../translate/messages'

function SectionPrinc() {
  const router = useRouter()
  const [locale, setLocale] = useState('pt')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localeRouter = router.locale
      setLocale(localeRouter)
    }
  }, [router.locale])

  return (
    <S.Wrapper>
      <S.Background src="/img/bgNewOncrets.png">
        <Header />
        <Container>
          <S.Content>
            <S.TextBlock>
              <S.Title>
                <p>{messages[locale].titleFirtsLine}</p>

                <p>{messages[locale].titleSecondLine}</p>
              </S.Title>
              <S.Description>CONNECTION FOR PRESTRESSING EXPERTS</S.Description>
              <S.ButtonsWrapper>
                <Button
                  model="secondary"
                  width="200px"
                  height="50px"
                  onClick={() =>
                    router.push(
                      'https://ptmanager.oncrets.com/registration/client'
                    )
                  }
                >
                  {messages[locale].trialButton}
                </Button>
                <Button
                  model="primary"
                  width="150px"
                  height="50px"
                  onClick={() => router.push('https://ptmanager.oncrets.com')}
                >
                  {messages[locale].login}
                </Button>
              </S.ButtonsWrapper>
            </S.TextBlock>

            <S.Image src="/img/Phones.png" />
          </S.Content>
        </Container>
      </S.Background>
    </S.Wrapper>
  )
}

export default SectionPrinc
