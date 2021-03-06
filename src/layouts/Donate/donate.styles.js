import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text } from '../../components/Text';

const PRE_LARGE_QUERY = `@media (max-width: 1600px)`;

export const DonateText = styled(Text)`
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  margin-top: ${(p) => p.marginTop}px;
  margin-bottom: ${(p) => p.marginBottom}px;
  font-family: 'Gothic A1' sans-serif;

  ${PRE_LARGE_QUERY} {
    font-size: 22px;
    line-height: 30px;
  }
`;

export const DonateTextBold = styled(DonateText)`
  font-weight: bold;
  line-height: 45px;

  ${PRE_LARGE_QUERY} {
    line-height: 30px;
  }
`;

export const FullDonateText = styled(DonateText)`
  max-width: 100%;
`;

export const DonateMiddleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 50px;

  & div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & img {
      width: 100%;
    }
  }

  ${SCREEN_QUERIES.preMedium} {
    flex-direction: column;

    & div {
      width: 100%;

      & img {
        margin-top: 30px;
        width: 100%;
      }
    }
  }
`;

export const DonateMiddleText = styled.div`
  margin-right: 70px;
`;

export const DonateTextBoldLarge = styled(DonateText)`
  font-weight: 500;
  font-size: 50px;
  line-height: 62px;

  ${PRE_LARGE_QUERY} {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const DonateTextBoldSmall = styled(DonateTextBold)`
  font-size: 36px;
  line-height: 45px;
  margin-top: 170px;
  margin-bottom: 190px;

  ${PRE_LARGE_QUERY} {
    font-size: 22px;
    line-height: 34px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const StagesWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 120px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 70px;
    margin-bottom: 70px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 0px;
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
  margin-bottom: 30px;

  ${SCREEN_QUERIES.medium} {
    font-size: 45px;
    line-height: 56px;
    margin-bottom: 10px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const StageText = styled(Text)`
  font-weight: normal;
  font-size: 32px;
  line-height: 44px;
  color: ${COLORS.black};
  position: relative;
  padding-left: 20px;

  &::before {
    content: '???';
    position: absolute;
    left: 0px;
    font-size: 15px;

    ${SCREEN_QUERIES.medium} {
      font-size: 12px;
    }

    ${SCREEN_QUERIES.small} {
      font-size: 8px;
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

export const DonateBigImageWrapper = styled.div`
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DonateTextDesc = styled(DonateText)`
  font-weight: 500;
  font-size: 50px;
  line-height: 62px;
  margin-top: 120px;
  margin-bottom: 42px;
`;

export const DonateOptionText = styled(DonateText)`
  max-width: 913px;
`;

export const MiddleDonateText = styled(DonateOptionText)`
  margin-top: 190px;
  margin-bottom: 145px;
  align-self: flex-end;
  text-align: right;

  ${PRE_LARGE_QUERY} {
    margin-top: 120px;
    margin-bottom: 90px;
  }

  ${SCREEN_QUERIES.medium} {
    margin-top: 100px;
    margin-bottom: 70px;
    align-self: flex-start;
    text-align: left;
  }

  ${SCREEN_QUERIES.small} {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;
