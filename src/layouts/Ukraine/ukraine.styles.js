import styled from "styled-components";
import { Text } from "../../components/Text";
import { COLORS, SCREEN_QUERIES } from "../../config";

const HUGE_SIZE = `@media (max-width: 2000px)`;
const PRE_MEDIUM = `@media (max-width: 1500px)`;
const PRE_SMALL = `@media (max-width: 950px)`;

export const LinkContainer = styled.div`
  display: flex;
  margin-bottom: 70px;
  align-items: center;
  position: relative;
`;

export const LinkImage = styled.div`
  position: absolute;
  left: 1350px;
  top: -42px;
  align-items: center;
  width: 283px;
  height: 220px;
  transform: rotate(-90deg);

  ${SCREEN_QUERIES.large} {
    width: 220px;
    height: 170px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LinkTitle = styled(Text)`
  & a {
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 144px;
    line-height: 156px;
    color: #000;
    margin: 0;
    transition: all .2s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #5585ff;
    }
  
    ${SCREEN_QUERIES.large} {
      font-size: 100px;
      line-height: 120px;
    }
  
    ${SCREEN_QUERIES.medium} {
      font-size: 80px;
      line-height: 100px;
    }
  
    ${SCREEN_QUERIES.small} {
      font-size: 50px;
      line-height: 40px;
    }
  }

`;

export const ImageContainer = styled.div`
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const MainTextContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  ${SCREEN_QUERIES.small} {
    margin-bottom: 30px;
  }
`;

export const MainText = styled(Text)`
  font-family: "Gothic A1";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: ${COLORS.black};
  text-align: left;
  align-self: flex-start;

  ${SCREEN_QUERIES.large} {
    font-size: 28px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 20px;
    text-align: justify;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
    text-align: left;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex: 1 1;

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BlockBlank = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #5585ff;
  justify-content: center;
  align-items: center;
  padding: 92px 84px;

  & p {
    font-family: "Gothic A1";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    color: #5585ff;
    margin: 0;
  }

  ${SCREEN_QUERIES.large} {
    padding: 20px 20px;

    & p {
      font-size: 30px;
    }
  }

  ${SCREEN_QUERIES.medium} {
    & p {
      font-size: 20px;
      line-height: 40px;
    }
  }

  ${SCREEN_QUERIES.small} {
    max-width: 370px;

    & p {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;

export const BlockFilled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #5585ff;
  padding: 45px;

  & p {
    font-family: "Gothic A1";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    color: #fff;
    margin: 0;
  }

  ${SCREEN_QUERIES.large} {
    padding: 20px 20px;

    & p {
      font-size: 25px;
    }
  }

  ${SCREEN_QUERIES.medium} {
    & p {
      font-size: 17px;
      line-height: 30px;
    }
  }

  ${SCREEN_QUERIES.small} {
    max-width: 370px;

    & p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  ${SCREEN_QUERIES.small} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${SCREEN_QUERIES.small} {
    max-width: 185px;
  }
`;

export const ListTitle = styled(Text)`
  font-family: "Gothic A1";
  font-weight: 500;
  font-size: 50px;
  line-height: 62px;
  color: #000;
  margin-bottom: 30px;

  ${SCREEN_QUERIES.large} {
    font-size: 40px;
  }

  ${SCREEN_QUERIES.medium} {
    line-height: 40px;
    font-size: 25px;
  }

  ${SCREEN_QUERIES.small} {
    margin-bottom: 20px;
    line-height: 30px;
    font-size: 15px;
  }
`;

export const ListText = styled(Text)`
  font-family: "Gothic A1";
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #000;
  margin-bottom: 15px;

  ${SCREEN_QUERIES.large} {
    font-size: 30px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 20px;
    line-height: 25px;
  }

  ${SCREEN_QUERIES.small} {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 10px;
  }
`;

export const ReasonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;
  margin-top: 70px;

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
  font-family: "Gothic A1";

  ${HUGE_SIZE} {
    font-size: 25px;
    line-height: 40px;
  }

  ${PRE_MEDIUM} {
    font-size: 20px;
    line-height: 30px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 20px;
    line-height: 25px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 16px;
    line-height: 20px;
  }
`;
