import { Box, BoxText } from '../index';
import HeartIcon from '../../public/heart.svg';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heart = styled(HeartIcon)`
  height: 48px;
  margin-right: 20px;

  @media only screen and (max-width: 568px) {
    height: 24px;
    margin-right: 10px;
  }
`;

export const LikeCount = ({ count }) => {
  return (
    <Box>
      <Heart />
      <BoxText>{count} ürün</BoxText>
    </Box>
  );
};

LikeCount.propTypes = {
  count: PropTypes.number,
};

LikeCount.defaultProps = {
  count: 0,
};
