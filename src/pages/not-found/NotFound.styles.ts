import styled from "styled-components";
import * as typo from "@deal/theme/typography";
import { textSecondary } from "@deal/theme/colors";

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${typo.TITLE_R};
  color: ${textSecondary};
  a {
    display: flex;
    text-decoration: none;
    margin: 1rem 0;
  }
`;