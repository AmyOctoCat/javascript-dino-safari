import { withSwim, withFly, withArmor } from './mixins.js';

const base = { name: 'Mega', armorRating: 10 };
const megaDino = withFly(withArmor(withSwim(base)));

console.log(megaDino.swim());
console.log(megaDino.fly());
console.log(megaDino.bash());
console.log('Armor rating:', megaDino.armorRating);
