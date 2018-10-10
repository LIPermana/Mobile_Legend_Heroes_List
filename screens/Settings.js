import React from 'react';
import {Container, Content, Text, H1} from 'native-base';

export default Heroes = () => (
  <Container>
    <Content>
      <H1 style={forstyle.setting}>Settings</H1>
    </Content>
  </Container>
)

const forstyle = {
  setting: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20
  }
}
