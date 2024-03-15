import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  temperatura: number;

  constructor() {
    this.temperatura=0;
  }

  ngOnInit(){
    const range = document.getElementById('range') as HTMLInputElement;
    const circle = document.getElementById('circle');

    if(range && circle){
      range.addEventListener('input',()=>{
        const value=parseInt(range.value);
        const angle =(value/100)*360;
        circle.style.transform=`rotate(${angle}deg) Translate(-50%, -50%)`;
      });
    }else{
      console.error("No se encontro el elemento pedido")
    }
  }

  getColor(){
    if(this.temperatura>=0 && this.temperatura<= 30){
      return 'primary'; // Azul
    }else if(this.temperatura>31 && this.temperatura<= 59){
      return 'success'; // Verde
    }else if(this.temperatura>=60 && this.temperatura<= 80){
      return 'warning'; // Amarillo
    }else if(this.temperatura>=81 && this.temperatura<= 100){
      return 'danger'; // Rojo
    }else{
      return 'primary';
    }
  }

}
