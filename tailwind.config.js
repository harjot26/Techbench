/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,ts}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "360px",
        md: "400px",
        lg: "430px",
      },
      colors: {
        primary: "#6D28D9",
        iconColor: "#0052B4",
        inputBorderColor: "#E1E1E1",
        buttonColor: "#8D57E1",
        borderColor: "#E8E8E8",

        White: {
          customWhite: "#FFFFFF",
          lightWhite: "#F6F8FA",
          semiWhite: "#EEEEEE",
        },

        Black: {
          customBlack: "#000000",
          secondaryBlack: "#1A1C1E",
          semiBlack: "#161616",
          thirdBlack: "#121A2C",
          fourthBlack: "#242424",
        },

        Grey: {
          customGrey: "#9EA1A8",
          lightGrey: "#545454",
          secondaryGrey: "#ACB5BB",
          thirdGrey: "#4B4B4C",
          forthGrey: "#7B7B7B",
          fifthGrey: "#979797",
        },

        Purple: {
          customPurple: "#7737DA",
        },
        pieChartColors: {
          lightVoilet: "#F0E9FB",
          semiVoilet: "#E2D4F7",
          semiPink: "#C5A9F0",
          voilet: "#9969E4",
          purple: "#6D28D9",
        },
      },
      fontFamily: {
        poppinsThin: ["Poppins_100Thin"],
        poppinsThinItalic: ["Poppins_100Thin_Italic"],
        poppinsExtraLight: ["Poppins_200ExtraLight"],
        poppinsExtraLightItalic: ["Poppins_200ExtraLight_Italic"],
        poppinsLight: ["Poppins_300Light"],
        poppinsLightItalic: ["Poppins_300Light_Italic"],
        poppinsRegular: ["Poppins_400Regular"],
        poppinsRegularItalic: ["Poppins_400Regular_Italic"],
        poppinsMedium: ["Poppins_500Medium"],
        poppinsMediumItalic: ["Poppins_500Medium_Italic"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        poppinsSemiBoldItalic: ["Poppins_600SemiBold_Italic"],
        poppinsBold: ["Poppins_700Bold"],
        poppinsBoldItalic: ["Poppins_700Bold_Italic"],
        poppinsExtraBold: ["Poppins_800ExtraBold"],
        poppinsExtraBoldItalic: ["Poppins_800ExtraBold_Italic"],
        poppinsBlack: ["Poppins_900Black"],
        poppinsBlackItalic: ["Poppins_900Black_Italic"],
        satoshi: ["Satoshi Variable"],
      },
    },
  },
  plugins: [],
};
