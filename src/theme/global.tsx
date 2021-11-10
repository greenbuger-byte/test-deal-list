import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${reset};
`;

export default GlobalStyle;