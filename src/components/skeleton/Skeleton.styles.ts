import styled from "styled-components";
import * as colors from "@deal/theme/colors";

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  border-radius: ${colors.border};
  background-color: ${colors.gray2};
  margin: .5rem 0;
  height: 6.2rem;
`;