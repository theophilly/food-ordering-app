/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export function themeTypography(theme) {
  return {
    fontFamily: 'Inter, sans-serif',
    title1: {
      lineHeight: '40px',
      fontSize: '1.8rem',
      fontWeight: 'bold',
    },
    title2: {
      lineHeight: '40px',
      fontSize: '2.2rem',
      fontWeight: 'bold',
    },
    title1: {
      lineHeight: '50px',
      fontSize: '2.625rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontWeight: 'bold',
      fontSize: '1rem',
    },
  };
}
