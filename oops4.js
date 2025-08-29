class Shape{
    area(){
        console.log("Calculating");
    }
}
class circle extends Shape{
    area(){
        console.log("n*n2");
    }
}
const c=new circle()
c.area();