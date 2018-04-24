import { Injectable } from '@angular/core';

export interface LoggerLevel {
  value: number;
  label: string;
  color: () => string;
}

export interface Logger {
  debug(message: string, details?: any): void;
  info(message: string, details?: any): void;
  warn(message: string, details?: any): void;
  error(message: string, details?: any): void;
}


@Injectable()
export class LoggerService {

  private readonly LEVEL_DEBUG = {value: 0, label: 'DEBUG', color: () => 'color: #1E93D4'};
  private readonly LEVEL_INFO = {value: 1, label: 'INFO', color: () => 'color: #12BB71'};
  private readonly LEVEL_WARN = {value: 2, label: 'WARN', color: () => 'color: #E36C20'};
  private readonly LEVEL_ERROR = {value: 3, label: 'ERROR', color: () => 'color: #fff;'};
  private loggers: {[id: string]: Logger} = {};

  private CURRENT_LEVEL = this.LEVEL_DEBUG;

  constructor() {}

  private log(msg: string, id: string, level: LoggerLevel, details?: any) {
    if (this.CURRENT_LEVEL <= level) {
      console.log(`%c [${level.label}] [${id}] - ${msg}`, level.color());

      if (details) {
        console.dir(details); // tslint:disable-line:no-console
      }
    }
  }

  public setLevel(level: LoggerLevel) {
    this.CURRENT_LEVEL = level;
  }

  public get(id: string): Logger {
    if (!this.loggers[id]) {
      this.loggers[id] = {
        debug: (msg: string, details?: any) => this.log(msg, id, this.LEVEL_DEBUG, details),
        info: (msg: string, details?: any) => this.log(msg, id, this.LEVEL_INFO, details),
        warn: (msg: string, details?: any) => this.log(msg, id, this.LEVEL_WARN, details),
        error: (msg: string, details?: any) => this.log(msg, id, this.LEVEL_ERROR, details)
      }
    }

    return this.loggers[id];
  }
}
