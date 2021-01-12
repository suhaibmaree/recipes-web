import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  writeToLog(logMessage: string): void{
    console.log(logMessage);
  }
  constructor() { }
}
