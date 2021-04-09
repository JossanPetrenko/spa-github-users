import styled from 'styled-components';
import colors from 'infra/resources/colors';

export const UserCardWrapper = styled.div`
  margin: 12px 0px;
`;

export const UserCardContent = styled.div`
  display: flex;
`;

export const UserCardInfoWrapper = styled.div`
  display: flex;
  flex: 2;
  margin-left: 16px;
`;

export const UserCardCollumWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const UserCardLabel = styled.span`
  margin-right: 12px;
  color: ${colors.gray500};
  font-weight: 400;
`;

export const UserCardValue = styled.span`
  color: ${colors.gray700};
  font-weight: 700;
  text-transform: capitalize;
`;
