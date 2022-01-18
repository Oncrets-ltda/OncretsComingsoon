import React from 'react'
import ReactPlayer from 'react-player'

import * as S from './styles'

const ProfileCard = () => (
  <S.Card>
    <S.Container>
      <div>
        <S.Header>
          <S.Image src="/img/AvatarKang.png" />
          <S.Infos>
            <S.Name>Dr. Thomas Kang</S.Name>
            <S.Role>Creator</S.Role>
            {/* <S.SocialLinks> 
                <S.Link>
                  <a href='/'>
                    {icons.linkedin}
                  </a>
                </S.Link>
              </S.SocialLinks> */}
          </S.Infos>
        </S.Header>
        <S.Description>
          Dr. Thomas Kang is an inventor of Smart Jack of Oncrets and an owner
          of the patent. He is a Professor at Seoul National University, having
          previously served as an Assistant Professor at the University of
          Oklahoma and Adjunct Professor at the University of Illinois at
          Urbana-Champaign. He received his PhD from the University of
          California at Los Angeles (UCLA), and his BS from Seoul National
          University. Dr. Kang is also a PTI Fellow and an ACI Fellow, as well
          as a member of the EU Academy of Sciences and the National Academy of
          Engineering of Korea.
        </S.Description>
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=wYQOIRZ-dFM"
        width="100%"
        height="100%"
      />
    </S.Container>
  </S.Card>
)

export default ProfileCard
