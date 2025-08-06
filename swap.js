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
