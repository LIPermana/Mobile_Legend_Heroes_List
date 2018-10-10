import React, {Component} from 'react';
import {Container, Header, Content, List} from 'native-base'
import Film from './components/film';

class MyFilmList extends Component {

 film = [
   'Avenger',
   'The Hunger Game',
   'Godzilla',
   'Pasific Rim'
 ]

  constructor(){
    super();
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(this.film)
    // }
  }

  render(){
    return(
      <Container>
        <Header/>
        <Content>
          <List>
          {this.film.map((film, key)=><Film key={key} film={film}/>)}
          </List>
        </Content>
      </Container>
    )
  }
}

export default MyFilmList;
