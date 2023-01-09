function getOwnProp(obj) {
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
        }
    }
}

const person = {
    isStudent: true
}


const user = Object.create(person);
user.name = 'Kate';
user.age =  25;


getOwnProp(user);