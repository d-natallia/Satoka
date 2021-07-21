import React from 'react';

import SpendenImg from '../../assets/images/spenden.png';

import { Title, Header } from '../../components/Text';
import { PageWrapper } from '../../containers/PageWrapper';
import { PageFullContainer } from '../../containers/PageContainer';

import {
  MainImageWrapper,
  TextTitle,
  MainText,
  OptionsWrapper,
  OptionContainer,
  OptionTitle,
  OptionText,
} from './donation.styles';

const OPTIONS = [
  {
    title: 'Sich informieren',
    text: 'Informieren Sie sich gerne auf unserer Webseite oder fragen Sie per Mail unsere Spendenbeding-ungen an.',
  },
  {
    title: 'Projekt wählen',
    text: 'Nun können Sie sich selbst entscheiden, welches Hilfsprojekt Sie mit Ihrer Spende unterstützen möchten.',
  },
  {
    title: 'Spenden',
    text: 'Unsere Bankdaten finden Sie immer am Ende der Seite. Oder schreiben Sie einfach eine E-Mail!',
  },
  {
    title: 'Dank bekommen',
    text: 'Die Spendenbe-scheinigung und ein symbolisches Dankbarkeits-geschenk kommt zu Ihnen per Post.',
  },
];

export const Donation = () => (
  <PageWrapper>
    <PageFullContainer noBorder style={{ marginBottom: 0 }}>
      <Title>spenden</Title>
    </PageFullContainer>
    <MainImageWrapper>
      <img src={SpendenImg} alt='spenden-main' />
    </MainImageWrapper>
    <PageFullContainer noBorder>
      <TextTitle>Träume verwirklichen</TextTitle>
      <MainText>
        Wir nehmen gerne Spenden an und verwirklichen damit Träume und
        ermöglichen neue Aussichten. Bei nicht definierten Spenden wird das Geld
        prozentual in Vereinsausgaben einfließen. Aus diesem Grunde sollten die
        Spendenbeiträge bei konkreten Wünschen genau zum aktuellen Projekten
        zugeordnet sein. So können Sie sich zielgenau am Projekt beteiligen und
        bekommen dazu neben der Spendenbescheinigung ein Zertifikat und Berichte
        über die Verwendung Ihrer Gelder.
      </MainText>
      <OptionsWrapper>
        {OPTIONS.map(({ title, text }) => (
          <OptionContainer>
            <OptionTitle>{title}</OptionTitle>
            <OptionText>{text}</OptionText>
          </OptionContainer>
        ))}
      </OptionsWrapper>
    </PageFullContainer>
  </PageWrapper>
);
