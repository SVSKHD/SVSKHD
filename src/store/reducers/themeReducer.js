
const colorSchema = {
  light: {
    bg: "#35374B", // Provided dark background color
    text: "#FFFFFF", // Example light text color
  },
  dark: {
    bg: "#35374B", // Provided dark background color
    text: "#FFFFFF", // Example dark text color
  },
};

const initialState = {
theme: 'light', // Default theme is light
colors: colorSchema.light, // Default color schema should be for light theme
};

const themeReducer = (state = initialState, action) => {
switch (action.type) {
  case 'TOGGLE_THEME':
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    return {
      ...state,
      theme: newTheme,
      colors: colorSchema[newTheme],
    };
  default:
    return state;
}
};

export default themeReducer;
