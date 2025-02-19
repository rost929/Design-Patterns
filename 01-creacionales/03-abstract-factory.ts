import { COLORS } from "../helpers/colors.ts";
/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

/*
*Interfaces
*/
interface Burger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}
/*
*Contrete Classes
*/
class ChickenBurger implements Burger {
  prepare(): void {
    console.log("%cPreparing chicken burger", COLORS.yellow);
  }
}

class BeefBurger implements Burger {
  prepare(): void {
    console.log("%cPreparing chicken burger", COLORS.yellow);
  }
}

class Water implements Drink {
  pour(): void {
    console.log("%cPouring glass of water", COLORS.blue);
  }
}

class Soda implements Drink {
  pour(): void {
    console.log("%cPouring glass of Soda", COLORS.purple);
  }
}

interface RestaurantFactory {
  createBurger(): Burger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createBurger(): Burger {
    return new BeefBurger();
  }
  createDrink(): Drink {
    return new Soda();
  }
}

class HealthyFoodRestaurantFactory implements RestaurantFactory {
  createBurger(): Burger {
    return new ChickenBurger();
  }
  createDrink(): Drink {
    return new Water();
  }
}

function main(factory : RestaurantFactory) {
  const burger = factory.createBurger();
  const drink = factory.createDrink();

  burger.prepare();
  drink.pour();
}
console.log("%cRegular food order:", COLORS.red);
main(new FastFoodRestaurantFactory);

console.log("\n%cHealthy food order:", COLORS.green);
main(new HealthyFoodRestaurantFactory);