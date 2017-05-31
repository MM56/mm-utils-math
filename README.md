# mm-utils

List of maths utils used for our project 🙌 

-----

## Math
Generic maths utils.

Example of usage

```javascript
import { clamp } from 'mm-utils/maths';
const clampedVal = clamp(val, -1, 1);
```

### clamp
Clamp a value between two bounds
```javascript
function clamp(v, min, max);
```

### distance
Distance between two points
```javascript
function distance(x1, y1, x2, y2) 
```

### lerp
Linear interpolation between two values (lerping)
```javascript
function lerp(x, y, r)
```

### lightenDarkenColor
Lighten or darken a color
```javascript
function lightenDarkenColor(col, amt)
```

### map
Re-maps a number from one range to another
```javascript
function map(v, start1, stop1, start2, stop2) 
```

### modAbs
Loop on an index value
```javascript
function modAbs(index, length)
```

### normalize
Normalize a value between two bounds
```javascript
function normalize(min, max, x)
```

### parabola
Remap the 0..1 interval into 0..1 parabola, such that the corners are remaped to 0 and the center to 1
In other words, parabola(0) = parabola(1) = 0, and parabola(1/2) = 1
```javascript
function parabola(k, x)
```

### randomFloat
Generate a random float
```javascript
function randomFloat(minValue, maxValue, precision = 2)
```

### randomHexColor
Generate a random hexadecimal color
```javascript
function randomHexColor()
```

### randomInt
Generate a random integer
```javascript
function randomInt(min, max)
```

### smoothStep
Smooth a value
```javascript
function smoothStep(v, min, max) 
```