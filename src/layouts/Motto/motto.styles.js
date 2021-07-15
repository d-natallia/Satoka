import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';

import { Text } from '../../components/Text';

const HUGE_SIZE = `@media (max-width: 2000px)`;
const PRE_MEDIUM = `@media (max-width: 1500px)`;
const PRE_SMALL = `@media (max-width: 950px)`;

export const TitleDescription = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
  color: ${COLORS.black};
  max-width: 1341px;
  margin: 0;

  ${SCREEN_QUERIES.large} {
    font-size: 106px;
    line-height: 116px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 50px;
    line-height: 50px;
    max-width: 500px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
    margin-left: 10px;
    width: 300px;
    margin-bottom: 50px;
  }
`;

export const TitleBlockedText = styled.div`
  display: flex;
  width: 838px;
  padding: 90px 35px;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
  font-size: 36px;
  line-height: 48px;
  align-self: flex-end;
  margin: 500px 80px 219px 0px;
  position: relative;

  ${SCREEN_QUERIES.large} {
    margin-top: 400px;
    font-size: 32px;
    width: 650px;
    padding: 60px 25px;
    margin-bottom: 150px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 400px;
    margin-top: 150px;
    font-size: 22px;
    line-height: 35px;
    margin-right: 20px;
    padding: 35px 15px;
    margin-bottom: 100px;
  }

  ${SCREEN_QUERIES.small} {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 200px;
    margin-bottom: 0px;

    & p {
      margin: 71px 10px 175px 10px;
    }
  }
`;

export const BlankCircle = styled.div`
  position: absolute;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  border: 1px solid ${COLORS.black};
  top: 0;
  left: 1500px;
  z-index: -1;

  ${SCREEN_QUERIES.large} {
    width: 80px;
    height: 80px;
    left: 950px;
    top: 50px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 60px;
    height: 60px;
    left: 550px;
    top: 10px;
  }

  ${SCREEN_QUERIES.small} {
    width: 60px;
    height: 60px;
    left: 300px;
    top: 60px;
  }
`;

export const CircleBlue = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${COLORS.blue};
  top: 400px;
  left: 1600px;
  z-index: -1;

  ${SCREEN_QUERIES.large} {
    left: 1000px;
  }

  ${SCREEN_QUERIES.medium} {
    left: 550px;
    top: 150px;
  }

  ${SCREEN_QUERIES.small} {
    width: 30px;
    height: 30px;
    left: 10px;
    top: 300px;
  }
`;

export const OrangeCircle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${COLORS.orange};
  z-index: -1;
  top: 860px;
  left: 440px;

  ${SCREEN_QUERIES.large} {
    top: 640px;
    width: 200px;
    height: 200px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 100px;
    height: 100px;
    top: 270px;
    left: 300px;
  }

  ${SCREEN_QUERIES.small} {
    width: 200px;
    height: 200px;
    top: 370px;
    left: 200px;
  }
`;

export const BlankTriangle = styled.div`
  position: absolute;
  width: 246px;
  height: 246px;
  z-index: -1;
  bottom: -200px;
  left: -600px;

  & img {
    width: 100%;
    height: 100%;
  }

  ${SCREEN_QUERIES.large} {
    width: 200px;
    height: 200px;
    left: -300px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 50px;
    height: 50px;
    left: -150px;
    bottom: -100px;
  }

  ${SCREEN_QUERIES.small} {
    display: none;
  }
`;

export const BlankCircleBlock = styled.div`
  display: none;

  ${SCREEN_QUERIES.small} {
    position: absolute;
    display: block;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    bottom: 32px;
    right: 28px;
    border: 1px solid ${COLORS.white};
  }
`;

export const Description = styled(Text)`
  font-weight: normal;
  font-size: 72px;
  line-height: 86px;
  color: ${COLORS.black};
  margin: 200px 0;

  ${SCREEN_QUERIES.large} {
    font-size: 50px;
    line-height: 72px;
    margin: 100px 0;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 25px;
    line-height: 35px;
    margin: 25px 0;
  }

  ${SCREEN_QUERIES.small} {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-top: 58px;
    margin-bottom: 92px;
  }
`;

export const ReasonsTitle = styled(Text)`
  max-width: 1615px;
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.black};
  margin: 0;
  margin-bottom: 120px;

  ${SCREEN_QUERIES.medium} {
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 80px;
  }
`;

export const ReasonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;

  ${SCREEN_QUERIES.medium} {
    margin-bottom: 100px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const ReasonContainer = styled.div`
  display: flex;
  width: 628px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-left: 120px;

  ${HUGE_SIZE} {
    width: 500px;
  }

  ${PRE_MEDIUM} {
    width: 360px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 270px;
    margin-left: 70px;
  }

  ${PRE_SMALL} {
    width: 190px;
  }

  ${SCREEN_QUERIES.small} {
    width: 85%;
    margin-left: 0px;
    align-self: flex-end;
  }
`;

export const ReasonContainerRow = styled.div`
  display: flex;
`;

export const ReasonContainerIndex = styled(Text)`
  position: absolute;
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
  color: ${COLORS.black};
  top: 0;
  left: -130px;

  ${HUGE_SIZE} {
    font-size: 100px;
    line-height: 120px;
    left: -100px;
  }

  ${PRE_MEDIUM} {
    font-size: 80px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 50px;
    line-height: 80px;
    left: -60px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
  }
`;

export const ReasonContainerTitle = styled(Text)`
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.black};
  width: 100%;

  ${HUGE_SIZE} {
    font-size: 70px;
    line-height: 100px;
  }

  ${PRE_MEDIUM} {
    font-size: 50px;
    line-height: 100px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 30px;
    line-height: 60px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const ReasonContainerText = styled(Text)`
  font-size: 36px;
  line-height: 48px;
  color: ${COLORS.black};
  width: 100%;
  margin-bottom: 50px;

  ${HUGE_SIZE} {
    font-size: 25px;
    line-height: 40px;
  }

  ${PRE_MEDIUM} {
    font-size: 20px;
    line-height: 30px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 15px;
    line-height: 15px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ReasonCircle = styled.div`
  position: absolute;
  width: 328px;
  height: 328px;
  border-radius: 50%;
  background: #ffce55;
  z-index: -1;
  bottom: 0;
  left: 42%;

  ${SCREEN_QUERIES.medium} {
    width: 200px;
    height: 200px;
  }

  ${SCREEN_QUERIES.small} {
    width: 100px;
    height: 100px;
    bottom: 200px;
    left: 70%;
  }
`;

export const LinkTitle = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
`;
