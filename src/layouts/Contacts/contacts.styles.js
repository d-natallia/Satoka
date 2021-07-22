import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text, Title } from '../../components/Text';

const PRE_MEDIUM_QUERY = `@media (max-width: 1450px)`;

export const TitleHeader = styled(Title)`
  color: ${COLORS.orange};

  ${SCREEN_QUERIES.small} {
    font-size: 45px;
    line-height: 54px;
    width: 100%;
    margin-top: 50px;
  }
`;

export const Header = styled(Text)`
  font-size: 72px;
  line-height: 86px;

  ${SCREEN_QUERIES.large} {
    font-size: 60px;
    line-height: 74px;
    margin-bottom: 50px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 40px;
    line-height: 52px;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 24px;
    line-height: 32px;
    width: 304px;
    margin-top: 27px;
    margin-left: 6px;
    width: 100%;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
  margin-bottom: 120px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 100px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
  }
`;

export const OptionsWrapperSecond = styled(OptionsWrapper)`
  margin-top: 0;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 363px;
  position: relative;
  margin-right: 30px;

  ${SCREEN_QUERIES.small} {
    width: 100%;
    margin-bottom: 30px;
    margin-right: 70px;
  }
`;

export const OptionContainerSecond = styled(OptionContainer)`
  margin-bottom: 20px;
`;

export const OptionTitle = styled(Text)`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 60px;

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

export const OptionTitleSecond = styled(OptionTitle)`
  margin-bottom: 0;
  font-size: 50px;
  line-height: 62px;

  ${SCREEN_QUERIES.medium} {
    font-size: 30px;
    line-height: 45px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 30px;
    line-height: 35px;
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

export const BottomTitle = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
  max-width: 100%;

  ${SCREEN_QUERIES.large} {
    font-size: 90px;
    line-height: 100px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 70px;
    line-height: 80px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 50px;
    line-height: 55px;
  }
`;

export const CircleBlue = styled.div`
  ${SCREEN_QUERIES.small} {
    position: absolute;
    width: 63px;
    height: 63px;
    border-radius: 50%;
    background-color: ${COLORS.blue};
    top: -200px;
    left: 150px;
    bottom: 0;
  }
`;
