import Card from '@presentation/components/Card';
import Typography from '@presentation/components/Typography';
import React from 'react';
import {FlatList} from 'react-native';
import {useHomeScreenContext} from '../../contex';
import * as S from './style';
import Loading from '@presentation/components/Loading';
import Empty from '@presentation/components/Empty';
import {Routes} from '@main/navigation/routes';

const PostsList: React.FC = () => {
  const {loading, posts, navigation} = useHomeScreenContext();
  return (
    <S.Container>
      {loading && <Loading />}
      {!loading && (
        <>
          {posts.length === 0 && <Empty />}
          {posts.length > 1 && (
            <FlatList
              data={posts}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <S.Wrapper>
                  <Card
                    onPress={() =>
                      navigation.navigate(Routes.READ, {postId: item.id})
                    }
                    header={
                      <Typography variant="title" color="white800">
                        {item.title}
                      </Typography>
                    }
                    content={
                      <Typography variant="body" color="white800">
                        {item.body.slice(0, 60)}...
                      </Typography>
                    }
                  />
                </S.Wrapper>
              )}
            />
          )}
        </>
      )}
    </S.Container>
  );
};

export default PostsList;
