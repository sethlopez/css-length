# CSS Length

Creates a JavaScript representation of a CSS length value, allowing the user to
get the unit or unitless value and convert the length from one unit to another.
**Viewport lengths are unsupported.**

## Usage

```js
// Basic usage. Assumes a base pixel size of 16.
let length = new CSSLength('24px');

// You may pass an options object containing the base pixel size
// to use for conversions or the formatter to use for output.
let length = new CSSLength('24px', {
  base: 16,
  formatter(value, unit) { return value + unit; }
});

// You can then access the conversion as a property.
length.cm;  // => "0.635cm"
length.em;  // => "1.5em"
length.in;  // => "0.25in"
length.mm;  // => "6.35mm"
length.pc;  // => "1.5pc"
length.pct; // => "150%"
length.pt;  // => "18pt"
length.px;  // => "24px"
length.rem; // => "1.5rem"
```

## Properties

Once you've created a new `CSSLength`, the following properties are available:

### $config

The options used for conversion and formatting.

```js
// defaults
{
  // if the length is an absolute length, this will be overridden
  base: 16,
  // formatting function for mutating the value before it's returned
  formatter(value, unit) { return value + unit; }
}
```

### raw

The raw CSS length string that was passed into the constructor. (`[24px]`)

### value

The unitless value of the length that was passed into the constructor. (`[24]px`)

### unit

The unit of the length that was passed into the constructor. (`24[px]`)

### cm

The length converted into centimeters.

### em

The length converted into ems. This conversion utilizes the given or default
base value.

### in

The length converted into inches.

### mm

The length converted into millimeters.

### pc

The length converted into picas.

### pct

The length converted into a percentage. This conversion utilizes the given or
default base value.

### pt

The length converted into points.

### px

The length converted into pixels. This conversion utilizes the given or default
base value.

### rem

The length converted into rems. This conversion utilizes the given or default
base value.

## License

The MIT License (MIT)

Copyright (c) 2015 Seth Lopez (http://sethlopez.me)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
