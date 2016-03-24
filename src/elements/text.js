var Element = require('./element');

module.exports = TextElement = function (text, format) {

    var textUnicode = '';
    for (var i = 0, len = text.length; i < len; i++) {
        textUnicode += '\\u' + text.charCodeAt(i) + '?' ;
    }

    Element.apply(this, [format]);

    this.text = textUnicode;
};

TextElement.subclass(Element);

TextElement.prototype.getRTFCode = function (colorTable, fontTable, callback) {
    return callback(null, this.format.formatText(this.text, colorTable, fontTable));
};