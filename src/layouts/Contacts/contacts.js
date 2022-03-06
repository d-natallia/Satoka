import { chunk } from "lodash";
import { PageWrapper } from "../../containers/PageWrapper";
import { PageFullContainer } from "../../containers/PageContainer";
import { Links } from "../../containers/PageWrapper";

import {
  TitleHeader,
  Header,
  OptionsWrapper,
  OptionContainer,
  OptionContainerSecond,
  OptionsWrapperSecond,
  OptionTitle,
  OptionTitleSecond,
  OptionText,
  BottomTitle,
  CircleBlue,
} from "./contacts.styles";

export const Contacts = () => (
  <PageWrapper noFooter>
    <PageFullContainer
      wrapperStyle={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <TitleHeader>kontakt zu uns</TitleHeader>
      <Header>
        Sie haben eine Frage oder ein spezielles Anliegen? Wir freuen uns über
        Ihre Nachricht – per Email oder telefonisch.
      </Header>
      <OptionsWrapper>
        <OptionContainer>
          <OptionText>Satoka Kinderhilfe e.V</OptionText>
          <OptionText>Carl-Mez-Str. 75</OptionText>
          <OptionText>79114 Freiburg</OptionText>
          <OptionText>Deutschland</OptionText>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>Vereinsvertreter:</OptionTitle>
          <OptionText>Vadym Kaushansky</OptionText>
          <OptionText>+49 160 168 88 99</OptionText>
        </OptionContainer>
        <OptionContainer>
          <OptionText>Sanatorium “Satoka”</OptionText>
          <OptionText>Prymors'kaya, 3 </OptionText>
          <OptionText>67773 Satoka</OptionText>
          <OptionText>Ukraine</OptionText>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>Sanatoriumsleiter:</OptionTitle>
          <OptionText>Yan Shimshylashviley</OptionText>
          <OptionText>+380 33120261</OptionText>
        </OptionContainer>
      </OptionsWrapper>
    </PageFullContainer>
    <PageFullContainer
      wrapperStyle={{
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: -100,
      }}
    >
      <OptionsWrapperSecond>
        {chunk(Links, 2).map((item) => (
          <OptionContainer>
            <OptionContainerSecond>
              <OptionTitleSecond>{item[0].title}</OptionTitleSecond>
              <OptionText>{item[0].text}</OptionText>
            </OptionContainerSecond>
            <OptionContainer>
              <OptionTitleSecond>{item[1].title}</OptionTitleSecond>
              <OptionText>{item[1].text}</OptionText>
            </OptionContainer>
          </OptionContainer>
        ))}
      </OptionsWrapperSecond>
    </PageFullContainer>
    <PageFullContainer noBorder>
      <BottomTitle>
        Wir bedanken uns herzlich für Ihre Aufmerksamkeit!
      </BottomTitle>
      <CircleBlue />
    </PageFullContainer>
  </PageWrapper>
);
