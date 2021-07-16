import { Title } from '../../components/Text';
import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import { BannerWrapper, BannerTitle, BannerText } from './done.styles';

export const Done = () => (
  <PageWrapper>
    <PageFullContainer noBorder>
      <Title>Done</Title>
    </PageFullContainer>
    <BannerWrapper>
      <BannerTitle>
        Wir freuen uns mitzuteilen, dass einige Projekte bereits fertig sind!{' '}
      </BannerTitle>
      <BannerText>Hier finden Sie unseren kleinen Bericht dazu:</BannerText>
    </BannerWrapper>
  </PageWrapper>
);
