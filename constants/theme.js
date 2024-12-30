const COLORS = {
  primary: "#000000",  // Replaced "#4A5568" with black
  secondary: "#A0AEC0", // Replaced "#718096" with light gray
  tertiary: "#4A5568",  // Replaced "#E53E3E" with dark gray

  gray: "#CBD5E0",      // Retained as is
  gray2: "#E2E8F0",     // Replaced "#C1C0C8" with softer gray

  white: "#FFFFFF",     // Retained as pure white
  lightWhite: "#F7FAFC", // Retained as light white
};


const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
