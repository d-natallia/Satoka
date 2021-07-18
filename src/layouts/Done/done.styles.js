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
  margin: 0px 90px 130px 0px;
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
  margin-left: 0px;
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

export const TextDesc = styled(Text)`
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  color: ${COLORS.black};
  max-width: 867px;
  align-self: ${(p) => (p.end ? 'flex-end' : 'flex-start')};

  ${SCREEN_QUERIES.small} {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TextDescMedium = styled(TextDesc)`
  font-weight: 500;
  font-size: 50px;
  line-height: 62px;
  margin-top: 180px;
  margin-bottom: 105px;

  ${SCREEN_QUERIES.small} {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const OrangeBannerWrapper = styled.div`
  width: 733px;
  background-color: ${COLORS.orange};
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-bottom: 30px;
  margin-top: 100px;
  margin-bottom: 76px;
  align-self: flex-end;

  ${SCREEN_QUERIES.medium} {
    width: 500px;
  }

  ${SCREEN_QUERIES.small} {
    width: 300px;
    align-self: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const WhiteDotsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${SCREEN_QUERIES.small} {
    margin-bottom: 10px;
  }
`;

export const WhiteDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${COLORS.white};
  margin-right: 22px;

  ${SCREEN_QUERIES.medium} {
    width: 20px;
    height: 20px;
    margin-right: 17px;
  }

  ${SCREEN_QUERIES.small} {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }
`;

export const TextBlock = styled(Text)`
  font-weight: 500;
  font-size: 50px;
  line-height: 62px;
  color: ${COLORS.black};

  ${SCREEN_QUERIES.medium} {
    font-size: 35px;
    line-height: 50px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const BoldFullText = styled(Text)`
  width: 100%;
  font-weight: normal;
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.black};

  ${SCREEN_QUERIES.large} {
    font-size: 76px;
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

export const StagesWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 130px;
  margin-bottom: 400px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 70px;
    margin-bottom: 100px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const StageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;

  ${SCREEN_QUERIES.small} {
    margin-bottom: 30px;
  }
`;

export const StageTitle = styled(Text)`
  font-weight: normal;
  font-size: 66px;
  line-height: 82px;
  color: ${COLORS.black};
  margin-bottom: 80px;

  ${SCREEN_QUERIES.medium} {
    font-size: 45px;
    line-height: 56px;
    margin-bottom: 40px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 16px;
  }
`;

export const StageText = styled(Text)`
  font-weight: normal;
  font-size: 32px;
  line-height: 44px;
  color: ${COLORS.black};
  position: relative;
  padding-left: 25px;

  &::before {
    content: '●';
    position: absolute;
    left: 0px;
    font-size: 25px;

    ${SCREEN_QUERIES.medium} {
      font-size: 20px;
    }

    ${SCREEN_QUERIES.small} {
      font-size: 16px;
    }
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 7px;
  }
`;

export const FirstTextDesc = styled(TextDesc)`
  margin-top: 120px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 70px;
  }

  ${SCREEN_QUERIES.small} {
    margin-top: 40px;
  }
`;

export const MiddleTextDesc = styled(TextDesc)`
  margin-top: 190px;
  margin-bottom: 145px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 100px;
    margin-bottom: 70px;
  }

  ${SCREEN_QUERIES.small} {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;
