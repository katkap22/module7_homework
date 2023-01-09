class ElectricalAppliances {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.on = false;
    }
                                 
    plugsIn() {
        console.log(`${this.name} plugged in`);
        this.on = true;
    }
                                 
    unplug() {
        console.log(`${this.name} unplugged`);
    }
                                 
    getPower() {
       console.log(`Power consumption of ${this.name} is ${this.power} kW`);
    }
} 
                                                                    
class Heating extends ElectricalAppliances {
    constructor(name, power, heatingMethod) {
        super(name, power);
        this.species = 'heating';
        this.heatingMethod = heatingMethod;
    }

    describ() {
        console.log(`My name is ${this.name}. I heat with ${this.heatingMethod} and I consume ${this.power} kW`);
    }
}
                                 
class Lighting extends ElectricalAppliances {
    constructor(name, power, colorfulTemp,) {
        super(name, power)
        this.species = 'lighting';
        this.colorfulTemp = colorfulTemp;
    } 

    describ() {
        console.log(`My name is ${this.name}. I illuminate with ${this.colorfulTemp} light and consume ${this.power} kW`);
    }
}                                 
                                                                              
const heater1 = new Heating('oil heater', 3, 'oil');
const heater2 = new Heating('infrared heater', 1.5, 'infrared rays');
const lighter1 = new Lighting('ceiling lamp', 1, 'white cold');
const lighter2 = new Lighting('table lamp', 0.5, 'warm yellow');

lighter2.plugsIn();
heater2.plugsIn();
                                 
                                 
function getSumPower(array) {
   let sumPower = 0;
   for (let element of array) {
      if (element.on) {
        sumPower +=element.power;
      }                
   }
   return `Суммарная потребляемая мощность всех включенных приборов ${sumPower} кВт. `;
}

console.log(getSumPower([heater1, heater2, lighter1, lighter2]));
console.log(heater1);
console.log(heater2);
console.log(lighter1);
console.log(lighter2);                              