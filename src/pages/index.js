import React from 'react'
import { FullPage, Slide } from 'react-full-page';

const IndexPage = () => (
  <FullPage controls controlsProps={{className: 'class-name'}}>
    <Slide>
      <h1>1 Inner slide content</h1>
    </Slide>
    <Slide>
      <h1>2 Another slide content</h1>
    </Slide>
  </FullPage>
)

export default IndexPage
