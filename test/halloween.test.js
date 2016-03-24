const fs = require('fs');
const chai = require('chai');
const rtf = require('../index');
const Format = require('../src/format');
const Colors = require('../src/colors');

describe('halloween test', function () {

    it('create document', function () {

        const myDoc = new rtf();
        const format = new Format();

        format.color = Colors.ORANGE;
        myDoc.writeText("Happy Halloween", format);
        myDoc.addPage();
        myDoc.addLine();
        myDoc.addTab();
        myDoc.writeText("TrЁck or treat! \\");

        myDoc.createDocument(
            function (err, output) {
                console.log(output);
                fs.writeFile('./test/_halloween.rtf', output, function (err) {
                    if (err) return console.log(err);
                });
            }
        );
    });
});