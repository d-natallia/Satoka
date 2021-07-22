import ArrowDownGif from '../../assets/images/arrow.gif';

import { PageWrapper } from '../../containers/PageWrapper';
import {
  PageContainer,
  PageInnerContainer,
} from '../../containers/PageContainer';

import {
  MainWrapper,
  MainTitle,
  MainDescText,
  MainDescTextBold,
  MainCircleOrange,
  AboutTitle,
  AboutQuestionsContainer,
  AboutQuestion,
  AboutQuestionTitle,
  AboutQuestionText,
  AboutDescriptionContainer,
  AboutDescription,
  AboutFigures,
  AboutFigureCircle,
  AboutFigureArrow,
} from './home.styles';

const ABOUT_QUESTIONS = [
  {
    title: 'Wer sind wir?',
    text: 'Die Satoka Kinderhilfe e.V. besteht aus einigen Enthusiasten, die gezielte Hilfe und Unterstützung für ein Sanatorium in der Ukraine leisten.',
  },
  {
    title: 'Was ist Satoka?',
    text: 'Die Satoka Kinderhilfe e.V. ist eine Heilanstalt, die nach der Annexion der Krim leider die einzige im ganzen Land ist, die Knochen- und Lungenleiden heilen kann und zudem am Meer liegt. Die Kinder und Jugendlichen verbringen dort zwischen einem und sechs Monaten und können zudem vorort am Schulunterricht teilnehmen.',
  },
];

export const Home = () => (
  <PageWrapper>
    <MainWrapper>
      <MainTitle>Satoka</MainTitle>
      <MainTitle>Kinderhilfe e.v.</MainTitle>
    </MainWrapper>
    <PageContainer>
      <PageInnerContainer>
        <MainDescText>
          Obwohl es in Mitteleuropa viele soziale Baustellen gibt, sollen vor
          allem die Kinder trotzdem nicht die Möglichkeit verlieren, eine
          angemessene Bildung und eine glückliche Kindheit zu bekommen.{' '}
        </MainDescText>
        <MainDescTextBold>
          Wir glauben an die Kraft der Zusammen­arbeit - daran, dass
          Unterstützung, Herausforderungen und Wachstum keine leeren Worte sind.
          Wir bringen Menschen zusammen, die die Welt zum besseren Ort machen
          wollen. Zusammen sind wir stärker!
        </MainDescTextBold>
        <MainCircleOrange />
      </PageInnerContainer>
      <PageInnerContainer noBorder>
        <AboutTitle>About.</AboutTitle>
        <AboutQuestionsContainer>
          {ABOUT_QUESTIONS.map(({ title, text }, index) => (
            <AboutQuestion key={index}>
              <AboutQuestionTitle>{title}</AboutQuestionTitle>
              <AboutQuestionText>{text}</AboutQuestionText>
            </AboutQuestion>
          ))}
        </AboutQuestionsContainer>
        <AboutFigures>
          <AboutFigureCircle />
          <AboutFigureArrow>
            <img src={ArrowDownGif} alt='arrow-down' />
          </AboutFigureArrow>
        </AboutFigures>
        <AboutDescriptionContainer>
          <AboutDescription>
            Für das alles kann man gezielte Hilfe leisten und tätig werden, den
            benachteiligten Kindern Chancen zu ermöglichen, in der für sie so
            schweren Welt zu bestehen.
          </AboutDescription>
        </AboutDescriptionContainer>
      </PageInnerContainer>
    </PageContainer>
  </PageWrapper>
);
