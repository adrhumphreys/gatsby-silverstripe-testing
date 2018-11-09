import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const PostedDate = styled.p`
  display: inline-block;
  span {
    font-weight: 600;
  }
`

const PostDate = props => {
  const date = new Date(props.date);
  return (
    <Wrapper>
      <PostedDate>
        <span>Published:</span> {date.toLocaleDateString()}
      </PostedDate>
    </Wrapper>
  )
}

export default PostDate
