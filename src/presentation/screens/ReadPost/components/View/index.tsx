import Loading from '@presentation/components/Loading';
import React from 'react';
import {useReadPostScreenContext} from '../../contex';
import Action from '../Actions';
import Reader from '../Reader';

const View: React.FC = () => {
  const {loading} = useReadPostScreenContext();
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Action />
          <Reader />
        </>
      )}
    </>
  );
};

export default View;
