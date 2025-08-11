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

data =[12,103,45,75,946,32,68, 3,36,2];
x=data.length;
// console.log(x);
for(var i=0; i<=x; i++){
    for(var j=i+x; i<x;i++){
        if(data[i]<data[j]){
            var temp=data[i];
            data[i]=data[j];
            data[j]=temp;
        }
    }
    for(var k=0; k<x; k++){

        console.log(data[k]);
    }
    
}
