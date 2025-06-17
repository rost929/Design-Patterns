import { COLORS } from "../helpers/colors.ts";
/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  use(): void {
    console.log("Atack with a %csword fiercely!", COLORS.blue);
  }
}

class axeAttack implements Ability {
    use(): void {
      console.log("Atack with a %cAxe brutally!", COLORS.red);
    }
  }

class MagicSpell implements Ability {
  use(): void {
    console.log("Throw a %cmagic spell!", COLORS.purple);
  }
}

class FireballSpell implements Ability {
    use(): void {
      console.log("Throw a %cfireball spell!", COLORS.yellow);
    }
  }

abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract performAbility(): void;
}
class Warrior extends Character {
  override performAbility(): void {
    console.log("%cWarrior is ready to fight", COLORS.cyan);
    this.ability.use();
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log("Mage prepares his magic powers");
    this.ability.use();
  }
}

function main() {
    const warrior = new Warrior(new SwordAttack());

    warrior.performAbility();

    warrior.setAbility(new axeAttack());
    warrior.performAbility();

    const mage = new Mage(new MagicSpell());
    mage.performAbility();

    mage.setAbility(new FireballSpell())
    mage.performAbility();
}


main();
