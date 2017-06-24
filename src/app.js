import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form } from 'native-base';
import VisibleNewsFeed from './containers/news-feed.container';
import VisiblePostsILike from './containers/posts-i-like.container';

const TodoApp = () => (
  <Container>
    <Content>
      {/*<VisibleNewsFeed />*/}
      <VisiblePostsILike />
    </Content>
  </Container>
);

export default TodoApp;
