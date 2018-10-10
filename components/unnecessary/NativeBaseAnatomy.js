import React from 'react';
import {Container, Header, Content, Footer, Left, Body, Right, Icon, Card, CardItem, FooterTab, Button, Text} from 'native-base';

export default NativeBaseAnatomy = () => (
  <Container>
    <Header>
      <Left>
        <Icon name="arrow-back" style={{color: "white"}}/>
      </Left>
      <Body>
        <Text style={{color: "white"}}>Header</Text>
      </Body>
      <Right/>
    </Header>
    <Content>
      <Card>
        <CardItem header bordered>
          <Text>Card Header</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              I am Card Body
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text>Card Footer</Text>
        </CardItem>
      </Card>
    </Content>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>I am Footer Button</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
)
