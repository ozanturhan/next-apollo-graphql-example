import HeartIcon from '../../../public/heart.svg';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AtomBox } from '../../atoms/AtomBox';
import { AtomBoxText } from '../../atoms/AtomBoxText';

const Heart = styled(HeartIcon)`
  height: 48px;
  margin-right: 20px;

  @media only screen and (max-width: 568px) {
    height: 24px;
    margin-right: 10px;
  }
`;

export const MoleculeLikeCount = ({ count }) => {
  return useMemo(() => {
    console.log('Render MoleculeLikeCount');
    return (
      <AtomBox>
        <Heart />
        <AtomBoxText>{count} ürün</AtomBoxText>
      </AtomBox>
    );
  }, [count]);
};

MoleculeLikeCount.propTypes = {
  count: PropTypes.number,
};

MoleculeLikeCount.defaultProps = {
  count: 0,
};
