/**
 * Generate a random hexadecimal color
 *
 * @return {string} Hexadecimal color
 */
export default function randomHexColor() {
	return '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
}
