import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    fontFamily: {
      text: string;
      title: string;
    };

    colors: {
      mainDark: string;
      main: string;
      mainLight: string;
      mainLighter: string;
      secondaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryLighter: string;
      greyDark: string;
      grey: string;
      lightGray: string;
      white: string;
      error: string;
      alert: string;
      success: string;
      info: string;
    };
  }
}
