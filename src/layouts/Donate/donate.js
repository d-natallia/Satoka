import DonateSmallImg from '../../assets/images/donate_small.png';
import DonateBigImg from '../../assets/images/donate_big.png';

import { Title, Header } from '../../components/Text';
import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import {
  DonateText,
  DonateTextBold,
  FullDonateText,
  DonateMiddleContainer,
  DonateMiddleText,
  DonateTextBoldLarge,
  DonateTextBoldSmall,
  StagesWrapper,
  StageContainer,
  StageTitle,
  StageText,
  DonateBigImageWrapper,
  DonateTextDesc,
  DonateOptionText,
  MiddleDonateText,
} from './donate.styles';

export const Donate = () => (
  <PageWrapper>
    <PageFullContainer noBorder>
      <Title>hilfe gesucht</Title>
      <Header>Projekt: Wunschallee</Header>
      <FullDonateText marginTop={100}>
        Im Mai 2018 sind die Vereinsmitglieder Alexander Schleining und Vadym
        Kauschansky nach Satoka gereist, um sich dem Projekt “Wunschallee” zu
        widmen. Die Wunschallee befindet sich an der Stelle der ursprünglichen
        Lenin-Allee.
      </FullDonateText>
      <DonateMiddleContainer>
        <DonateMiddleText>
          <DonateText>
            Die alte Lenin-Allee ist jahrenlang nicht gepflegt worden. Die
            Statue zerbrach im Laufe der Zeit, daher musste für diese gesammte
            Fläche ein neuer Plan her.
          </DonateText>
          <DonateTextBold marginTop={32} marginBottom={32}>
            Die Idee ist, einen Rückzugsort für die Kinder und Jugendlichen zu
            erschaffen, wo sie sich von wichtigen Persönlichkeiten inspirieren
            lassen können. In dem 18 Meter langen Gang sollen dazu
            witterungsfeste Aushängetäfel aufstellen werden, um die persönlichen
            Werdegänge von großen Erfindern zu erfahren.
          </DonateTextBold>
          <DonateText>
            In der Mitte der Allee wird der Sockel der Statue von allen Seiten
            verschiedene positiv behaftete Symbole enthalten. Rund um den
            Mittelplatz sind Sitzmöglichkeiten für mindestens eine volle Klasse
            geplant, damit man in Gruppen Unterricht abhalten kann. An den
            Seiten wird ein Metallzaun stehen, an dem man Wünsche anbringen
            kann. Auch die erste Liebe kann man dort mit einem Schloss
            verewigen.
          </DonateText>
        </DonateMiddleText>
        <div>
          <img src={DonateSmallImg} alt='donate_img' />
        </div>
      </DonateMiddleContainer>
      <DonateTextBoldLarge>
        Die Bezeichnung “Wunschallee” leitet sich von den lebensleitenden
        Wünschen ab, die die großen Erfinder und Innovatoren, trotz harter
        Lebensumstände verfolgt und wahrgemacht haben.
      </DonateTextBoldLarge>
      <DonateTextBoldSmall>
        Das Projekt ist in drei Phasen geplant, von denen bisher (2021) die
        ersten zwei komplett abgeschlossen sind.
      </DonateTextBoldSmall>
      <StagesWrapper>
        <StageContainer>
          <StageTitle>Teil I Sanierung 2018</StageTitle>
          <StageText>Pflanzen beschneiden</StageText>
          <StageText>
            Allee aufräumen, die kaputten Kacheln entfernen.
          </StageText>
          <StageText>
            Sockel umgestalten, Lenin-Schriftzug sinnvoll verdecken, Symbole
            einfügen
          </StageText>
          <StageText>Wunschzaun aufstellen</StageText>
          <StageText>Bodenbelag kaufen und verlegen</StageText>
        </StageContainer>
        <StageContainer>
          <StageTitle>Teil II Sitzflächen 2019</StageTitle>
          <StageText>
            Beschaffung von Sitzbänken und deren Installation
          </StageText>
        </StageContainer>
      </StagesWrapper>
      <StageContainer>
        <StageTitle>Teil III 2020</StageTitle>
        <StageText>
          Beschaffung von sechs Schaukästen und deren Installation
        </StageText>
        <StageText>Installation von einem Kunstobjekt auf dem Sockel</StageText>
        <StageText>Beschaffung und Installation von Videoüberwachung</StageText>
      </StageContainer>
    </PageFullContainer>
    <DonateBigImageWrapper>
      <img src={DonateBigImg} alt='donate_img' />
    </DonateBigImageWrapper>
    <PageFullContainer noBorder>
      <Header>Projekt: Spielplatz</Header>
      <DonateTextDesc>Zusammen mit Obrist's Baby Rose AG.</DonateTextDesc>
      <DonateOptionText>
        Im Oktober 2018 war der Vereinsgründer Vadym Kauschansky, gemeinsam mit
        Herrn Thomy Obrist von der Obrist´s BabyRose AG vor Ort. Es wurden die
        abgeschlossenen Projekte inspiziert, neue Verbrauchsmittel und Bücher
        gekauft und mehrere Kinder mit neuen Kleidern, die vor Ort eingekauft
        wurden, ausgestattet.
      </DonateOptionText>
      <MiddleDonateText>
        Da der aktuelle Spielplatz sich in einem ruinösen Zustand befindet, hat
        Herr Obrist entschieden, eine Rutsche und einen Sandkasten an der Verein
        zu spenden. Die Rutsche und Sandkasten wurden vor Ort eingekauft und die
        Rutsche wurde noch am gleichen Tag verbaut und von den Kindern in
        Empfang genommen.
      </MiddleDonateText>
      <DonateOptionText>
        Außerdem spendete Herr Obrist ein weiteres Mal im Jahr 2019, um die
        zweite Phase der Wunschallee einleiten zu können. Der Spielplatz soll
        2022 endgültig umgestaltet werden, allerdings erst nach dem
        erfolgreichen Abschluss des Projektes Wunschallee.
      </DonateOptionText>
    </PageFullContainer>
  </PageWrapper>
);
