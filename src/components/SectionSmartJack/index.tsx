import React from 'react'
import ReactPlayer from 'react-player'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <div>
          <Heading reverseColor={true}>SMART JACK</Heading>
          <S.Text>
            <p>
              Smart jack is a device composed by a data logger, pressure and
              distance sensor. It is an unique and patented algorithm, which
              brings in real time the elongation data.
            </p>

            <p>
              It calculates elongation values for bonded and unbonded system
              comparing pressure and distance accurately.
            </p>

            <p>
              It&apos;s an accessory to be attached to your post-tensioning
              equipment with a Bluetooth connection in oncrets PT-Manager app.
            </p>
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

export default SectionAboutProject
