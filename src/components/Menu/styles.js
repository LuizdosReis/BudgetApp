import styled from 'styled-components';

export const Menu = styled.div`
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: #191818;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  a {
    color: #999;
    border: none;
    padding: 0.6em 0 0.6em 0.6em;
  }

  div{
    border: none;
    background: transparent;
  }

  .pure-menu a,
  .pure-menu .menu-item-divided {
    border-top: 1px solid #333;
  }

  .pure-menu-selected,
  .pure-menu-heading {
    background: #1f8dd6;
  }

  .pure-menu-selected a {
    color: #fff;
  }

  .pure-menu-link:hover,
  .pure-menu-link:focus {
    background: #1f8dd6;
  }

  .pure-menu-heading {
    font-size: 110%;
    color: #fff;
    margin: 0;
  }
}`;
