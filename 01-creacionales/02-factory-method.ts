import { COLORS } from "../helpers/colors.ts";
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
interface Burger {
  prepare(): void;
}

/*
 * Contrete Classes
 */
class ChickenBurger implements Burger {
  prepare(): void {
    console.log("Preparing %cchicken burger", COLORS.yellow);
  }
}

class BeefBurger implements Burger {
  prepare(): void {
    console.log("Preparing %cbeef burger", COLORS.brown);
  }
}

class BeanBurger implements Burger {
  prepare(): void {
    console.log("Preparing %cbean burger", COLORS.orange);
  }
}

/*
 * Creator Abstract Class
 */
abstract class Restaurant {
  protected abstract createBurger(): Burger;

  constructor() {}

  orderBurger(): void {
    const burger = this.createBurger();
    burger.prepare();
  }
}

/*
 * Contrete Creator Classes
 */
class ChickenRestaurant extends Restaurant {
  override createBurger(): Burger {
    return new ChickenBurger();
  }
}

class BeefRestaurant extends Restaurant {
  override createBurger(): Burger {
    return new BeefBurger();
  }
}

class BeanRestaurant extends Restaurant {
  override createBurger(): Burger {
    return new BeanBurger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "¿What type of burger do you want? (Chicken/Beef/Bean) "
  );

  switch (burgerType) {
    case "Chicken":
      restaurant = new ChickenRestaurant();
      break;

    case "Beef":
      restaurant = new BeefRestaurant();
      break;

    case "Bean":
      restaurant = new BeanRestaurant();
      break;

    default:
      console.log("Invalid option");
  }

  restaurant.orderBurger();
}

main();
