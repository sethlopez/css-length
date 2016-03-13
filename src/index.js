function pctToPx(value, base) { return value / 100 * base; }
function pxToPct(value, base) { return value / base * 100; }

function absToPx(value, base) { return value / base; }
function pxToAbs(value, base) { return value * base; }

function relToPx(value, base) { return value * base; }
function pxToRel(value, base) { return value / base; }

// map units to the appropriate conversion functions for easier calling
const conversions = {
  cm:  { from: absToPx, to: pxToAbs },
  em:  { from: relToPx, to: pxToRel },
  in:  { from: absToPx, to: pxToAbs },
  mm:  { from: absToPx, to: pxToAbs },
  pc:  { from: absToPx, to: pxToAbs },
  pct: { from: pctToPx, to: pxToPct },
  pt:  { from: absToPx, to: pxToAbs },
  px:  { from: absToPx, to: pxToAbs },
  rem: { from: relToPx, to: pxToRel }
};
const absBases = {
  cm: 2.54 / 96,
  in: 1 / 96,
  mm: 25.4 / 96,
  pc: 6 / 96,
  pt: 72 / 96
};
const absUnits = Object.keys(absBases);
const defaults = {
  base: 16,
  formatter(value, unit) {
    return value + unit;
  }
};

/**
 * @class CSSLength
 *
 * Represents a CSS length value and handles the conversion between the original
 * unit and other calculable units.
 */
module.exports = class CSSLength {
  constructor(raw, options = {}) {
    const [, value, unit] = raw.match(/^([+-]?[0-9\.]+)(cm|em|in|mm|pc|%|pt|px|rem)$/);

    this.$config = Object.assign({}, defaults, options);
    this.raw = raw;
    this.unit = unit;
    this.value = +value;

    // override the base if the length is an absolute unit
    if (absUnits.indexOf(this.unit) > -1) {
      this.$config.base = absBases[this.unit];
    }
  }

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
   * @param    {String}  unit  The destination unit for the original value.
   * @returns  {String}        The converted unit.
   */
  convert(unit) {
    const fromUnit = this.unit === '%' ? 'pct' : this.unit;
    const toUnit = unit === '%' ? 'pct' : unit;
    const fromBase = this.$config.base;
    let toBase = this.$config.base;
    let normalized, converted, formatted;

    // cancel early if the units are the same - no need for conversion
    if (this.unit === unit) {
      return this.$config.formatter(this.value, this.unit);
    }

    // override the base if unit is an absolute unit
    if (absUnits.indexOf(unit) > -1) {
      toBase = absBases[unit];
    }

    try {
      // shortcut if the pixel value is already known
      if (this.unit === 'px') {
        normalized = this.value;
      } else {
        normalized = conversions[fromUnit].from(this.value, fromBase);
      }

      // shortcut if the pixel value is already known
      if (unit === 'px') {
        converted = normalized;
      } else {
        converted = conversions[toUnit].to(normalized, toBase);
      }

      formatted = this.$config.formatter(converted, unit);
    } catch(error) {
      throw new Error(
        `An error occurred while attempting to convert from "${this.value + this.unit}" to "${unit}":
        ${error.message}`
      );
    }

    return formatted;
  }
}
