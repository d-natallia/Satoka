import BlackTriangleImg from '../../assets/images/triangle_blank.svg';

import { Title } from '../../components/Text';

import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import {
  TitleDescription,
  TitleBlockedText,
  BlankCircle,
  OrangeCircle,
  CircleBlue,
  BlankTriangle,
  BlankCircleBlock,
  Description,
  ReasonsTitle,
  ReasonsWrapper,
  ReasonContainer,
  ReasonContainerRow,
  ReasonContainerIndex,
  ReasonContainerTitle,
  ReasonContainerText,
  ReasonCircle,
  LinkTitle,
} from './motto.styles';

const REASONS = [
  {
    title: 'Kinder',
    text: 'Die Kinder sind unsere Zukunft. Wie sollen wir langfristige Pläne für unsere Gesellschaft schmieden, wenn unsere Kinder schon jetzt vernachlässingt werden?',
  },
  {
    title: 'Geschichte',
    text: 'Satoka ist eine traditionsreiche Stadt, die im Jahr 1827 auf Befehl vom Friedrich Wilhelm  III gebaut wurde. Früher war es ein Kurort für die Behandlung der königlichen Familie und entwickelte sich viele Jahre später in eine altruistische Vision.',
  },
  {
    title: 'Architektur',
    text: 'Die Architektur ist einzigartig und kaum ein anderes Sanatorium ist mit Satoka vergleichbar. Die Gebäude haben eigenartigen Charm und es ist wichtig, dieses Erbe zu bewahren.',
  },
  {
    title: 'Lebensniveau',
    text: 'In Deutschland haben die Menschen mehr Möglichkeiten, ein gutes Leben zu führen. In der Ukraine hat ein Großteil der Bevölkerung Schwierigkeiten, sich selber zu helfen, geschweige denn fremden Kindern. ',
  },
];

export const Motto = () => (
  <PageWrapper>
    <PageFullContainer noSmallPadding noBorder>
      <BlankCircle />
      <Title>Unser Motto:</Title>
      <TitleDescription>ein sicheres Zuhause zusammen bauen!</TitleDescription>
      <CircleBlue />
      <OrangeCircle />
      <TitleBlockedText>
        <p>
          Kindern ein sicheres Zuhause zu geben - das ist unsere Aufgabe. Der
          Satoka Kinderhilfe e.V. ist eine Organisation, die es sich zur Aufgabe
          macht, sozialschwachen erkrankten ukrainischen Kindern ein sicheres
          Zuhause zu bieten. Als ein sowohl politisch, als auch konfessionell
          unabhängiges Sozialwerk haben wir die Möglichkeit, die Welt ein
          bisschen besser zu machen.{' '}
        </p>
        <BlankTriangle>
          <img src={BlackTriangleImg} alt='triangle' />
        </BlankTriangle>
        <BlankCircleBlock />
      </TitleBlockedText>
    </PageFullContainer>
    <PageFullContainer topBorder smallBorder>
      <Description>
        Da diese Heilanstalt sehr renovierungsbedürftig ist, wurde von den
        Vereinsmitgliedern einheitlich entschieden, die wichtigsten
        Renovierungs- und Sanierungsarbeiten vorzunehmen. Zudem versuchen die
        Vereinsmitglieder bei ihren Besuchen, möglichst vielen notbedürftigen
        Kindern wärmende Saisonbekleidung und Geschenke mitzubringen.
      </Description>
    </PageFullContainer>
    <PageFullContainer noBorder wrapperStyle={{ paddingTop: 0 }}>
      <ReasonsTitle>Gründe, warum wir helfen können und müssen!</ReasonsTitle>
      <ReasonsWrapper>
        {REASONS.map(({ title, text }, index) => (
          <ReasonContainer>
            <ReasonContainerRow>
              <ReasonContainerIndex>{index + 1}.</ReasonContainerIndex>
              <ReasonContainerTitle>{title}</ReasonContainerTitle>
            </ReasonContainerRow>
            <ReasonContainerRow>
              <ReasonContainerText>{text}</ReasonContainerText>
            </ReasonContainerRow>
          </ReasonContainer>
        ))}
        <ReasonCircle />
      </ReasonsWrapper>
    </PageFullContainer>
    {/* <PageFullContainer noBorder wrapperStyle={{ paddingTop: 0 }}>
      <LinkTitle>3 Projekte, bei denen ihr mitmachen könnt!</LinkTitle>
    </PageFullContainer> */}
  </PageWrapper>
);
