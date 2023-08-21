'use client';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UsersProps {}

const StyledUsers = styled.div`
  color: pink;
`;

export function Users(props: UsersProps) {
  return (
    <StyledUsers>
      <h1>Welcome to Users!</h1>
    </StyledUsers>
  );
}

export default Users;
