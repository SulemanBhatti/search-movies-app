import React from 'react';
import { ColorRing } from 'react-loader-spinner';

type SpinnerProps = {
  visible: boolean;
};

//Improvement: ClassNames can be passed as params
export const Spinner: React.FC<SpinnerProps> = ({ visible }) => {
  return (
    <ColorRing
      visible={visible}
      height="20"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};
