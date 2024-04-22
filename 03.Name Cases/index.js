"use strict";
// Task no 3
Object.defineProperty(exports, "__esModule", { value: true });
let person_name = "Daniyal Inam";
console.log("lowercase : ", person_name.toLowerCase());
console.log("uppercase : ", person_name.toUpperCase());
console.log("titlecase : ", person_name.replace(/\b\w/g, c => c.toUpperCase()));
