import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image src="/img/prints2.png" />
        <div>
          <Heading>WHAT IS ONCRETS?</Heading>
          <S.Text>
            <p>
              Born of the highest management technology of prestressed
              structure, Oncrets came with data transparency and results in
              civil construction as its goals.
            </p>
            <p>
              Our team is composed of engineers and developers specialized in
              post-tensioning. Our premise is to establish a worldwide
              connection between all professionals at the field.
            </p>
            <p>
              You can register your prestressing cables, control the elongation
              values collected in real time and organize your constructions,
              eliminating paper and pen. The objective is having no human
              interference in the elongation measurement.
            </p>
            <p>
              Oncrets PT-Manager app is integrated with Oncrets’ platform, where
              you can register, track and control all post-tensioning steps.
            </p>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
