function normalFunction() {
    console.log(this); //blog input
};

const arrowFunction = () => {
    console.log(this); // particular name
}