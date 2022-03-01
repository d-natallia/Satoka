import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import FooterLogoImg from "../assets/images/footer_logo.png";
import BurgerImg from "../assets/images/burger.svg";

import { COLORS, SCREEN_QUERIES } from "../config";
import { Text } from "../components/Text";

export const Links = [
  { title: "Telefon", text: "+49 160 168 88 99" },
  { title: "E-Mail", text: "satokaorg@outlook.com" },
  { title: "Instagram", text: "@satokaorg" },
  { title: "Bank", text: "Volksbank Freiburg" },
  { title: "IBAN", text: "DE63 6809 0000 0038 4041 05" },
  { title: "BLZ", text: "68090000" },
];

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
  position: fixed;
  width: 700px;
  height: 123px;
  background-color: ${COLORS.orange};
  top: 0;
  left: 10px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  z-index: 101;
  cursor: pointer;

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

const Burger = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  cursor: pointer;
  left: 15px;
  top: 15px;
  z-index: 10000;

  & img {
    width: 100%;
    height: 100%;
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
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
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
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    margin-left: 50px;
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
    margin-bottom: 20px;
    width: 100%;
  }
`;

const FooterItemTitle = styled(Text)`
  font-family: "Gothic A1" sans-serif;
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
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
  }
`;

const FooterItemText = styled(Text)`
  font-family: "Gothic A1" sans-serif;
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
    font-size: 16px;
    line-height: 20px;
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
    display: none;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const OpenedNav = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: ${COLORS.orange};
  z-index: 100;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  ${SCREEN_QUERIES.large} {
    font-size: 100px;
    line-height: 112px;
  }
`;

const RoutesContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;

  ${SCREEN_QUERIES.small} {
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 50px;
  }
`;

const RoutesStage = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Route = styled(Text)`
  font-weight: bold;
  font-size: 144px;
  line-height: 156px;
  text-decoration: none;
  color: ${(p) => (p.active ? COLORS.white : COLORS.black)};
  cursor: pointer;

  &:hover {
    color: ${COLORS.white};
    transition: 0.2s all;
  }

  ${SCREEN_QUERIES.large} {
    font-size: 100px;
    line-height: 112px;
  }

  ${SCREEN_QUERIES.medium} {
    font-size: 80px;
    line-height: 82px;
    margin-bottom: 40px;
  }

  ${SCREEN_QUERIES.small} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
    margin-bottom: 20px;
  }
`;

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

const FIRST_LINKS_STAGE = [
  { name: "Ukraine", link: "/" },
  { name: "About", link: "/home" },
  { name: "Donate", link: "/donate" },
  { name: "Kontakt", link: "/contacts" },
];

const SECOND_LINKS_STAGE = [
  { name: "Zweck", link: "/motto" },
  { name: "Done", link: "/done" },
  { name: "Projekte", link: "/project" },
  { name: "Spenden", link: "/donation" },
];

export const PageWrapper = ({ children, noFooter = false }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const history = useHistory();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [openNav, setOpenNav] = useState(false);

  const onNav = () => {
    if (!openNav) {
      document.body.classList.add("stop-scrolling");
      setOpenNav(true);
    } else {
      document.body.classList.remove("stop-scrolling");
      setOpenNav(false);
    }
  };

  const onLinkClick = (link) => {
    document.body.classList.remove("stop-scrolling");
    history.push(link);
  };

  return (
    <Wrapper>
      {openNav && (
        <OpenedNav>
          <RoutesContainer>
            <RoutesStage
              style={windowDimensions > 750 ? { marginRight: 50 } : {}}
            >
              {FIRST_LINKS_STAGE.map(({ name, link }, index) => (
                <Route key={index} onClick={() => onLinkClick(link)}>
                  {name}
                </Route>
              ))}
            </RoutesStage>
            <RoutesStage>
              {SECOND_LINKS_STAGE.map(({ name, link }, index) => (
                <Route key={index} onClick={() => onLinkClick(link)}>
                  {name}
                </Route>
              ))}
            </RoutesStage>
          </RoutesContainer>
        </OpenedNav>
      )}
      <Divider />
      {windowDimensions > 750 ? (
        <Header onClick={onNav}>
          <Circle />
          <HeaderText>Satoka Kinderhilfe e.V.</HeaderText>
        </Header>
      ) : (
        <Burger onClick={onNav}>
          <img src={BurgerImg} alt="burger" />
        </Burger>
      )}
      {children}
      {!noFooter && (
        <FooterWrapper>
          <FooterLinksWrapper>
            {Links.map(({ title, text }) => (
              <FooterItemWrapper key={text}>
                <FooterItemTitle>{title}</FooterItemTitle>
                <FooterItemText>{text}</FooterItemText>
              </FooterItemWrapper>
            ))}
          </FooterLinksWrapper>
          <FooterLogo>
            <img src={FooterLogoImg} alt="footer-logo" />
          </FooterLogo>
        </FooterWrapper>
      )}
    </Wrapper>
  );
};
