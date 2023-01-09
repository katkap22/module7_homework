function ElectricalAppliances(name, power) {
   this.name = name;
   this.power = power;
   this.on = false;
}

ElectricalAppliances.prototype.plugsIn = function() {
   console.log(`${this.name} plugged in`);
   this.on = true;
}

ElectricalAppliances.prototype.unplug = function() {
   console.log(`${this.name} unplugged`);
}

ElectricalAppliances.prototype.getPower = function() {
   console.log(`Power consumption of ${this.name} is ${this.power} kW`);
}

function Heating(name, power, heatingMethod) {
   ElectricalAppliances.call(this, name, power);

   this.species = 'heating';
   this.heatingMethod = heatingMethod;
}

Heating.prototype = new ElectricalAppliances(); 
Heating.prototype.constructor = Heating;

Heating.prototype.describ = function() {
   console.log(`My name is ${this.name}. I heat with ${this.heatingMethod} and I consume ${this.power} kW`);
}

function Lighting(name, power, colorfulTemp) {
   ElectricalAppliances.call(this, name, power);
   this.species = 'lighting';
   this.colorfulTemp = colorfulTemp;
}
 
Lighting.prototype = new ElectricalAppliances();
Lighting.prototype.constructor = Lighting;

Lighting.prototype.describ = function() {
   console.log(`My name is ${this.name}. I illuminate with ${this.colorfulTemp} light and consume ${this.power} kW`);
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