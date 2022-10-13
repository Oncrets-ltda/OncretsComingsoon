import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'
import Heading from 'components/Heading'
import messages from '../../translate/messages'

function Footer() {
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
      <S.Contacts>
        <Heading reverseColor>
          {messages[locale].footerFirstSectionTitle}
        </Heading>

        <div style={{ display: 'flex' }}>
          <div>
            <S.EmailTitle>{messages[locale].email}</S.EmailTitle>
            <S.EmailContent>{messages[locale].emailContent}</S.EmailContent>
            <S.PhoneContent>BR: +55 41 98878-1787</S.PhoneContent>
            <S.PhoneContent>USA: +1 786 788 7785</S.PhoneContent>
          </div>

          <div style={{ marginLeft: '50px' }}>
            <S.EmailTitle>{messages[locale].socialMedia}</S.EmailTitle>
            <S.EmailContent>
              <a href="https://instagram.com/oncrets.pt?igshid=YmMyMTA2M2Y=">
                <S.Icon src="/img/instagram(1).png" />
              </a>
              <a href="https://www.linkedin.com/company/oncrets/">
                <S.Icon src="/img/linkedin.png" />
              </a>
              <a href="https://www.youtube.com/channel/UCNcqo0LM_xNbAOCP9aGJKIw">
                <S.Icon src="/img/youtube.png" />
              </a>
            </S.EmailContent>
          </div>
        </div>
      </S.Contacts>

      <S.Contacts>
        <Heading reverseColor>
          {messages[locale].footerSecondSectionTitle}
        </Heading>
        <div>
          <S.EmailTitle>SMART FILL</S.EmailTitle>
          <a href="https://play.google.com/store/apps/details?id=com.oncretsapp&hl=pt_BR&gl=US">
            <S.Image src="/img/PlayStoreButton.png" />
          </a>
          <a href="https://apps.apple.com/br/app/oncrets-pt-manager/id1580757868?l=en">
            <S.Image src="/img/AppStoreButton.png" />
          </a>
        </div>
      </S.Contacts>
    </S.Wrapper>
  )
}

export default Footer
