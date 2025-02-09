import React from 'react';

import ProfilePage from '../ProfilePage';
import Feed from '../Feed';
import Post from '../Post';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Explore job posts</strong>
          <span>432 posts</span>
        </ProfileInfo>
      </Header>
      <Post />
      <Feed />
    </Container>
  );
};

export default Main;
