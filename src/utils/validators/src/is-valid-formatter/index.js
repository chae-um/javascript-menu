/**
 * @param {string} input
 * @returns {boolean}
 */
export default function isValidFormatter(input) {
  const koreanOnly = /^[가-힣]*$/;

  return koreanOnly.test(input);
}
