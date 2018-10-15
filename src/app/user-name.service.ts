import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
name:string;

@Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }
setName(name:string){
	this.name = name;
	this.change.emit(this.name);
	console.log("This is a user-name from user-name service after setName: "+this.name);
}
getName(){
	console.log("Get name wroks!!!");
	return this.name;
}
}
