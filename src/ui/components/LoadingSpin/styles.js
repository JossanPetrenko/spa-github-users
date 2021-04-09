import styled from 'styled-components';
import {Spin} from 'antd';

export const Loading = styled(Spin)`
  display: flex;
  flex: 1;
  position: fixed;
  min-width: 100%;
  min-height: 70%;
  z-index: 3;
  align-items: center;
  justify-content: center;
`;
