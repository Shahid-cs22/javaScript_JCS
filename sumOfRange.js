/*

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()

String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()


*/

var data = 12345;
var sum = 0;
while (data > 0) {
    r = data % 10
    sum = sum + r
    data = parseInt(data / 10);
}
console.log("sum of range : " + sum);