import { Title } from '../../components/Text';
import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import { TitleDesc } from './project.styles';

export const Project = () => (
  <PageWrapper>
    <Title>Projekte</Title>
    <PageFullContainer>
      <TitleDesc>
        Seit 2016 wurden fünf Projekte ins Leben gerufen. Manche sind noch in
        der Arbeit, andere schon fertig.
      </TitleDesc>
    </PageFullContainer>
  </PageWrapper>
);
