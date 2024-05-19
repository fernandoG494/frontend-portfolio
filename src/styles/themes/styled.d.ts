import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeType: string;
    backgrounds: {
      bg100: string;
      bg200: string;
      bg300: string;
    };
    primaries: {
      primary100: string;
      primary200: string;
      primary300: string;
    };
    accents: {
      accent100: string;
      accent200: string;
    };
    texts: {
      text100: string;
      text200: string;
    };
  }
}
