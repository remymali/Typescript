"use strict";
const add = (a, b, c) => {
    console.log(a + b);
};
add(5, 20);
let logDetails = (uid, item) => {
    console.log(`${item} with id ${uid} `);
};
logDetails('23', "Remy");
let greet = (user) => {
    console.log(`Hello from ${user.name} with an id: ${user.uid}`);
};
greet({ name: "Preetha", uid: "USR123" });
let cal;
cal = (first, second, action) => {
    if (action === "add")
        return first + second;
    else
        return 0;
};
