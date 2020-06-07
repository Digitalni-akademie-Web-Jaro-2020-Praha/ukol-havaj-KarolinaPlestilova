'use strict';

console.log('funguju!');

let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};

let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};


let usporyCelkem = osoba1.uspory + osoba2.uspory;
console.log(usporyCelkem)


if (usporyCelkem >= 100000) {
  console.log("Frčte na dovolenou bez starostí!:-)");

  if ((osoba1.uspory >= 50000) && (osoba2.uspory >= 50000)) {
    console.log(osoba1.jmeno + " a " + osoba2.jmeno + " mají každá alespoň 50 000 Kč.");
  }

  else if (osoba1.uspory < 50000) {
    console.log(osoba1.jmeno + " má málo." + " Musí doplatit " + (50000 - osoba1.uspory) + " Kč.");
  }

  else if (osoba2.uspory < 50000) {
    console.log(osoba2.jmeno + " má málo." + " Musí doplatit " + (50000 - osoba2.uspory) + " Kč.");
  }
  else {
    console.log("Pro kontrolu, když to mám dobře, sem se to nedostane:)")
  }
}
else {
  console.log("Musíte ještě šetřit:o/. Chybí vám alespoň " + (100000 - (usporyCelkem)));

  if (osoba1.uspory < 50000) {
    console.log(osoba1.jmeno + " má málo." + " Musí našetřit alespoň " + (50000 - osoba1.uspory) + " Kč.");
  }

  if (osoba2.uspory < 50000) {
    console.log(osoba2.jmeno + " má málo." + " Musí našetřit alespoň " + (50000 - osoba2.uspory) + " Kč.");
  }

}

// otestováno s různými vstupy (částkami) a bylo funkční. K testování jsem využila terminál ve Visual Code. Dík:)


