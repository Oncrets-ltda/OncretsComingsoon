import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import usaIcon from '../../../public/img/united-states-of-america.png'
import braIcon from '../../../public/img/brazil.png'

import Button from '../Button'
import messages from '../../translate/messages'

function Header() {
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
      <S.Content>
        <S.Logo src="/img/logoOncretsAzulePreto.png" />
        <S.Buttons>
          {locale === 'pt' ? (
            <Link href={'https://oncrets.com/en'}>
              <a>
                <Image src={usaIcon} width="35px" height="35px" />
              </a>
            </Link>
          ) : (
            <Link href={'https://oncrets.com'}>
              <a>
                <Image src={braIcon} width="35px" height="35px" />
              </a>
            </Link>
          )}
          <Button
            width="135px"
            model="outlined"
            onClick={() => router.push('https://ptmanager.oncrets.com')}
          >
            {messages[locale].login}
          </Button>
        </S.Buttons>
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
