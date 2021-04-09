import styled from 'styled-components';
import colors from 'infra/resources/colors';

export const UserCardWrapper = styled.div`
  margin: 12px 0px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`;

export const UserCardContent = styled.div`
  display: flex;
`;

export const UserCardInfoWrapper = styled.div`
  display: flex;
  flex: 3;
  margin-left: 16px;
`;

export const UserCardCollumWrapper = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
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
`;

export const UserCardButtonDivider = styled.div`
  margin-top: 1px;
  margin-bottom: 1px;
  border-bottom: 1px solid ${colors.gray200};
`;
