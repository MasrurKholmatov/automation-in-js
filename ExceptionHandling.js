function multipleExeption() {
    try {
        console.log(a);
        let a = 3;
    } catch (error) {
        if (error.name == "ReferenceError") {
            console.log("Let must be declared");
        }
    }
}

try {
    multipleExeption();
    let infinityVar = 1 / 0;
    if (infinityVar) {
        throw new Error("Cannot be divided by zero");
    }
} catch (error) {
    console.log(error.message);
}