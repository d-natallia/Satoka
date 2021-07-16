import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text } from '../../components/Text';

export const BannerWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.blue};
  position: relative;
  padding-top: 109px;
  padding-bottom: 130px;
`;

export const BannerTitle = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
  color: ${COLORS.white};
  margin: 0px 90px 130px 90px;
  max-width: 1600px;

  ${SCREEN_QUERIES.large} {
    font-size: 100px;
    line-height: 112px;
    max-width: 1200px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 75px;
    line-height: 96px;
    margin-bottom: 80px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 60px;
    line-height: 75px;
    margin-bottom: 50px;
  }
`;

export const BannerText = styled(Text)`
  font-size: 72px;
  line-height: 86px;
  color: ${COLORS.orange};
  margin-left: 90px;
  margin-right: 90px;

  ${SCREEN_QUERIES.large} {
    font-size: 60px;
    line-height: 70px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 40px;
    line-height: 55px;
  }
`;
