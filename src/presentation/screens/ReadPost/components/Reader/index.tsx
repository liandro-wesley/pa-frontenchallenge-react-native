import Typography from '@presentation/components/Typography';
import React from 'react';
import {useReadPostScreenContext} from '../../contex';

const Reader: React.FC = () => {
  const {post} = useReadPostScreenContext();

  return (
    <>
      <Typography variant="title" color="white800">
        {post.title}
      </Typography>
      <Typography variant="body" color="white800">
        {post.title}
      </Typography>
    </>
  );
};

export default Reader;
