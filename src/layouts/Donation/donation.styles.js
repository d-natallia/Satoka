import styled from 'styled-components';

import { COLORS, SCREEN_QUERIES } from '../../config';
import { Text } from '../../components/Text';

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
`;

export const TextTitle = styled(Text)`
  font-size: 96px;
  line-height: 115px;
  color: ${COLORS.orange};
  margin-bottom: 50px;
`;

export const MainText = styled(DonationText)`
  max-width: 1559px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  &::before {
    position: absolute;
    content: url('../../assets/images/arrow_down.svg');
  }
`;

export const OptionTitle = styled(Text)`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 177px;
`;

export const OptionText = styled(Text)`
  font-size: 36px;
  line-height: 48px;
`;
