import React, {useState} from 'react';
import {CreateAPostModel} from '@domain/models/create-a-post.model';
import getColors from '@presentation/helpers/getColors';
import * as S from './style';
import {v4 as uuidv4} from 'uuid';
import Typography from '@presentation/components/Typography';
import {Alert} from 'react-native';
import {useCreateScreenContext} from '../../context';
import Loading from '@presentation/components/Loading';

const PostForm: React.FC = () => {
  const {createPost, loading} = useCreateScreenContext();
  const [dataToCreatePost, setDataToCreatePost] = useState<CreateAPostModel>({
    title: '',
    body: '',
    userId: '1',
    id: uuidv4().substring(0, 8),
  });

  const handleSubmit = async () => {
    if (dataToCreatePost.title !== '' && dataToCreatePost.body !== '') {
      return await createPost(dataToCreatePost);
    } else {
      Alert.alert('Atenção', 'Todos os campos devem ser preenchidos');
    }
  };
  return (
    <S.Container>
      {loading && <Loading />}
      {!loading && (
        <>
          <Typography variant="title" color="white800">
            Preencha os campos abaixo para criar uma publicação!
          </Typography>
          <S.CustomInput
            placeholder="Insira um título para sua publicação"
            placeholderTextColor={getColors('gray900')}
            value={dataToCreatePost.title}
            onChangeText={text =>
              setDataToCreatePost({
                ...dataToCreatePost,
                title: text,
              })
            }
          />
          <S.CustomMultilineINput
            placeholder="Insira o cnoteúdo de sua publicação"
            multiline
            numberOfLines={4}
            value={dataToCreatePost.body}
            onChangeText={text =>
              setDataToCreatePost({
                ...dataToCreatePost,
                body: text,
              })
            }
            placeholderTextColor={getColors('gray900')}
          />
          <S.CustomButton onPress={() => handleSubmit()}>
            <Typography variant="title" color="white800">
              Criar
            </Typography>
          </S.CustomButton>
        </>
      )}
    </S.Container>
  );
};

export default PostForm;
