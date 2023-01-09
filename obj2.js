const user = {
    age: 25,
    a: 'lsdkfjsldkfj',
    name: 'Kate',
    x: undefined,
    y: null
}

function CheckExistProp(str, obj) {
    return (str in obj);
}

console.log(CheckExistProp('a', user));
console.log(CheckExistProp('adfsdfs', user));
console.log(CheckExistProp('x', user));
console.log(CheckExistProp('y', user));
