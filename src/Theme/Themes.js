const theme_1 = {
  colors: {
    backgrounds:{
      mainBackground: "hsl(222, 26%, 31%)",
      toggleBackground: "hsl(223, 31%, 20%)",
      keypadBackground: "hsl(223, 31%, 20%)",
      screenBackground: "hsl(224, 36%, 15%)",
      resetAndDeleteKeyBackground: "hsl(225, 21%, 49%)",
      equalKeyBackground: "hsl(6, 63%, 50%)",
      keyBackground: "hsl(30, 25%, 89%)",
    },
    foregrounds:{
      toggleForeground: "hsl(6, 63%, 50%)",
      resetAndDeleteKeyForeground: "hsl(221, 14%, 31%)",
      equalKeyForeground: "hsl(221, 14%, 31%)",
      keyForeground: "hsl(221, 14%, 31%)",
    },
    shadows:{
      resetAndDeleteKeyShadow: "hsl(224, 28%, 35%)",
      equalKeyShadow: "hsl(6, 70%, 34%)",
      keyShadow: "hsl(28, 16%, 65%)",
    },
    text: "hsl(0, 100%, 100%)",
  },
  font: {
    fontFamily: "Spartan",
    buttonsFontSize: "32px",
  },
  borderRadius: "0.5rem",
  borderRadiusToogle: "100%",
  boxShadowSize: "0 0.5rem 1rem",
}

const theme_2 = {
  colors: {
    backgrounds:{
      mainBackground: "hsl(0, 0%, 90%)",
      toggleBackground: " hsl(0, 5%, 81%)",
      keypadBackground: " hsl(0, 5%, 81%)",
      screenBackground: " hsl(0, 0%, 93%)",
      resetAndDeleteKeyBackground: "hsl(185, 42%, 37%)",
      equalKeyBackground: "hsl(25, 98%, 40%)",
      keyBackground: "hsl(30, 25%, 89%)",
    },
    foregrounds: {
      toggleForeground: "hsl(25, 98%, 40%)",
      resetAndDeleteKeyForeground: "hsl(221, 14%, 31%)",
      equalKeyForeground: "hsl(221, 14%, 31%)",
      keyForeground: "hsl(221, 14%, 31%)",

    },
    shadows: {
      resetAndDeleteKeyShadow: "hsl(185, 58%, 25%)",
      equalKeyShadow: "hsl(25, 99%, 27%)",
      keyShadow: "hsl(28, 16%, 65%)",

    },
    text: "hsl(221, 14%, 31%)",
  },
  font: {
    fontFamily: "Spartan",
    buttonsFontSize: "32px",
  },
  borderRadius: "0.5rem",
  borderRadiusToogle: "100%",
  boxShadowSize: "0 0.5rem 1rem",
}

const theme_3 = {
  colors: {
    backgrounds:{
      mainBackground: "hsl(268, 75%, 9%)",
      toggleBackground: "hsl(268, 71%, 12%)",
      keypadBackground: " hsl(268, 71%, 12%)",
      screenBackground: "hsl(268, 71%, 12%) ",
      resetAndDeleteKeyBackground: "hsl(281, 89%, 26%)",
      equalKeyBackground: " hsl(176, 100%, 44%)",
      keyBackground: "hsl(268, 47%, 21%)",
    },
    foregrounds:{
      toggleForeground: "hsl(25, 98%, 40%)",
      resetAndDeleteKeyForeground: "hsl(0, 0%, 100%)",
      equalKeyForeground: "hsl(0,100,100%)",
      keyForeground: "hsl(52, 100%, 62%)",
    },
    shadows:{
      resetAndDeleteKeyShadow: "hsl(285, 91%, 52%)",
      equalKeyShadow: " hsl(177, 92%, 70%)",
      keyShadow: "hsl(290, 70%, 36%)",
    },
    text: "hsl(52, 100%, 62%)",
  },
  font: {
    fontFamily: "Spartan",
    buttonFontSize: "2rem",
    buttonFontWeight: "bold",
    logoFontSize: "2rem",
    logoFontWeight: "bold",
  },
  borderRadius: "0.5rem",
  borderRadiusToogle: "100%",
  boxShadowSize: "0 0.5rem 1rem",
}

const themes = {
  THEME_1: theme_1,
  THEME_2: theme_2,
  THEME_3: theme_3,
};

export default themes;