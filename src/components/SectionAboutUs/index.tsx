import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'
import ProfileCardPrinc from 'components/ProfileCardPrinc'

import content from './content'
import * as S from './styles'

const SectionAboutUs = () => (
  <S.Wrapper>
    <S.Background>
      <Container>
        <Heading reverseColor>WHO WE ARE</Heading>
        <ProfileCardPrinc />
        <S.Content>
          {content.map((profile) => (
            <ProfileCard
              key={profile.name}
              name={profile.name}
              role={profile.role}
              image={profile.image}
              socialLinks={profile.socialLinks}
              description={profile.description}
            />
          ))}
        </S.Content>
      </Container>
    </S.Background>
  </S.Wrapper>
)

export default SectionAboutUs
