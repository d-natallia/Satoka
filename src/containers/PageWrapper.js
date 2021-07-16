import { useState, useEffect } from 'react';
import styled from 'styled-components';

import FooterLogoImg from '../assets/images/footer_logo.png';

import { COLORS, SCREEN_QUERIES } from '../config';
import { Text } from '../components/Text';

const Wrapper = styled.div`
  position: relative;
  padding-left: 9px;

  ${SCREEN_QUERIES.small} {
    padding-left: 0px;
  }
`;

const Divider = styled.div`
  width: 10px;
  background-color: ${COLORS.blue};
  position: fixed;
  height: 100%;
  left: 0;

  ${SCREEN_QUERIES.small} {
    display: none;
  }
`;

const Header = styled.div`
  position: absolute;
  width: 700px;
  height: 123px;
  background-color: ${COLORS.orange};
  top: 0;
  left: 10px;
  display: flex;
  align-items: center;
  padding-left: 18px;

  ${SCREEN_QUERIES.large} {
    width: 400px;
    height: 70px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 280px;
    height: 50px;
  }

  ${SCREEN_QUERIES.small} {
    display: none;
  }
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${COLORS.blue};
  margin-right: 23px;

  ${SCREEN_QUERIES.large} {
    width: 40px;
    height: 40px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 25px;
    height: 25px;
  }

  ${SCREEN_QUERIES.small} {
    display: none;
  }
`;

const HeaderText = styled(Text)`
  text-transform: uppercase;
  font-size: 39px;
  line-height: 47px;
  color: ${COLORS.white};

  ${SCREEN_QUERIES.large} {
    font-size: 25px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 15px;
  }

  ${SCREEN_QUERIES.small} {
    display: none;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 533px;
  background-color: ${COLORS.orange};
  display: flex;
  justify-content: center;
  align-items: center;

  ${SCREEN_QUERIES.large} {
    height: 400px;
  }

  ${SCREEN_QUERIES.medium} {
    height: 300px;
  }

  ${SCREEN_QUERIES.small} {
    height: 90px;
  }
`;

const FooterLinksWrapper = styled.div`
  width: 1300px;
  height: 227px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${SCREEN_QUERIES.large} {
    width: 850px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 500px;
    height: 150px;
  }

  ${SCREEN_QUERIES.small} {
    width: 300px;
    height: 60px;
  }
`;

const FooterItemWrapper = styled.div`
  margin-right: 200px;
  margin-bottom: 75px;

  ${SCREEN_QUERIES.large} {
    margin-right: 80px;
  }

  ${SCREEN_QUERIES.medium} {
    margin-right: 50px;
    margin-bottom: 20px;
  }

  ${SCREEN_QUERIES.small} {
    margin-right: 40px;
    margin-bottom: 5px;
    width: 100px;
  }
`;

const FooterItemTitle = styled(Text)`
  font-family: Gothic A1 sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  margin: 0;

  ${SCREEN_QUERIES.large} {
    font-size: 25px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 15px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 8px;
    line-height: 10px;
  }
`;

const FooterItemText = styled(Text)`
  font-family: Gothic A1 sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin: 0;

  ${SCREEN_QUERIES.large} {
    font-size: 15px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 12px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 7px;
    line-height: 9px;
  }
`;

const FooterLogo = styled.div`
  width: 328px;
  height: 223px;

  ${SCREEN_QUERIES.large} {
    width: 250px;
    height: 184px;
  }

  ${SCREEN_QUERIES.medium} {
    width: 180px;
    height: 120px;
  }

  ${SCREEN_QUERIES.small} {
    width: 60px;
    height: 40px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

const links = [
  { title: 'Telefon', text: '+49 160 168 88 99' },
  { title: 'E-Mail', text: 'satoka.kinderhilfe@gmail.com' },
  { title: 'Instagram', text: '@satokaorg' },
  { title: 'Institut', text: 'Sparkasse Nürnberg' },
  { title: 'IBAN', text: 'DE00 0000 0000 0000 0011 15' },
  { title: 'BIC', text: 'COLSDE33' },
];

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export const PageWrapper = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(windowDimensions);
  return (
    <Wrapper>
      <Divider />
      <Header>
        <Circle />
        <HeaderText>Satoka Kinderhilfe e.V.</HeaderText>
      </Header>
      {children}
      <FooterWrapper>
        <FooterLinksWrapper>
          {links.map(({ title, text }) => (
            <FooterItemWrapper key={text}>
              <FooterItemTitle>{title}</FooterItemTitle>
              <FooterItemText>{text}</FooterItemText>
            </FooterItemWrapper>
          ))}
        </FooterLinksWrapper>
        <FooterLogo>
          <img src={FooterLogoImg} alt='footer-logo' />
        </FooterLogo>
      </FooterWrapper>
    </Wrapper>
  );
};
