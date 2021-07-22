import OrangeTriangleImg from '../../assets/images/triangle_orange.svg';

import { Title, Header } from '../../components/Text';
import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import {
  BannerWrapper,
  BannerTitle,
  BannerText,
  TextDesc,
  TextDescMedium,
  OrangeBannerWrapper,
  WhiteDotsContainer,
  WhiteDot,
  TextBlock,
  BoldFullText,
  StagesWrapper,
  StageContainer,
  StageTitle,
  StageText,
  FirstTextDesc,
  MiddleTextDesc,
  OrangeTriangle,
  OrangeCircle,
} from './done.styles';

const textBlocks = [
  '11 Computer',
  '15 qm Teppich',
  '60 kg Spielzeuge',
  '50 kg Kleidung für Kinder',
  '15 kg Kleidung für',
  'Erwachsene',
  '3 Laufräder',
  '4 Fitnessgeräte',
  '2 Stereoanlage',
  '2 Gitarren',
  '1 Keyboard',
  '1 Tischfußballspiel',
];

const OrangeBanner = () => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 13; i++) {
      dots.push(<WhiteDot key={i} />);
    }
    return dots;
  };

  const renderTextBlocks = () =>
    textBlocks.map((block) => <TextBlock key={block}>{block}</TextBlock>);

  return (
    <OrangeBannerWrapper>
      <WhiteDotsContainer>{renderDots()}</WhiteDotsContainer>
      {renderTextBlocks()}
    </OrangeBannerWrapper>
  );
};

export const Done = () => (
  <PageWrapper>
    <PageFullContainer noBorder>
      <Title>Done</Title>
    </PageFullContainer>
    <BannerWrapper>
      <PageFullContainer noBorder>
        <BannerTitle>
          Wir freuen uns mitzuteilen, dass einige Projekte bereits fertig sind!{' '}
        </BannerTitle>
        <BannerText>Hier finden Sie unseren kleinen Bericht dazu:</BannerText>
      </PageFullContainer>
    </BannerWrapper>
    <PageFullContainer noBorder>
      <TextDesc>
        Da die finanziellen Kapazitäten sehr gering sind, gab es zuvor keine
        feste Räumlichkeit für die psychologische Behandlung und für weniger
        mobile Kinder auch kein Spielzimmer. Deshalb wurde als erste Baumaßnahme
        entschieden, ein Kinderzimmer einzurichten. Das Kinderzimmer wurde
        komplett saniert und der Psychologin übergeben.
      </TextDesc>
      <OrangeTriangle>
        <img src={OrangeTriangleImg} alt='orange_triangle' />
      </OrangeTriangle>
      <TextDescMedium>
        Bei der Sommerreise 2016 wurden die ersten Baumaßnahmen begonnen.
      </TextDescMedium>
      <TextDesc>
        Ein Teil des dazu benötigten Equipments kam mit einem vollbeladenen Bus
        aus Freiburg bis nach Satoka. Der Bus hatte Folgendes geladen:
      </TextDesc>
      <OrangeBanner></OrangeBanner>
      <BoldFullText>
        Bei der Busreise von Juni 2016 wurden nicht nur Sachgüter mitgebracht
        und übergeben, sondern auch mit Reparaturarbeiten begonnen. Nach dieser
        Reise wurden folgende Arbeiten ausgeführt:
      </BoldFullText>
      <StagesWrapper>
        <StageContainer>
          <StageTitle>Computerraum</StageTitle>
          <StageText>Komplett neue Tapezierung</StageText>
          <StageText>8 Doppeltische mit 16 Stühlen gekauft</StageText>
          <StageText>Lehrerschrank gekauft</StageText>
          <StageText>
            Eingangstüren mit neuen Schlössern gekauft und eingebaut
          </StageText>
          <StageText>Laminat gekauft und verlegt</StageText>
        </StageContainer>
        <StageContainer>
          <StageTitle>Kinderzimmer</StageTitle>
          <StageText>
            Dachkonstruktion repariert und 40 qm der Bedachung komplett erneuert
          </StageText>
          <StageText>Deckenneuumgestaltung mit LED Beleuchtung</StageText>
          <StageText>Zwei moderne Kunstofffenster eingebaut</StageText>
          <StageText>Komplette Tapezierung</StageText>
          <StageText>Teppich verlegt</StageText>
        </StageContainer>
        <OrangeCircle />
      </StagesWrapper>
      <Header>Projekt: Computerraum</Header>
      <FirstTextDesc>
        Im 21. Jahrhundert ist eine EDV basierte Bildung unablässig. In der
        gesamten Einrichtung war ein solcher Bildungsraum nicht vorhanden. Uns
        wurde ein 60 qm Zimmer zugeteilt, dass wir sanieren und zum
        funktionierenden Computerraum umgestalten konnten.
      </FirstTextDesc>
      <MiddleTextDesc end>
        Die EDV Ausstattung der Mitarbeiter vor Ort war sehr veraltet, weshalb
        die gespendeten Computer nicht nur im Computerraum verwendet wurden,
        sondern für die Ärzte, Lehrer, Hausmeister und Buchhaltung zur Verfügung
        verstellt wurden, die verständlicherweise auch eine moderne Ausrüstung
        für ihre Tätigkeiten benötigen.
      </MiddleTextDesc>
      <TextDesc>
        Im Jahr 2018 wurde ein Beamer beschafft, damit die Kinder mithilfe der
        Informatiklehrerin die Onlinewelt und die Benutzung der Officeprogramme
        erlernen können.
      </TextDesc>
    </PageFullContainer>
  </PageWrapper>
);
