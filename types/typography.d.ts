import { SerializedStyles } from "@emotion/react";
import type { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import type {
  TypographyVariants,
  TypographyVariantsOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    wordFailure: SerializedStyles;
    wordSuccess: SerializedStyles;
    wordCurrent: SerializedStyles;
    wordNone: SerializedStyles;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    wordFailure?: SerializedStyles;
    wordSuccess?: SerializedStyles;
    wordCurrent?: SerializedStyles;
    wordNone?: SerializedStyles;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    wordFailure: true;
    wordSuccess: true;
    wordCurrent: true;
    wordNone: true;
  }
}
