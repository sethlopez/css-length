function percentToPx(value, base) { return value / 100 * base; }
function pxToPercent(value, base) { return value / base * 100; }

function absoluteToPx(value, base) { return value / base; }
function pxToAbsolute(value, base) { return value * base; }

function relativeToPx(value, base) { return value * base; }
function pxToRelative(value, base) { return value / base; }

// map units to the appropriate conversion functions for easier calling
const conversions = {
  cm: { from: absoluteToPx, to: pxToAbsolute },
  em: { from: relativeToPx, to: pxToRelative },
  in: { from: absoluteToPx, to: pxToAbsolute },
  mm: { from: absoluteToPx, to: pxToAbsolute },
  pc: { from: absoluteToPx, to: pxToAbsolute },
  pct: { from: percentToPx, to: pxToPercent },
  pt: { from: absoluteToPx, to: pxToAbsolute },
  px: { from: absoluteToPx, to: pxToAbsolute },
  rem: { from: relativeToPx, to: pxToRelative }
};
const absoluteBases = {
  cm: 2.54 / 96,
  in: 1 / 96,
  mm: 25.4 / 96,
  pc: 6 / 96,
  pt: 72 / 96
};
const absoluteUnits = Object.keys(absoluteBases);
const relativeBase = 16;

/**
 * @class CSSLength
 *
 * Represents a CSS length value and handles the conversion between the original
 * unit and other calculable units.
 */
export default class CSSLength {
  constructor(raw, base) {
    const [, value, unit] = /^([-\+0-9\.]+)(cm|em|in|mm|pc|%|pt|px|rem)$/i.match(raw);

    this.$raw = raw;
    this.$value = +value;
    this.$unit = unit;
    this.$base = null;

    // set the base according to the unit
    if (absoluteUnits.indexOf(this.$unit)) {
      this.$base = absoluteBases[this.$unit];
    } else {
      this.$base = +base || relativeBase;
    }
  }

  get raw() { return this.$raw; }
  get value() { return this.$value; }
  get unit() { return this.$unit; }
  get base() { return this.$base; }

  get cm() { return this.convert('cm'); }
  get em() { return this.convert('em'); }
  get in() { return this.convert('in'); }
  get mm() { return this.convert('mm'); }
  get pc() { return this.convert('pc'); }
  get pct() { return this.convert('%'); }
  get pt() { return this.convert('pt'); }
  get px() { return this.convert('px'); }
  get rem() { return this.convert('rem'); }

  /**
   * Converts the CSS length to a given unit.
   *
   * @param    {String}  toUnit  The destination unit for the original value.
   * @returns  {String}          The converted unit.
   */
  convert(toUnit) {
    const toBase = absoluteUnits.indexOf(toUnit) ? absoluteBases[toUnit] : this.$base;
    let normalized;
    let converted;

    // cancel early if the units are the same - no need for conversion
    if (this.$unit === toUnit) { return this.$raw; }

    try {
      normalized = conversions[this.$unit].from(this.$value, this.$base);
      converted = conversions[toUnit].to(normalized, toBase);
    } catch(error) {
      throw new Error(
        `An error occurred while attempting to convert from "${this.$value}${fromUnit}" to "${toUnit}":
        ${error.message}`
      );
    }

    return converted;
  }
}
