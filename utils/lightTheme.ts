import { css } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const wordBase = css`
  font-family: monospace;
  display: inline-block;
  padding: 4px;
`;

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    wordSuccess: css`
      ${wordBase}
      color: blue;
    `,
    wordFailure: css`
      ${wordBase}
      color: red;
    `,
    wordCurrent: css`
      ${wordBase}
      background-color: lightgreen;
      border-radius: 4px;
    `,
    wordNone: css`
      ${wordBase}
    `,
  },
});

export default lightTheme;
