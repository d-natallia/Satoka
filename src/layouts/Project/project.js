import PaintImg from '../../assets/images/paint.png';
import PaintBeach from '../../assets/images/project_beach.png';
import PaintHome from '../../assets/images/project_home.png';

import { Title } from '../../components/Text';
import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import {
  TitleDesc,
  Description,
  StagesWrapper,
  StageContainer,
  StageTitle,
  StageText,
  PaintImage,
  OptionsContainer,
  OptionTitle,
  OptionText,
} from './project.styles';

export const Project = () => (
  <PageWrapper>
    <PageFullContainer noBorder>
      <Title>Projekte</Title>
      <TitleDesc>
        Seit 2016 wurden fünf Projekte ins Leben gerufen. Manche sind noch in
        der Arbeit, andere schon fertig.
      </TitleDesc>
      <Description>
        Kindheit – für viele bedeutet das vor allem Unbekümmertheit,
        Sorglosigkeit, Zeit zum Spielen haben und sich zu entfalten. Doch das
        ist leider nicht überall so. Manche Kinder haben nicht genug Essen,
        Bildung und medizinische Versorgung zur Verfügung. Sie haben keine
        Möglichkeiten, in das gesellschaftliche Leben hineinzuwachsen. Deshalb
        wurde 2015 der gemeinnützige Verein „Satoka Kinderhilfe e.V.“ ins Leben
        gerufen. Ziel ist es, diesen Bedürftigen eine Kindheit zu ermöglichen
        und ihnen die Chance auf ein selbstbestimmtes Leben zu geben. Wir
        finanzieren uns über Spenden, Mitgliedschaften und Patenschaften. Unser
        ganzes Team in Deutschland arbeitet zu 100% ehrenamtlich.
      </Description>
      <StagesWrapper>
        <StageContainer>
          <StageTitle>Done</StageTitle>
          <StageText>Der Computerraum</StageText>
          <StageText active>Das Kinderzimmer</StageText>
        </StageContainer>
        <StageContainer>
          <StageTitle>In progress</StageTitle>
          <StageText>Projekt: Sanierung</StageText>
          <StageText active>Projekt: Spielplatz</StageText>
          <StageText>Projekt: Wunschallee</StageText>
        </StageContainer>
      </StagesWrapper>
      <PaintImage>
        <img src={PaintImg} alt='painting' />
      </PaintImage>
      <OptionsContainer end>
        <OptionTitle>Erste Schritte</OptionTitle>
        <OptionText>
          Vom Satoka Kinderhilfe e.V. wurden seit der Gründung einzelne Aktionen
          durch die Besuche von Vereinsmitgliedern durchgeführt. Zum Beispiel
          wurden Kinder ohne ausreichende Kleidung mit warmen Sachen beschenkt
          oder ins Delphinarium und Theater eingeladen.
        </OptionText>
      </OptionsContainer>
      <OptionsContainer image>
        <img src={PaintBeach} alt='beach' />
      </OptionsContainer>
      <OptionsContainer>
        <OptionTitle>Finanzierung</OptionTitle>
        <OptionText>
          Die entstandenen Reise- und Verpflegungskosten, als auch die dazu
          benötigen Einkäufe von Geschenken wurden nicht über den Satoka
          Kinderhilfe e.V. abgerechnet, sondern von den Unterstützern privat
          getragen.
        </OptionText>
      </OptionsContainer>
      <OptionsContainer image end>
        <img src={PaintHome} alt='beach' />
      </OptionsContainer>
    </PageFullContainer>
  </PageWrapper>
);
