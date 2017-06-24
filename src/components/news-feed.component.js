import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { 
  Container,
  Content,
  Footer
} from 'native-base';
import PhotoCard from './photo-card.component';
import Nav from './nav.component';

let fakeData = [
  {
    "_id": "1",
    "images": {
      "thumbnail": "image.jpg",
      "small": "image2.jpg",
      "normal": "https://robohash.org/illumsitut.png?size=300x300\u0026set=set1"
    },
    "description": "Buenazo!",
    "tags": [
      "pastas",
      "alpesto",
      "italiano"
    ],
    "owner": "1127-54FP-4872-1141",
    "location": {
      "data": "location data",
      "description": "CALA"
    },
    "likes": [
      "1155-45FP-4877-8789",
      "1544-14FP-1657-8515"
    ],
    "likes-total": 2,
    "price": 44.4,
    "currency": "PE",
    "popularity": 7
  },
    {
    "_id": "2",
    "images": {
      "thumbnail": "image.jpg",
      "small": "image2.jpg",
      "normal": "https://robohash.org/doloribusofficiaut.png?size=300x300\u0026set=set1"
    },
    "description": "Riquísimo!",
    "tags": [
      "carne",
      "bife",
      "corte"
    ],
    "owner": "1127-54FP-4872-1141",
    "location": {
      "data": "location data",
      "description": "CALA"
    },
    "likes": [
      "1155-45FP-4877-8789",
      "1544-14FP-1657-8515"
    ],
    "likes-total": 2,
    "price": 44.4,
    "currency": "PE",
    "popularity": 7
  }
];

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastPress: 0,
      userId: 'd290f1ee-6c54-4b01-90e6-d701748f0851'
    };
  }

  getCardList() {
    fetch(`https://serene-beach-38011.herokuapp.com/api/faker?page=1&per_page=5`)
      .then(response => response.json())
      .then(data => {
        this.props.onSetCards(fakeData)
      })
      .catch((error) => {
        console.error(error);
      }
    );
  }

  postUserToLikeList(cardId) {
    let delta = new Date().getTime() - this.state.lastPress;

    if(delta < 200) {
      this.props.onUpdateCard(cardId, this.state.userId);
    }

    this.setState({
      lastPress: new Date().getTime()
    })
  }

  componentWillMount() {
    this.getCardList();
  }

  render() {
    return (
      <Container>
        <Content>
          {
            this.props.cards.map((card, i) => {
              return (
                <PhotoCard key={i}
                  data={card}
                  onPress={() => this.postUserToLikeList(card._id)} />
              );
            })
          }
        </Content>
        <Footer >
          <Nav/>
        </Footer>
      </Container>  
    );
  }
}

export default NewsFeed;