import React from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { colors, GU } from "components/theme";
import { media } from "components/breakpoints";

import useAuth from "hooks/useAuth";

import { SandwichMenu } from "components/SandwichMenu";

export default function Navigation({ setSidebar }) {
  const { user } = useAuth();
  const [background, setBackground] = React.useState(false);
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

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        setBackground(false);
      } else {
        setBackground(true);
      }
    });
  }, []);

  return (
    <StyledHeader background={background}>
      <div
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <StyledLogo
          onClick={() => router.push("/")}
          src="/AccipiterWhite.png"
          alt="Coratives Logo"
        />
        <StyledLogoMobile
          background={background}
          onClick={() => router.push("/")}
          src="/AccipiterWhite.png"
          alt="Coratives Logo"
        />
        <StyledLoginContainer>
          <Link href={user ? "/portal" : "/login"}>
            {router.pathname === "/portal" || router.pathname === "/login" ? (
              <StyledLoginActive>{user ? "Portal" : "Login"}</StyledLoginActive>
            ) : (
              <StyledLogin>{user ? "Portal" : "Login"}</StyledLogin>
            )}
          </Link>
        </StyledLoginContainer>
        <StyledMenuContainer>
          <SandwichMenu setSidebar={setSidebar} />
        </StyledMenuContainer>
        <StyledNav>
          <Link href="/">
            {router.pathname === "/" ? (
              <StyledNavButtonActive>Home</StyledNavButtonActive>
            ) : (
              <StyledNavButton>Home</StyledNavButton>
            )}
          </Link>
          <Link href="/our-edge">
            {router.pathname.includes("/our-edge") ? (
              <StyledNavButtonActive>Our Edge</StyledNavButtonActive>
            ) : (
              <StyledNavButton>Our Edge</StyledNavButton>
            )}
          </Link>
          <Link href="/products">
            {router.pathname.includes("/products") ? (
              <StyledNavButtonActive>Products</StyledNavButtonActive>
            ) : (
              <StyledNavButton>Products</StyledNavButton>
            )}
          </Link>
          <Link href="/tech-brief">
            {router.pathname.includes("/tech-brief") ? (
              <StyledNavButtonActive>Tech Brief</StyledNavButtonActive>
            ) : (
              <StyledNavButton>Tech Brief</StyledNavButton>
            )}
          </Link>
          <StyledNavGroup>
            <StyledNavGroupButton active={isInterestActive} type="button">
              Interest
              <StyledNavCaret active={isInterestActive} />
            </StyledNavGroupButton>
            <StyledNavDropdown>
              {interestLinks.map(({ href, label }) => (
                <Link href={href} key={href}>
                  {router.pathname.startsWith(href) ? (
                    <StyledDropdownItemActive>{label}</StyledDropdownItemActive>
                  ) : (
                    <StyledDropdownItem>{label}</StyledDropdownItem>
                  )}
                </Link>
              ))}
            </StyledNavDropdown>
          </StyledNavGroup>
        </StyledNav>
      </div>
    </StyledHeader>
  );
}

const StyledLoginContainer = styled.div`
  position: absolute;
  right: ${GU * 10}px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledLogo = styled.img`
  cursor: pointer;
  display: none;
  height: ${GU * 10}px;
  left: ${GU * 10}px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${GU * 24}px;

  ${media.md`
    display: block;
  `}
`;

interface IStyledLogoMobile {
  background: boolean;
}

const StyledLogoMobile = styled.img<IStyledLogoMobile>`
  height: ${GU * 10}px;
  left: -45%;
  opacity: 1;
  position: absolute;
  top: ${GU * 6}px;
  transition: opacity 0.3s ease;
  width: ${GU * 24}px;

  ${(props) =>
    props.background &&
    css`
      opacity: 0;
    `}

  ${media.sm`
    display: none;
  `}
`;

const StyledMenuContainer = styled.div`
  right: ${GU * 4}px;
  position: fixed;
  top: ${GU * 4}px;
  z-index: 103;

  ${media.xs`
    right: ${GU * 5}px;
    top: ${GU * 5}px;
  `}

  ${media.md`
    display: none;
  `}
`;

interface IStyledHeader {
  background: boolean;
}

const StyledHeader = styled.header<IStyledHeader>`
  box-sizing: border-box;
  height: ${GU * 20}px;
  left: 50%;
  position: fixed;
  top: 0;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 100;

  ${media.md`
    background: rgba(30, 30, 30, 1);
    transform: translateX(-50%);
  `}

  ${(props) =>
    props.background &&
    css`
      ${media.md`
      background: rgba(30, 30, 30, 1);
    `}
    `}
`;

const StyledNav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: none;
  gap: ${GU * 2}px;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${media.md`
    display: flex;
  `}
`;

const StyledNavButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.white};
  font-size: 1.6rem;
  height: 100%;
  outline: none;
  padding: 0 ${GU * 3}px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  z-index: 102;

  &:hover {
    color: ${colors.blue};
    cursor: pointer;
  }
`;

const StyledNavButtonActive = styled.button`
  background: transparent;
  border: none;
  color: ${colors.blue};
  font-size: 1.6rem;
  height: 100%;
  outline: none;
  padding: 0 ${GU * 3}px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  z-index: 102;

  &:hover {
    cursor: pointer;
  }
`;

const StyledNavGroup = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;

  &:hover > button,
  &:focus-within > button {
    color: ${colors.blue};
  }

  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, 0);
  }
`;

interface IStyledNavGroupButton {
  active: boolean;
}

const StyledNavGroupButton = styled.button<IStyledNavGroupButton>`
  align-items: center;
  background: transparent;
  border: none;
  color: ${(props) => (props.active ? colors.blue : colors.white)};
  display: flex;
  font-size: 1.6rem;
  gap: ${GU * 1.5}px;
  height: 100%;
  outline: none;
  padding: 0 ${GU * 3}px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  z-index: 102;

  &:hover {
    cursor: pointer;
  }
`;

interface IStyledNavCaret {
  active: boolean;
}

const StyledNavCaret = styled.span<IStyledNavCaret>`
  border-bottom: 1.5px solid
    ${(props) => (props.active ? colors.blue : "currentColor")};
  border-right: 1.5px solid
    ${(props) => (props.active ? colors.blue : "currentColor")};
  display: inline-block;
  flex-shrink: 0;
  height: 6px;
  margin-top: -1px;
  opacity: 0.95;
  transform: rotate(45deg);
  transition: border-color 0.3s ease, transform 0.3s ease;
  width: 6px;
`;

const StyledNavDropdown = styled.div`
  background: rgba(30, 30, 30, 0.98);
  border: 1px solid rgba(22, 180, 220, 0.2);
  border-radius: 16px;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
  display: flex;
  flex-direction: column;
  gap: ${GU * 1}px;
  left: 50%;
  min-width: ${GU * 46}px;
  opacity: 0;
  padding: ${GU * 2}px;
  pointer-events: none;
  position: absolute;
  top: calc(100% - ${GU * 1}px);
  transform: translate(-50%, ${GU * 2}px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 104;
`;

const StyledDropdownItem = styled.button`
  background: transparent;
  border: none;
  border-radius: 12px;
  color: ${colors.white};
  font-size: 1.4rem;
  outline: none;
  padding: ${GU * 3}px ${GU * 4}px;
  text-align: left;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: rgba(22, 180, 220, 0.12);
    color: ${colors.blue};
    cursor: pointer;
  }
`;

const StyledDropdownItemActive = styled(StyledDropdownItem)`
  background: rgba(22, 180, 220, 0.14);
  color: ${colors.blue};
`;

const StyledLogin = styled.button`
  background: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 1.8rem;
  height: ${GU * 10}px;
  margin-left: ${GU * 10}px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: ${GU * 30}px;
  z-index: 102;

  &:hover {
    border: 2px solid ${colors.blue};
    color: ${colors.blue};
    cursor: pointer;
  }
`;

const StyledLoginActive = styled.button`
  background: ${colors.blue};
  border: 2px solid ${colors.blue};
  color: ${colors.black};
  font-size: 1.8rem;
  height: ${GU * 10}px;
  margin-left: ${GU * 10}px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: ${GU * 30}px;
  z-index: 102;

  &:hover {
    cursor: pointer;
  }
`;
