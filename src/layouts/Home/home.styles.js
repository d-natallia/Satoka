import styled from 'styled-components';

import HomeMainImage from '../../assets/images/home_main.png';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text } from '../../components/Text';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HomeMainImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainTitle = styled(Text)`
  font-style: normal;
  font-weight: 300;
  font-size: 186px;
  text-transform: uppercase;
  color: ${COLORS.white};
  margin: 0;
  display: inline;
  margin-left: 100px;

  ${SCREEN_QUERIES.large} {
    font-size: 120px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 80px;
    margin-left: 30px;
  }

  ${SCREEN_QUERIES} {
    font-size: 45px;
    line-height: 54px;
    font-weight: 300;
  }
`;

export const MainDescText = styled(Text)`
  font-family: Gothic A1;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  color: ${COLORS.black};
  text-align: left;
  max-width: 910px;
  align-self: flex-start;
  margin-bottom: 150px;

  ${SCREEN_QUERIES.large} {
    font-size: 28px;
    max-width: 800px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 20px;
    max-width: 700px;
    text-align: justify;
  }

  ${SCREEN_QUERIES.small} {
    max-width: 100%;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    margin-bottom: 100px;
  }
`;

export const MainDescTextBold = styled(MainDescText)`
  font-weight: 500;
  text-align: right;
  font-size: 50px;
  line-height: 62px;
  max-width: 1300px;
  align-self: flex-end;

  ${SCREEN_QUERIES.large} {
    font-size: 37px;
    max-width: 1000px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 25px;
    max-width: 800px;
    text-align: justify;
  }

  ${SCREEN_QUERIES.small} {
    max-width: 100%;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: left;
    margin: 0;
  }
`;

export const MainCircleOrange = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background-color: ${COLORS.orange};
  bottom: 50px;
  left: 45%;
  z-index: -1;

  ${SCREEN_QUERIES.large} {
    width: 300px;
    height: 300px;
    bottom: 120px;
    left: 40%;
  }

  ${SCREEN_QUERIES.small} {
    width: 200px;
    height: 200px;
    bottom: 0px;
    left: 40%;
  }
`;

export const AboutTitle = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
  color: ${COLORS.black};
  margin: 0;
  margin-bottom: 90px;

  ${SCREEN_QUERIES.medium} {
    font-size: 80px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
  }

  ${SCREEN_QUERIES.medium} {
    margin-bottom: 40px;
  }
`;

export const AboutQuestionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
  }
`;

export const AboutQuestion = styled.div`
  display: flex;
  flex-basis: 45%;
  flex-direction: column;
`;

export const AboutQuestionTitle = styled(Text)`
  font-weight: normal;
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.black};
  margin: 0;
  margin-bottom: 74px;

  ${SCREEN_QUERIES.large} {
    font-size: 70px;
    margin-bottom: 30px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 40px;
    margin-bottom: 5px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 25px;
  }
`;

export const AboutQuestionText = styled(Text)`
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  color: ${COLORS.black};
  margin: 0;

  ${SCREEN_QUERIES.large} {
    font-size: 28px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 18px;
    line-height: 30px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 25px;
  }
`;

export const AboutFigures = styled.div`
  display: flex;
  align-items: center;
  margin-top: 150px;
  padding-left: 300px;

  ${SCREEN_QUERIES.large} {
    padding-left: 200px;
  }

  ${SCREEN_QUERIES.medium} {
    padding-left: 100px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const AboutFigureCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${COLORS.black};
  margin-right: 400px;

  ${SCREEN_QUERIES.medium} {
    width: 60px;
    height: 60px;
    margin-right: 200px;
  }

  ${SCREEN_QUERIES.small} {
    margin-right: 48px;
    margin-bottom: 40px;
  }
`;

export const AboutFigureArrow = styled.div`
  width: 238px;
  height: 223px;

  ${SCREEN_QUERIES.medium} {
    width: 160px;
    height: 156px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const AboutDescriptionContainer = styled.div`
  border: 1px solid ${COLORS.black};
  padding: 96px 106px 97px 105px;
  margin-top: 100px;

  ${SCREEN_QUERIES.large} {
    padding: 50px;
  }

  ${SCREEN_QUERIES.medium} {
    padding: 51px 19px 70px 17px;
  }

  ${SCREEN_QUERIES.small} {
    margin-top: 50px;
  }
`;

export const AboutDescription = styled(Text)`
  font-weight: normal;
  font-size: 72px;
  line-height: 86px;
  text-align: center;
  color: ${COLORS.blue};

  ${SCREEN_QUERIES.large} {
    font-size: 60px;
    line-height: 75px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 35px;
    line-height: 55px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 25px;
    line-height: 30px;
    text-align: center;
  }
`;
