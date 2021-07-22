import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

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
} from './contacts.styles';

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
          <OptionText>+49 175 30017300</OptionText>
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
        <OptionContainer>
          <OptionContainerSecond>
            <OptionTitleSecond>Telefon:</OptionTitleSecond>
            <OptionText>+49 160 168 88 99</OptionText>
          </OptionContainerSecond>
          <OptionContainer>
            <OptionTitleSecond>Institut:</OptionTitleSecond>
            <OptionText>Sparkasse Nürnberg</OptionText>
          </OptionContainer>
        </OptionContainer>
        <OptionContainer>
          <OptionContainerSecond>
            <OptionTitleSecond>Email:</OptionTitleSecond>
            <OptionText>satoka.kinderhilfe@gmail.com</OptionText>
          </OptionContainerSecond>
          <OptionContainer>
            <OptionTitleSecond>IBAN:</OptionTitleSecond>
            <OptionText>DE00 0000 0000 0000 0011 15</OptionText>
          </OptionContainer>
        </OptionContainer>
        <OptionContainer>
          <OptionContainerSecond>
            <OptionTitleSecond>Instagram:</OptionTitleSecond>
            <OptionText>@satokaorg</OptionText>
          </OptionContainerSecond>
          <OptionContainer>
            <OptionTitleSecond>BIC:</OptionTitleSecond>
            <OptionText>COLSDE33</OptionText>
          </OptionContainer>
        </OptionContainer>
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
