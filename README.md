# CSS Length

> Represents a CSS length value and handles the conversion between the original
> unit and other calculable units.

You can use this library to convert most CSS length measurements into most other
CSS length measurements. The only exceptions are viewport lengths.

## Usage

```js
new CSSLength(length[, base])
```

Pass a CSS length and an optional pixel base into the constructor.

```js
const cssLength = new CSSLength('24px', 16);
```

You can then access the conversion as a property.

```js
cssLength.em; // => "1.5em"
cssLength.rem; // => "1.5rem"
cssLength.in; // => "0.25in"
// ...
```

## Properties

Once you've created a new `CSSLength`, the following properties are available:

### raw

The raw CSS length that was passed into the constructor.

### value

The unitless value of the length that was passed into the constructor.

### unit

The unit of the length that was passed into the constructor.

### base

The base for the length that was passed into the constructor. If the length is a
relative unit or a pixel length, the base will be used. A fixed base will be
used for absolute lengths.

**Default:** 16

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
