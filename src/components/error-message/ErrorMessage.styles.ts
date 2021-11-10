import styled from "styled-components";
import * as colors from "@deal/theme/colors";
import {shadow} from "@deal/theme/variables";
import {LABEL_R} from "@deal/theme/typography";

export const ErrorMessageWrapper = styled.div`
  background-color: ${colors.alert};
  color: ${colors.white};
  position: fixed;
  border-radius: ${colors.border};
  box-shadow: ${shadow};
  ${LABEL_R};
  width: 24rem;
  left: calc(50vw - 12rem);
  padding: 1rem;
  text-align: center;
  margin: auto;
  bottom: 2rem;
`;