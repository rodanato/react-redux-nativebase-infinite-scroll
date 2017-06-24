import React from 'react';
import {
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { 
  List,
  ListItem,
  Card,
  CardItem,
  Badge
} from 'native-base';

let PhotoCard = ({data, onPress}) => {
  return (
    <Card>
      <CardItem>
        <TouchableHighlight underlayColor={'#fff'}
          onPress={onPress}>
          <Image style={{resizeMode: 'cover', width: 320, height: 320 }} 
            source={{uri: data.images.normal}} />
        </TouchableHighlight>
      </CardItem>
      <CardItem>
        <Text>{data.description}</Text>
      </CardItem>
      <CardItem>
        {
          data.tags.map((tag, i) => {
            return (
              <Badge info key={i}>
                <Text>{tag}</Text>
              </Badge>
            )
          })
        }
      </CardItem>
      <CardItem>
        <Text>Likes: </Text>
        <List>
          {
            data.likes.map((like, i) => {
              return (
                <ListItem  key={i}>
                  <Text>{like}</Text>
                </ListItem>
              )
            })
          }
        </List>
      </CardItem>
    </Card>
  );
};

export default PhotoCard;