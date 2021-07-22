import React from 'react';

import SpendenImg from '../../assets/images/spenden.png';
import SpendenChildren from '../../assets/images/spenden_children.png';
import ArrowDownImg from '../../assets/images/arrow_down.svg';

import { Title } from '../../components/Text';
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
  ArrowImage,
  EndingTitle,
  EndingText,
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

const ArrowImageComponent = (
  <ArrowImage>
    <img src={ArrowDownImg} alt='arrow-right' />
  </ArrowImage>
);

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
        {OPTIONS.map(({ title, text }, index) => (
          <OptionContainer>
            <OptionTitle>{title}</OptionTitle>
            <OptionText>{text}</OptionText>
            {index !== OPTIONS.length - 1 && ArrowImageComponent}
          </OptionContainer>
        ))}
      </OptionsWrapper>
    </PageFullContainer>
    <MainImageWrapper>
      <img src={SpendenChildren} alt='spenden-children' />
    </MainImageWrapper>
    <PageFullContainer noBorder>
      <EndingTitle>Nehmen wir Sachspenden an?</EndingTitle>
      <EndingText>
        Da es zuletzt vermehrt zu Missverständnissen kam, nehmen wir zurzeit
        keine Sachspenden an, bedanken uns aber sehr, für die großzügigen Gaben
        in der Vergangenheit!
      </EndingText>
    </PageFullContainer>
  </PageWrapper>
);
