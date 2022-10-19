import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

  constructor(private toastController: ToastController) {
    
  }
   query = '';
   result ;

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'please enter valid expression',
      duration: 1500,
      position: 'top'
    });
  }

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

   isNotOperator(str: string){
    const specialChars = /[`+\-=*\\\|\/]/;
    return specialChars.test(str);
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
      if(!this.ifLastNumberIsSpecial()){
        this.query = eval(this.query).toString();
      }else{
        this.presentToast();
      }
   }
}
