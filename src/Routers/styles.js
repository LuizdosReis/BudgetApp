import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  left: 0;
  padding-left: 0;

  .active #menu {
    left: 150px;
    width: 150px;
  }

  .active .menu-link {
    left: 150px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 2em;
  max-width: 800px;
  margin-bottom: 50px;
  line-height: 1.6em;
`;
