import React from 'react'

import { GrLinkedin } from 'react-icons/gr'
import { IoLogoWhatsapp } from 'react-icons/io'

import * as S from './styles'

const icons = {
  linkedin: <GrLinkedin />,
  whatsapp: <IoLogoWhatsapp />
}

type socialLinks = {
  slug: string
  link: string
}

type Props = {
  name: string
  role: string
  image: string
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={image} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.link}>
          <a href={item.link} title={item.slug}>
            {icons[item.slug]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
