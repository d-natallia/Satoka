import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../config';

export const Text = styled.p`
  font-family: 'Lato' sans-serif;
  font-style: normal;
  margin: 0;
  color: ${COLORS.black};
`;

export const Title = styled(Text)`
  font-weight: 300;
  font-size: 186px;
  line-height: 186px;
  text-transform: uppercase;
  color: ${COLORS.black};
  margin: 0;
  margin-bottom: 84px;
  margin-top: 150px;

  ${SCREEN_QUERIES.large} {
    font-size: 120px;
    line-height: 120px;
    margin-bottom: 50px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 70px;
    line-height: 70px;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 45px;
    line-height: 54px;
    width: 304px;
    margin-top: 60px;
    margin-left: 6px;
  }
`;

export const Header = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;

  ${SCREEN_QUERIES.large} {
    font-size: 105px;
    line-height: 120px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 60px;
    line-height: 75px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
  }
`;
