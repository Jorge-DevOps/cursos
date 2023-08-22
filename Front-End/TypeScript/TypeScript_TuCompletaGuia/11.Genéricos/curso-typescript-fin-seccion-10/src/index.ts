import { printObject, object, genericFunctionArrow } from "./generics/generics";

type client = {
    name:string,
    age:number,
    address:string
}

printObject(object(123.232).toFixed(2))
printObject(object("123.232").toString())

const cliente:client = {
    "name":"juan",
    "age":23,
    "address":"calle 123"
}

printObject(genericFunctionArrow<client>(cliente))


