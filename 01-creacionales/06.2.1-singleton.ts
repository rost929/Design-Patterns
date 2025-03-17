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

import { configManager } from "./singleton/config-manager.ts";

configManager.setconfig("apiURL", "http://loclahost:3000/api");
configManager.setconfig("timeout", "5000");
configManager.setconfig("apikey", "ABC123");

console.log(configManager.getconfig("apiURL"));
console.log(configManager.getconfig("timeout"));
console.log(configManager.getconfig("apikey"));
