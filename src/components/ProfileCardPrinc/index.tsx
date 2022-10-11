import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

import * as S from './styles'
import messages from '../../translate/messages'

function ProfileCard() {
  const router = useRouter()
  const [locale, setLocale] = useState('pt')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localeRouter = router.locale
      setLocale(localeRouter)
    }
  }, [router.locale])

  return (
    <S.Card>
      <S.Container>
        <div>
          <S.Header>
            <S.Image src="/img/AvatarKang.png" />
            <S.Infos>
              <S.Name>Dr. Thomas Kang</S.Name>
              <S.Role>{messages[locale].drKangTitle}</S.Role>
              {/* <S.SocialLinks> 
                  <S.Link>
                    <a href='/'>
                      {icons.linkedin}
                    </a>
                  </S.Link>
                </S.SocialLinks> */}
            </S.Infos>
          </S.Header>
          <S.Description>{messages[locale].drKangText}</S.Description>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wYQOIRZ-dFM"
          width="100%"
          height="100%"
        />
      </S.Container>
    </S.Card>
  )
}

export default ProfileCard
