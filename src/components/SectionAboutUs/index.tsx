import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCardPrinc from 'components/ProfileCardPrinc'

import * as S from './styles'
import messages from '../../translate/messages'

function SectionAboutUs() {
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
      <S.Background>
        <Container>
          <Heading>{messages[locale].aboutUsTitle}</Heading>
          <ProfileCardPrinc />
        </Container>
      </S.Background>
    </S.Wrapper>
  )
}

export default SectionAboutUs
