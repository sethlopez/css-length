var test = require('tape');
var CSSLength = require('../dist/index');

test('pixel conversion test', function (t) {
	t.test('16px base / 16px value', function (st) {
		var length = new CSSLength('16px');

		st.plan(13);

		st.equal(length.$config.base,  16);
		st.equal(length.raw,           '16px');
		st.equal(length.unit,          'px');
		st.equal(length.value,         16);
		st.equal(length.cm,            '0.42333333333333334cm');
		st.equal(length.em,            '1em');
		st.equal(length.in,            '0.16666666666666666in');
		st.equal(length.mm,            '4.233333333333333mm');
		st.equal(length.pc,            '1pc');
		st.equal(length.pct,           '100%');
		st.equal(length.pt,            '12pt');
		st.equal(length.px,            '16px');
		st.equal(length.rem,           '1rem');
	});

	t.test('16px base / +16px value', function (st) {
		var length = new CSSLength('+16px');

		st.plan(13);

		st.equal(length.$config.base,  16);
		st.equal(length.raw,           '+16px');
		st.equal(length.unit,          'px');
		st.equal(length.value,         16);
		st.equal(length.cm,            '0.42333333333333334cm');
		st.equal(length.em,            '1em');
		st.equal(length.in,            '0.16666666666666666in');
		st.equal(length.mm,            '4.233333333333333mm');
		st.equal(length.pc,            '1pc');
		st.equal(length.pct,           '100%');
		st.equal(length.pt,            '12pt');
		st.equal(length.px,            '16px');
		st.equal(length.rem,           '1rem');
	});

	t.test('16px base / -16px value', function (st) {
		var length = new CSSLength('-16px');

		st.plan(13);

		st.equal(length.$config.base,  16);
		st.equal(length.raw,           '-16px');
		st.equal(length.unit,          'px');
		st.equal(length.value,         -16);
		st.equal(length.cm,            '-0.42333333333333334cm');
		st.equal(length.em,            '-1em');
		st.equal(length.in,            '-0.16666666666666666in');
		st.equal(length.mm,            '-4.233333333333333mm');
		st.equal(length.pc,            '-1pc');
		st.equal(length.pct,           '-100%');
		st.equal(length.pt,            '-12pt');
		st.equal(length.px,            '-16px');
		st.equal(length.rem,           '-1rem');
	});

	t.test('16px base / 16.0px value', function (st) {
		var length = new CSSLength('16.0px');

		st.plan(13);

		st.equal(length.$config.base,  16);
		st.equal(length.raw,           '16.0px');
		st.equal(length.unit,          'px');
		st.equal(length.value,         16);
		st.equal(length.cm,            '0.42333333333333334cm');
		st.equal(length.em,            '1em');
		st.equal(length.in,            '0.16666666666666666in');
		st.equal(length.mm,            '4.233333333333333mm');
		st.equal(length.pc,            '1pc');
		st.equal(length.pct,           '100%');
		st.equal(length.pt,            '12pt');
		st.equal(length.px,            '16px');
		st.equal(length.rem,           '1rem');
	});

	t.test('16px base / 24px value', function (st) {
		var length = new CSSLength('24px');

		st.plan(13);

		st.equal(length.$config.base,  16)
		st.equal(length.raw,           '24px');
		st.equal(length.unit,          'px');
		st.equal(length.value,         24);
		st.equal(length.cm,            '0.635cm');
		st.equal(length.em,            '1.5em');
		st.equal(length.in,            '0.25in');
		st.equal(length.mm,            '6.35mm');
		st.equal(length.pc,            '1.5pc');
		st.equal(length.pct,           '150%');
		st.equal(length.pt,            '18pt');
		st.equal(length.px,            '24px');
		st.equal(length.rem,           '1.5rem');
	});

	t.test('24px base / 24px value', function (st) {
		var length = new CSSLength('24px', { base: 24 });

		st.plan(13);

		st.equal(length.$config.base,  24);
		st.equal(length.raw,           '24px');
		st.equal(length.unit,          'px');
		st.equal(length.value,         24);
		st.equal(length.cm,            '0.635cm');
		st.equal(length.em,            '1em');
		st.equal(length.in,            '0.25in');
		st.equal(length.mm,            '6.35mm');
		st.equal(length.pc,            '1.5pc');
		st.equal(length.pct,           '100%');
		st.equal(length.pt,            '18pt');
		st.equal(length.px,            '24px');
		st.equal(length.rem,           '1rem');
	});
});
