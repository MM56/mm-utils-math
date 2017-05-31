/**
 * Loop on an index value
 *
 * @param  {number} index  Index
 * @param  {number} length Length
 * @return {number}        Looped index
 */
export default function modAbs(index, length) {
	if (index < 0) {
		index = length + index % length;
	}
	if (index >= length) {
		return index % length;
	}
	return index;
}