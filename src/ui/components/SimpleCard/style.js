import styled from 'styled-components';
import {Card} from 'antd';

import colors from 'infra/resources/colors';

export const SimpleCardWrapper = styled(Card)`
  margin: 12px 0px;
  box-shadow: 0 8px 16px 0 ${colors.card_shadow};
  width: 100%;
`;
