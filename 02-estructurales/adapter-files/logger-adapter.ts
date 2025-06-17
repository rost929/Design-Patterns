import { Logger } from "jsr:@deno-library/logger";
import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LoggerAdapter

interface LoggerAdapter {
  file: string;
  writeLog: (msg: string) => void;
  writeError: (msg: string) => void;
  writeWarning: (msg: string) => void;
}

export class DenoLoggerAdapter implements LoggerAdapter {
  private logger = new Logger();

  public file: string;

  constructor(file: string) {
    this.file = file;
  }

  writeLog(msg: string): void {
    this.logger.info(`%c[${this.file} Log] %c${msg}`, COLORS.green);
  }
  writeError(msg: string): void {
    this.logger.error(`%c[${this.file} Error] ${msg}`, COLORS.red)
  }
  writeWarning(msg: string): void {
    this.logger.warn(`%c[${this.file} Warning] ${msg}`, COLORS.yellow);
  }
}