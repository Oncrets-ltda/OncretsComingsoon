import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import messages from '../../translate/messages'

function SectionAboutSmartJack() {
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
      <Container>
        <S.Container>
          <div>
            <Heading reverseColor={true}>
              {messages[locale].smartJackTitle}
            </Heading>
            <S.Text>
              <p>{messages[locale].smartJackFirstSection}</p>

              <p>{messages[locale].smartJackSecondSection}</p>

              <p>{messages[locale].smartJackThirdSection}</p>
            </S.Text>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=zgtAWnS1pEQ"
              width="100%"
            />
          </div>
          <S.Image src="/img/printsIphone.png" />
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutSmartJack
