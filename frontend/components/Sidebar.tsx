import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";
import { media } from "components/breakpoints";
import { GU } from "components/theme";

// Components
import { colors } from "./theme";
import { Flex } from "./Containers";
import { P2 } from "./Typography";

const Sidebar = ({ sidebar, setSidebar }): JSX.Element => {
  const router = useRouter();
  const interestLinks = [
    {
      href: "/careers",
      label: "Careers",
    },
    {
      href: "/investors",
      label: "Investors",
    },
  ];
  const isInterestActive = interestLinks.some(({ href }) =>
    router.pathname.startsWith(href),
  );
  const [interestOpen, setInterestOpen] = React.useState(isInterestActive);

  React.useEffect(() => {
    if (sidebar) {
      setInterestOpen(isInterestActive);
    }
  }, [isInterestActive, sidebar]);

  return (
    <StyledSidebarContainer open={sidebar}>
      <SidebarTop>
        <Flex
          style={{ height: "100%" }}
          align={"center"}
          justify={"space-around"}
        >
          <Link href="/">
            <StyledLogo
              onClick={() => setSidebar(false)}
              src="/AccipiterLogo.png"
              alt="Coratives Logo"
            />
          </Link>
          <StyledCloseContainer onClick={() => setSidebar(false)}>
            <p style={{ padding: 0, margin: 0 }}>&times;</p>
          </StyledCloseContainer>
        </Flex>
      </SidebarTop>
      <Link href="/our-edge">
        <StyledSidebarOption
          onClick={() => setSidebar(false)}
          active={router.pathname.includes("/our-edge") ? true : false}
        >
          <Flex
            justify={"flex-start"}
            align={"center"}
            style={{ height: "100%" }}
          >
            <P2 style={{ marginLeft: "2rem" }} color={colors.black}>
              Our Edge
            </P2>
          </Flex>
        </StyledSidebarOption>
      </Link>
      <Link href="/products">
        <StyledSidebarOption
          onClick={() => setSidebar(false)}
          active={router.pathname.includes("/products") ? true : false}
        >
          <Flex
            justify={"flex-start"}
            align={"center"}
            style={{ height: "100%" }}
          >
            <P2 style={{ marginLeft: "2rem" }} color={colors.black}>
              Products
            </P2>
          </Flex>
        </StyledSidebarOption>
      </Link>
      <Link href="/tech-brief">
        <StyledSidebarOption
          onClick={() => setSidebar(false)}
          active={router.pathname.includes("/tech-brief") ? true : false}
        >
          <Flex
            justify={"flex-start"}
            align={"center"}
            style={{ height: "100%" }}
          >
            <P2 style={{ marginLeft: "2rem" }} color={colors.black}>
              Tech Brief
            </P2>
          </Flex>
        </StyledSidebarOption>
      </Link>
      <StyledSidebarAccordionOption
        active={isInterestActive || interestOpen}
        aria-expanded={interestOpen}
        onClick={() => setInterestOpen((currentOpen) => !currentOpen)}
        type="button"
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          style={{ height: "100%", width: "100%" }}
        >
          <P2 style={{ marginLeft: "2rem" }} color={colors.black}>
            Interest
          </P2>
          <StyledAccordionIcon open={interestOpen} />
        </Flex>
      </StyledSidebarAccordionOption>
      <StyledSidebarSubmenu open={interestOpen}>
        {interestLinks.map(({ href, label }) => (
          <Link href={href} key={href}>
            <StyledSidebarSubOption
              onClick={() => setSidebar(false)}
              active={router.pathname.startsWith(href)}
            >
              <Flex
                justify={"flex-start"}
                align={"center"}
                style={{ height: "100%" }}
              >
                <P2 style={{ marginLeft: "4rem" }} color={colors.black}>
                  {label}
                </P2>
              </Flex>
            </StyledSidebarSubOption>
          </Link>
        ))}
      </StyledSidebarSubmenu>
      <Link href="/login">
        <StyledSidebarOption
          onClick={() => setSidebar(false)}
          active={router.pathname === "/login" ? true : false}
        >
          <Flex
            justify={"flex-start"}
            align={"center"}
            style={{ height: "100%" }}
          >
            <P2 style={{ marginLeft: "2rem" }} color={colors.black}>
              Login
            </P2>
          </Flex>
        </StyledSidebarOption>
      </Link>
    </StyledSidebarContainer>
  );
};

export default Sidebar;

interface IStyledSidebarContainer {
  open: boolean;
}

const StyledSidebarContainer = styled.div<IStyledSidebarContainer>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${GU * 63}px;
  height: 100%;
  background: ${colors.white};
  z-index: 1000;
  transform: translateX(30rem);
  transition: all 0.5s ease;

  ${media.md`
    width: ${GU * 75}px;
  `}

  ${media.lg`
    display: none;
  `}

	${(props) =>
    props.open &&
    css`
      transform: translateX(0);
      box-shadow: none;
    `}
`;

const SidebarTop = styled.div`
  height: ${GU * 20}px;
  width: 100%;
  border-bottom: solid 1px rgba(117, 117, 117, 0.2);

  ${media.xl`
    height: ${GU * 25}px;
  `}
`;

const StyledCloseContainer = styled.div`
  width: ${GU * 12}px;
  height: ${GU * 12}px;
  background: ${colors.white};
  border: 2px solid ${colors.grey};
  border-radius: 50%;
  position: relative;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    line-height: 0;
    color: ${colors.grey};
    font-size: 4rem;
    font-weight: 200;

    ${media.sm`
      top: 38%;
    `}

    ${media.md`
      top: 35%;
    `}
  }

  ${media.xs`
    width: ${GU * 12}px;
    height: ${GU * 12}px;
  `}

  ${media.md`
    p {
      font-size: 6rem;
      margin-bottom: ${GU * 3}px;
    }
  `}

  &:hover,
  &:focus,
  &:active {
    background: ${colors.grey};
    cursor: pointer;

    p {
      color: ${colors.white};
    }
  }
`;

interface IStyledSidebarOption {
  active: boolean;
}

const StyledSidebarOption = styled.div<IStyledSidebarOption>`
  height: ${GU * 15}px;
  border-bottom: solid 1px rgba(117, 117, 117, 0.2);
  border-right: 5px solid transparent;
  transition: all 0.3s ease;

  ${media.md`
    height: ${GU * 18}px;
  `}
  ${media.xl`
    height: ${GU * 19}px;
  `}
  
  &:hover {
    cursor: pointer;
    background: #efefef;
  }
  ${(props) =>
    props.active &&
    css`
      border-right: 5px solid ${colors.blue};
      background: #efefef;
    `}
`;

const StyledSidebarAccordionOption = styled.button<IStyledSidebarOption>`
  background: ${colors.white};
  border: none;
  border-bottom: solid 1px rgba(117, 117, 117, 0.2);
  border-right: 5px solid transparent;
  height: ${GU * 15}px;
  padding: 0;
  transition: all 0.3s ease;
  width: 100%;

  ${media.md`
    height: ${GU * 18}px;
  `}

  ${media.xl`
    height: ${GU * 19}px;
  `}

  &:hover {
    background: #efefef;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      border-right: 5px solid ${colors.blue};
      background: #efefef;
    `}
`;

interface IStyledSidebarSubmenu {
  open: boolean;
}

const StyledSidebarSubmenu = styled.div<IStyledSidebarSubmenu>`
  background: #fafafa;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  ${(props) =>
    props.open &&
    css`
      max-height: ${GU * 36}px;
    `}
`;

const StyledSidebarSubOption = styled.div<IStyledSidebarOption>`
  background: transparent;
  border-bottom: solid 1px rgba(117, 117, 117, 0.14);
  border-right: 5px solid transparent;
  height: ${GU * 12}px;
  transition: all 0.3s ease;

  ${media.md`
    height: ${GU * 14}px;
  `}

  &:hover {
    background: #f2f2f2;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      border-right: 5px solid ${colors.blue};
      background: #f2f2f2;
    `}
`;

interface IStyledAccordionIcon {
  open: boolean;
}

const StyledAccordionIcon = styled.span<IStyledAccordionIcon>`
  border-bottom: 1.5px solid ${colors.grey};
  border-right: 1.5px solid ${colors.grey};
  display: inline-block;
  height: 7px;
  line-height: 1;
  margin-right: ${GU * 5}px;
  transform: rotate(${(props) => (props.open ? -135 : 45)}deg);
  transition: transform 0.3s ease, border-color 0.3s ease;
  width: 7px;
`;

const StyledLogo = styled.img`
  height: ${GU * 8}px;
  width: ${GU * 21}px;

  &:hover {
    cursor: pointer;
  }
`;
