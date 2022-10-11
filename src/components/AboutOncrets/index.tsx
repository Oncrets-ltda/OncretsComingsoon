import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Heading from 'components/Heading'
import Container from 'components/Container'
import messages from '../../translate/messages'

import * as S from './styles'

function SectionAboutProject() {
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
          <S.Image src="/img/prints2.png" />
          <div>
            <Heading>{messages[locale].whatIsOncrets}</Heading>
            <S.Text>
              <p>{messages[locale].aboutOncretsFirstSection}</p>
              <p>{messages[locale].aboutOncretsSecondSection}</p>
              <p>{messages[locale].aboutOncretsThirdSection}</p>
              <p>{messages[locale].aboutOncretsFourthSection}</p>
            </S.Text>
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutProject
