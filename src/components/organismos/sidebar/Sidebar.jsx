import styled from "styled-components";
import {
  v,
  LinksArray,
  SecondarylinksArray,
  SidebarCard,
} from "../../../index";
import { NavLink } from "react-router-dom";
export function Sidebar({ state, setState }) {
  console.log(state);
  return (
    <Main isOpen={state}>
      <span className="Sidebarbutton" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />}
      </span>
      <Container isOpen={state} className={state ? "active" : ""}>
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} />
          </div>
          <h2>Cerdys</h2>
        </div>
        {LinksArray?.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {state && <span>{label}</span>}
            </NavLink>
          </div>
        ))}
        <Divider />
        {SecondarylinksArray?.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {state && <span>{label}</span>}
            </NavLink>
          </div>
        ))}
        <Divider />
        {state && <SidebarCard />}
      </Container>
    </Main>
  );
}

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorScroll};
    border-radius: 10px;
  }
  &.active {
    width: 220px;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)}
        rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate-reverse;
      }
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }
  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${({ theme }) => theme.bgAlpha};
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} - 2px) 0;
      color: ${({ theme }) => theme.text};
      height: 60px;
      .Linkicon {
        padding: ${() => v.smSpacing}
          ${() => {
            v.imagenfondo;
          }};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        color: ${({ theme }) => theme.bg5};
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${({ theme }) => theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
  }
`;

const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${() => {
      return v.lgSpacing;
    }}
    0;
`;
