import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`

const Hero = props => (
  <Wrapper image={props.image}>
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
