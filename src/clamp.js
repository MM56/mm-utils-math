/**
 * Clamp a value between two bounds
 *
 * @param  {number} v   Value to clamp
 * @param  {number} min Minimum boundary
 * @param  {number} max Maximum boundary
 * @return {number}     Clamped value
 */
export default function clamp(v, min, max) {
	if (v < min) { 
		return min; 
	}
	if (v > max) { 
		return max; 
	}
	return v;
}
