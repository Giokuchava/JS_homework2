function copyObjectData(source, target) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
}


const sourceObj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    position: "Developer"
};

const targetObj = {};

copyObjectData(sourceObj, targetObj);
console.log(targetObj);