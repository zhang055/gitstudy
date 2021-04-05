// const parseString=require('xml2js').parseString;
// const fs=require('fs')
// var xml = "<root>Hello xml2js!</root>"
// parseString(xml, function (err, result) {
//     console.dir(result);
// });
var fs = require('fs'),
    xml2js = require('xml2js');
const { stringify } = require('querystring');
var parser = new xml2js.Parser();
fs.readFile(__dirname + '/o194372114.out', function(err, data) {
    parser.parseString(data, function (err, result) {
        // console.dir(result);
        // console.dir(result.Workbook.Worksheet[0].Table[0].Row[1].Cell);
        var testindex=result.Workbook.Worksheet[0].Table[0].Row.findIndex((value)=>value.hasOwnProperty("Cell"))
        var arr=result.Workbook.Worksheet[0].Table[0].Row[testindex].Cell;
        console.log(testindex)
        for(var i=0;i<arr.length;i++){
            console.log(arr[i].Data)
            var str=arr[i].Data[0]["_"]?arr[i].Data[0]["_"]:"不存在"
            console.log(str)
        }
        console.log('Done');
    });
});