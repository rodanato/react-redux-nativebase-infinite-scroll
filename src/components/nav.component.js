import React from 'react';
import {
  Text
} from 'react-native';
import { 
  Footer,
  FooterTab,
  Button
} from 'native-base';

let Nav = () => {
  return (
    <FooterTab>
        <Button active>
            <Text>Newsfeed</Text>
        </Button>
        <Button>
            <Text>Favorites</Text>
        </Button>
        <Button>
            <Text>Profile</Text>
        </Button>
    </FooterTab>
  );
};

export default Nav;