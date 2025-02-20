import { COLORS } from '../helpers/colors.ts';
/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */
class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
      console.log("%cDragon balls have been created", COLORS.orange);
    }
    return DragonBalls.instance;
  }

  collectBall(): void {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`Balls collected ${this.ballsCollected}`);
      return;
    }
    console.log("%c7 balls have been collected already, Invoke Shenlong!", COLORS.cyan);
  }

  summonShenlong() {
    if (this.ballsCollected === 7) {
      console.log("%cShenlong has been invoked", COLORS.green);
      this.ballsCollected = 0;
      return;
    }
    console.log(`%cThere are still missing ${7 - this.ballsCollected} balls`, COLORS.red);
  }
}


function main() {
    const gokuDragonBalls = DragonBalls.getInstance();

    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    
    const veggetaDarongBalls = DragonBalls.getInstance();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();

    console.log(veggetaDarongBalls);
    
    

    //gokuDragonBalls.summonShenlong();
    console.log(gokuDragonBalls);
    
}

main()