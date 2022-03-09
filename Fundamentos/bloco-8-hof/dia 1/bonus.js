const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDragao = () => {
    const dano = Math.floor(Math.random() * dragon.strength) + 15;
    return dano;
};

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo)
// e o valor de strength * weaponDmg (dano máximo).

const danoWarrior = () => {
    const dano = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg)) + warrior.strength;
    return dano;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano
// e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo)
// e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago
// tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente")
// e a mana gasta é 0.

const mageAttack = (mage) => {
    const mageMana = 125;
    const minDmg = 45;
    const maxDmg = 90;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };

  console.log(mageAttack());



const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const ataqueMage = (mage) => {
    const turnos = {
        manasGastas: 0,
        danoFeito: 'Not enough mana...'
    };

    if (mage.mana > 15) {
        const danoMage = Math.floor(Math.random() * (mage.intelligence * 2)) + mage.intelligence;
        turnos.manasGastas = 15;
        turnos.danoFeito: danoMage;
        return turnos;
    }
    return turnos;
};

console.log(ataqueMage());