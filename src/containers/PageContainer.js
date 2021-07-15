import styled from 'styled-components';

import { SCREEN_QUERIES, COLORS } from '../config';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px 92px 0 95px;
  position: relative;

  ${SCREEN_QUERIES.medium} {
    padding-top: 50px;
  }

  ${SCREEN_QUERIES.small} {
    padding: ${(p) => (p.noSmallPadding ? '0' : '60px 30px 0 30px')};
  }
`;

export const PageInnerContainer = styled.div`
  display: flex;
  max-width: 1750px;
  flex-direction: column;
  width: 100%;
  border-top: ${(p) => (p.topBorder ? `1px solid ${COLORS.blue}` : 'none')};
  border-bottom: ${(p) => (p.noBorder ? 'none' : `1px solid ${COLORS.blue}`)};
  margin-bottom: 180px;
  position: relative;

  ${SCREEN_QUERIES.large} {
    margin-bottom: 150px;
  }

  ${SCREEN_QUERIES.medium} {
    margin-bottom: 80px;
  }

  ${SCREEN_QUERIES.small} {
    margin-bottom: 50px;
    border-bottom: ${(p) =>
      p.smallBorder ? `1px solid ${COLORS.blue}` : 'none'};
  }
`;

export const PageFullContainer = ({
  children,
  noSmallPadding,
  noBorder,
  topBorder,
  smallBorder,
  wrapperStyle,
  style,
}) => (
  <PageContainer noSmallPadding={noSmallPadding} style={wrapperStyle}>
    <PageInnerContainer
      noBorder={noBorder}
      smallBorder={smallBorder}
      topBorder={topBorder}
      style={style}
    >
      {children}
    </PageInnerContainer>
  </PageContainer>
);
