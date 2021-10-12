/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export function themeTypography(theme) {
  return {
    fontFamily: 'inter, sans-serif',
    title3: {
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
      fontSize: '0.875rem',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#9e9e9e',
    },
  };
}
