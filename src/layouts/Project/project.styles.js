import styled from 'styled-components';

import { COLORS } from '../../config';
import { Text } from '../../components/Text';

export const TitleDesc = styled(Text)`
  font-weight: normal;
  font-size: 72px;
  line-height: 86px;
  color: ${COLORS.black};
`;
