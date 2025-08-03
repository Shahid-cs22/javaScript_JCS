var data = 12345;
var sum = 0;
while (data > 0) {
    r = data % 10
    sum = sum + r
    data = parseInt(data / 10);
}
console.log("sum of range : " + sum);