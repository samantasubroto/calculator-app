import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

  constructor() {
    //console.log(this.ifLastNumberIsSpecial());
  }
   query = '';

   isGreaterThen(){
    return this.query.replace(/[+-/*,]/g, "").length>=15;   
   }

   ifFirstNumberIsSpecial(){
    return this.query.length==0;
   }

   ifLastNumberIsSpecial(){
    const specialChars = /[`+\-=*\\\|\/]/;
    return specialChars.test(this.query.charAt(this.query.length-1));
   }

   numberEntry(item: string){
     if(!this.isGreaterThen()){
      this.query += item;
     }
   }

   addition(simbol: string){
    if(!this.isGreaterThen() && !this.ifFirstNumberIsSpecial() && !this.ifLastNumberIsSpecial()){
      this.query += simbol;
     }
   }

   minus(simbol: string){
    if(!this.isGreaterThen() && !this.ifFirstNumberIsSpecial() && !this.ifLastNumberIsSpecial()){
      this.query += simbol;
     }
   }

   division(simbol: string){
    if(!this.isGreaterThen() && !this.ifFirstNumberIsSpecial() && !this.ifLastNumberIsSpecial()){
      this.query += simbol;
     }
   }

   multply(simbol: string){
    if(!this.isGreaterThen() && !this.ifFirstNumberIsSpecial() && !this.ifLastNumberIsSpecial()){
      this.query += simbol;
     }
   }

   clearAll(){
     this.query = '';
   }

   removeLast(){
    this.query = this.query.substring(0, this.query.length - 1);
   }

   calculateResult(){
      if(!this.ifFirstNumberIsSpecial()){

      }else{
        
      }
   }
}
