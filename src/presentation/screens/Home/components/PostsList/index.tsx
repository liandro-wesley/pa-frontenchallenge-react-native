import Card from '@presentation/components/Card';
import Typography from '@presentation/components/Typography';
import React from 'react';
import {useHomeScreenContext} from '../../contex';
import * as S from './style';
const PostsList: React.FC = () => {
  const {loading, posts} = useHomeScreenContext();
  return (
    <S.Container>
      {loading && (
        <Typography variant="title" color="accentColor">
          Carregando
        </Typography>
      )}
      {!loading && posts.length === 0 && (
        <Typography variant="title" color="accentColor">
          Vazio
        </Typography>
      )}
      {!loading && posts.length > 0 && (
        <>
          {posts.map(post => (
            <S.Wrapper key={post.id}>
              <Card
                header={
                  <Typography variant="title" color="white800">
                    {post.title}
                  </Typography>
                }
                content={
                  <Typography variant="body" color="white800">
                    {post.body.slice(0, 60)}...
                  </Typography>
                }
              />
            </S.Wrapper>
          ))}
        </>
      )}
    </S.Container>
  );
};

export default PostsList;
