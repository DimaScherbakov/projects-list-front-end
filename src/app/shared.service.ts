import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
dataBool: boolean;
insertData(data: boolean){
        this.dataBool=data;
    }
  constructor() { }
}
