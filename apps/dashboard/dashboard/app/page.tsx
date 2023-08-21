'use client';

import styled from 'styled-components';
import { Sidebar } from '@shared-ui';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useStyleRegistry } from 'styled-jsx';

const StyledPage = styled.div`
  .page {
    display: flex,
    height: 100vh
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Sidebar />
    </StyledPage>
  );
}
