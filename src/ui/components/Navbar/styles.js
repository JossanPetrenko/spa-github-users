import styled from "styled-components";
import { GithubOutlined } from "@ant-design/icons";

import colors from "infra/resources/colors";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.indigo900};
  padding: 8px 16px;
  position: fixed;
  width: 100%;
`;

export const NavbarTitle = styled.div`
  display: flex;
  color: ${colors.gray100};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: capitalize;
  padding-top: 4px;
`;

export const NavbarIcon = styled(GithubOutlined)`
  color: ${colors.gray100};
  font-size: 40px;
  margin-right: 12px;
`;

export const NavbarButtonsWarpper = styled.div`
  display: flex;
  color: ${colors.gray100};
  font-size: 20px;
  font-weight: 400;
  padding-right: 32px;
`;

export const ArrowRight = styled.div`
  border-top: 60px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 140vh solid ${colors.indigo700};
`;
