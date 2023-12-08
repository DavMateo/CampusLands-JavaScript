const persona = {
    name: "John Doe",
    age: 30,
    val: [1, 2],
    address: {
        street: "Main Street",
        city: "New York",
        state: "NY"
    }
}

const clonarPersona = Object.assign({}, persona);
console.log(clonarPersona);

console.log("");
const clonado2 = {...persona};
clonado2.val.push(3);
console.log(persona);

// console.log("");
// const o1 = {a: 1};
// const o2 = {b: 2};
// const o3 = {c: 3};
// const obj = Object.assign({}, o1, o2, o3);
// console.log(obj);

// console.log("");
// const ot = {...o1, ...o2, ...o3, ...{d: 4, e: 5}};
// console.log(ot);