import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text } from '../../components/Text';

const PRE_MEDIUM_QUERY = `@media (max-width: 1450px)`;

export const MainImageWrapper = styled.div`
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DonationText = styled(Text)`
  font-size: 36px;
  line-height: 48px;
  font-family: Gothic A1 sans-serif;

  ${SCREEN_QUERIES.large} {
    font-size: 32px;
    line-height: 42px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 22px;
    line-height: 25px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TextTitle = styled(Text)`
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.orange};
  margin-bottom: 50px;

  ${SCREEN_QUERIES.large} {
    font-size: 80px;
    line-height: 96px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 50px;
    line-height: 62px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const MainText = styled(DonationText)`
  max-width: 1559px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 100px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  position: relative;
  margin-right: 30px;

  ${SCREEN_QUERIES.small} {
    max-width: 100%;
    margin-bottom: 30px;
    margin-right: 70px;
  }
`;

export const OptionTitle = styled(Text)`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 177px;

  ${SCREEN_QUERIES.large} {
    font-size: 25px;
    line-height: 36px;
    margin-bottom: 50px;
  }

  ${PRE_MEDIUM_QUERY} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 30px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 20px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 15px;
  }
`;

export const OptionText = styled(Text)`
  font-size: 36px;
  line-height: 48px;

  ${SCREEN_QUERIES.large} {
    font-size: 25px;
    line-height: 36px;
  }

  ${PRE_MEDIUM_QUERY} {
    font-size: 20px;
    line-height: 28px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 15px;
    line-height: 22px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ArrowImage = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  right: -100px;
  top: 0;

  & img {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  ${SCREEN_QUERIES.large} {
    width: 40px;
    height: 40px;
    right: 0px;
  }

  ${PRE_MEDIUM_QUERY} {
    width: 30px;
    height: 30px;
    right: 40px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 20px;
    height: 20px;
    right: -10px;
  }

  ${SCREEN_QUERIES.small} {
    width: 64px;
    height: 64px;
    bottom: 0;
    right: -70px;

    & img {
      transform: rotate(0deg);
    }
  }
`;

export const EndingTitle = styled(Text)`
  font-size: 72px;
  line-height: 86px;
  margin-bottom: 50px;

  ${SCREEN_QUERIES.large} {
    font-size: 80px;
    line-height: 96px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 50px;
    line-height: 62px;
  }

  ${SCREEN_QUERIES.small} {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 25px;
  }
`;

export const EndingText = styled(Text)`
  font-size: 36px;
  line-height: 48px;

  ${SCREEN_QUERIES.large} {
    font-size: 32px;
    line-height: 42px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 22px;
    line-height: 25px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
  }
`;
