import styled from 'styled-components';
import colors from 'infra/resources/colors';

export const PageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray200};
  min-height: 100vh;
  height: 100%;
`;

export const TransparentHeader = styled.div`
  color: ${colors.transparent};
  height: 80px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 16px;
`;
