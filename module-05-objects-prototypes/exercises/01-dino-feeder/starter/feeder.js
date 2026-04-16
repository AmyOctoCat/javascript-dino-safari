/**
 * A feeding station for a park zone.
 * State is stored as properties; methods use `this` to access them.
 */
export const feeder = {
  name: 'Carnivore Canyon Feeder',
  supply: 0,
  feedings: [],
  stock(kg) {
    this.supply += kg
    return this.supply
  },
  feed(dinoName, kg) {
    if (kg > this.supply) throw new Error('Not enough food');
    this.supply -= kg;
    this.feedings.push({dino : dinoName,
      kg: kg
    })
    return `Fed ${dinoName} ${kg}kg`;
  },
  remaining() {
    return this.supply;
  },

  log() {
    return this.feedings;
  }



//   | `stock(kg)`          | Add `kg` of food to the hopper                                                                                                         | The new total (number)          |
// | `feed(dinoName, kg)` | Dispense `kg` of food. If supply is insufficient, throw `Error('Not enough food')`. Otherwise record the feeding and reduce the supply | `"Fed <dinoName> <kg>kg"`       |
// | `remaining()`        | How much food is left                                                                                                                  | Number of kg                    |
// | `log()`              | Every feeding recorded so far, oldest first                                                                                            | Array of `{ dino, kg }` objects |
//   // TODO: stock(kg) - add kg of food, return new total

//   // TODO: feed(dinoName, kg) - dispense food, throw if not enough, return "Fed <name> <kg>kg"

//   // TODO: remaining() - return kg left in the hopper

//   // TODO: log() - return array of { dino, kg } entries
};
