import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text } from '../../components/Text';

export const TitleDesc = styled(Text)`
  max-width: 1653px;
  font-weight: normal;
  font-size: 72px;
  line-height: 86px;
  color: ${COLORS.black};
  margin-bottom: 40px;

  ${SCREEN_QUERIES.large} {
    font-size: 45px;
    line-height: 60px;
    max-width: 1250px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 45px;
    line-height: 40px;
    max-width: 800px;
  }

  ${SCREEN_QUERIES.small} {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    max-width: 500px;
  }
`;

export const Description = styled(Text)`
  max-width: 1452px;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  color: ${COLORS.black};

  ${SCREEN_QUERIES.large} {
    font-size: 25px;
    line-height: 35px;
    max-width: 1250px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 16px;
    line-height: 25px;
    max-width: 800px;
  }

  ${SCREEN_QUERIES.small} {
    line-height: 20px;
    max-width: 100%;
  }
`;
export const StagesWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 130px;

  ${SCREEN_QUERIES.medium} {
    margin-top: 70px;
  }

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const StageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${SCREEN_QUERIES.small} {
    margin-bottom: 30px;
  }
`;

export const StageTitle = styled(Text)`
  font-weight: normal;
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.black};
  margin-bottom: 80px;

  ${SCREEN_QUERIES.medium} {
    font-size: 60px;
    line-height: 70px;
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
  font-size: 36px;
  line-height: 48px;
  color: ${(p) => (p.active ? COLORS.orange : COLORS.black)};
  margin-bottom: 32px;

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

export const PaintImage = styled.div`
  width: 100%;
  margin-top: 197px;

  & img {
    width: 100%;
    height: 100%;
  }

  ${SCREEN_QUERIES.medium} {
    margin-top: 100px;
  }

  ${SCREEN_QUERIES.small} {
    margin-top: 20px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 834px;
  align-self: ${(p) => (p.end ? 'flex-end' : 'flex-start')};
  margin-bottom: ${(p) => (p.image ? '0px' : '180px')};
  margin-top: ${(p) => (p.image ? '0px' : '146px')};

  & img {
    width: 100%;
    height: 100%;
  }

  ${SCREEN_QUERIES.medium} {
    max-width: 100%;
  }

  ${SCREEN_QUERIES.small} {
    margin-bottom: ${(p) => (p.image ? '0px' : '120px')};
  }
`;

export const OptionTitle = styled.div`
  font-weight: normal;
  font-size: 72px;
  line-height: 86px;
  color: ${COLORS.orange};
  margin-bottom: 70px;
`;

export const OptionText = styled.div`
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: ${COLORS.black};
`;
