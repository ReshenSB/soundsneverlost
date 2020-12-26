import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  
  async delay(duration: number): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(duration), duration));
  }
}
