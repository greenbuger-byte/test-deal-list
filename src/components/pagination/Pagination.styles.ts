import styled from "styled-components";

import * as colors from "@deal/theme/colors";
import * as typo from "@deal/theme/typography";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

export const PaginationItem = styled.div<{active?: boolean}>`
  background-color: ${props => props.active ? colors.gray : colors.white};
  color: ${colors.textSecondary};
  width: 3rem;
  height: 3rem;
  ${typo.TITLE_R};
  margin: 0 .2rem;
  display: flex;
  border: .1rem solid ${colors.gray2};
  align-items: center;
  justify-content: center;
  border-radius: ${colors.border};
  cursor: pointer;
`;

export const PaginationInfo = styled.div`
  ${typo.TEXT_R};
  margin: 0 1rem;
  color: ${colors.textSecondary};
`;