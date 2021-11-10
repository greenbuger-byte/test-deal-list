import styled from "styled-components";

import * as colors from "@deal/theme/colors";
import * as typo from "@deal/theme/typography";
import { gridDeals, shadow } from "@deal/theme/variables";

export const DealsHeaderWrapper = styled.div`
  display: grid;
  position: sticky;
  top: 0;
  grid-template-columns: ${gridDeals};;
  border:.1rem solid ${colors.gray2};
  height: 5rem;
  background-color: ${colors.white};
  padding: 1rem;
  box-shadow: ${shadow};
  z-index: 999;
`;

export const DealsHeaderItem = styled.div`
  ${typo.TITLE_SMALL};
  font-size: calc(1rem + .1vw);;
  color: ${colors.textPrimary};
  border-left: .1rem solid ${colors.gray2};
  padding: 0 .3rem;
  margin: auto;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  :first-child{
    border-left: none;
  }
`;