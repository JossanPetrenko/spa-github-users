import styled from 'styled-components';
import colors from 'infra/resources/colors';
import {Button, Tag} from 'antd';

export const UserInfoWrapper = styled.div`
  display: flex;
  margin: 12px 0px;
`;

export const UserInfoLabel = styled.span`
  margin-right: 4px;
  color: ${colors.gray500};
  font-weight: 400;
`;

export const UserInfoValue = styled.span`
  color: ${colors.gray700};
  font-weight: 700;
  font-size: 16px;
`;

export const UserInfoRowValue = styled.div`
  padding: 6px 12px;
`;

export const UserInfoHeaderWrapper = styled.div`
  display: flex;
  flex: 2;
`;
export const UserInfoHeaderColumnLeft = styled.div`
  display: flex;
  padding: 24;
  flex-direction: column;
  text-align: center;
  flex: 0.3;
`;

export const UserInfoHeaderColumnRight = styled.div`
  display: flex;
  padding: 24;
  flex-direction: column;
  text-align: center;
  flex: 0.7;
`;

export const UserInfoName = styled.div`
  text-transform: capitalize;
  font-size: 22px;
  padding: 4px;
  font-weight: 600;
`;

export const UserInfoTagsWrapper = styled.div`
  text-align: center;
`;

export const UserInfoButtonsWrapper = styled.div`
  text-align: end;
`;

export const UserInfoButton = styled(Button)`
  margin-left: 16px;
`;

export const UserInfoTag = styled(Tag)`
  padding: 8px;
`;
