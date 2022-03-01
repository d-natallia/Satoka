import UkraineImg from "../../assets/images/warintheukraine.png";
import ArrowDown from "../../assets/images/arrow_down.svg";
import { PageWrapper } from "../../containers/PageWrapper";
import { PageFullContainer } from "../../containers/PageContainer";
import { Title, Header } from "../../components/Text";

import {
  LinkContainer,
  LinkTitle,
  LinkImage,
  ImageContainer,
  MainTextContainer,
  MainText,
  BlockContainer,
  BlockBlank,
  BlockFilled,
  ListContainer,
  ListItem,
  ListTitle,
  ListText,
  ReasonsWrapper,
  ReasonContainer,
  ReasonContainerRow,
  ReasonContainerIndex,
  ReasonContainerTitle,
  ReasonContainerText,
} from "./ukraine.styles";

const LIST = [
  {
    title: "Verwendungszwecke",
    text: [
      "Fahrkosten",
      "Unterkunft",
      "Hygieneartikel",
      "Medikamente",
      "Bekleidung",
    ],
  },
  {
    title: "Gesammelt",
    text: ["100 Euro", "20 Euro", "50 Euro", "100 Euro", "50 Euro"],
  },
];

const REASONS = [
  {
    title: "Sachspenden",
    text: "Wenn Sie mit Sachspenden helfen möchten, vermitteln wir hierfür Kontakte. Sie können sich dann mit den Menschen individuell in Kontakt setzen.",
  },
  {
    title: "Patenschaft",
    text: "Sie können auch eine Patenschaft für eine Familie übernehmen und deren Unterkunft mitfinanzieren oder die Fliehenden bei sich zu Hause unterbringen.",
  },
  {
    title: "Initiative zeigen",
    text: "Sie können selbstverständlich auch anderweitig helfen, z.B. Busse für den Transport der Familien zur Verfügung stellen oder Behördengänge erledigen. Jede Hilfe ist willkommen.",
  },
];

export const Ukraine = () => (
  <PageWrapper>
    <PageFullContainer noBorder style={{ marginBottom: 0 }}>
      <Title>Ukraine 2022</Title>
      <LinkContainer>
        <LinkTitle>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSel4CnUm8ut5CMEzDknbnMhJP5uMYAZnBlIrAUKq1OoWWy5HQ/viewform"
          >
            Заявка для беженцев
          </a>
        </LinkTitle>
        {/* <LinkImage>
          <img src={ArrowDown} alt="arrow" />
        </LinkImage> */}
      </LinkContainer>
    </PageFullContainer>
    <ImageContainer>
      <img src={UkraineImg} alt="warinukraine" />
    </ImageContainer>
    <PageFullContainer noBorder>
      <Header>
        Bitte helfen Sie mit Ihrer Spende den Menschen in der Ukraine!
      </Header>
      <MainTextContainer>
        <MainText>
          Liebe Mitmenschen,aufgrund der letzten kriegerischen
          Auseinandersetzungen in der Ukraine sind bekannterweise viele auf der
          Flucht, unter anderem kleine Kinder und ihre Mütter.
        </MainText>
        <MainText style={{ marginTop: 20 }}>
          Wir möchten Sie um Unterstützung bitten, die Bedürftigen hier in
          Deutschland empfangen zu können. Schon bald werden die staatlichen
          Unterkünfte überfüllt sein. Deshalb sind wir auf Ihre Unterstützung
          angewiesen.
        </MainText>
      </MainTextContainer>
      <BlockContainer>
        <BlockBlank>
          <p>Unsere Bankdaten:</p>
          <br />
          <p> Satoka Kinderhilfe e.V. DE63 6809 0000 0038 4041 05 68090000</p>
        </BlockBlank>
        <BlockFilled>
          <p>
            Wenn Sie helfen möchten, beachten Sie bitte folgende Hinweise, auf
            die unser Verein viel Wert legt:
          </p>
          <br />
          <p>
            Alle finanziellen Spenden müssen einem konkreten Zweck zugeordnet
            werden. Sie spenden z.B. 50 € für Trinkwasser, 30 € für
            Babyverpflegung oder 100 € für Transport der fliehenden Menschen.
          </p>
        </BlockFilled>
      </BlockContainer>
      <ListContainer>
        {LIST.map(({ title, text }) => (
          <ListItem>
            <ListTitle>{title}:</ListTitle>
            {text.map((text) => (
              <ListText>{text}</ListText>
            ))}
          </ListItem>
        ))}
      </ListContainer>
      <MainText>
        Alle bereits getätigten Spenden werden anonym online auf unserer
        Webseite aufgelistet. Als ein eingetragener Verein können wir Ihnen
        selbstverständlich auch offizielle Spendenbescheinigungen ausstellen.
      </MainText>
      <Header style={{ marginTop: 30 }}>Was kann ich noch helfen?</Header>
      <ReasonsWrapper>
        {REASONS.map(({ title, text }, index) => (
          <ReasonContainer key={index}>
            <ReasonContainerRow>
              <ReasonContainerIndex>{index + 1}.</ReasonContainerIndex>
              <ReasonContainerTitle>{title}</ReasonContainerTitle>
            </ReasonContainerRow>
            <ReasonContainerRow>
              <ReasonContainerText>{text}</ReasonContainerText>
            </ReasonContainerRow>
          </ReasonContainer>
        ))}
      </ReasonsWrapper>
    </PageFullContainer>
  </PageWrapper>
);
