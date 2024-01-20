import { Component } from '@angular/core';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  details = {
    title : "Title by String interpolation",
    message : "Data Binding - types(One Way, Two Way)",
    display : true,
    name : "",
    count: 0,
    text:'',
  }

  fruits = [
    {
      name:'Apple',
      price: 70,
      inStock:'true',
    },
    {
      name:'Banana',
      price: 50,
      inStock:'true',
    },
    {
      name:'Carrot',
      price: 37,
      inStock:'false',
    },
    {
      name:'Drumstick',
      price: 45,
      inStock:'true',
    },
    {
      name:'E-Apple',
      price: 90,
      inStock:'false',
    },
    {
      name:'Fruit1',
      price: 100,
      inStock:'true',
    },
    {
      name:'Fruit2',
      price: 20,
      inStock:'false',
    },
    {
      name:'Fruit3',
      price: 40,
      inStock:'false',
    },
    {
      name:'F-Apple',
      price: 290,
      inStock:'true',
    },
    {
      name:'Fruit4',
      price: 28,
      inStock:'false',
    },
    {
      name:'Fruit5',
      price: 76,
      inStock:'false',
    },
  ]

  totalfruits:number = this.fruits.length;
  instockfruits:number = this.fruits.filter(f => f.inStock==='true').length;
  outofstockfruits:number = this.fruits.filter(f => f.inStock==='false').length;
  

  onClick(){
    this.details.display = !this.details.display;
  }

  onNameChange(event: any){
    this.details.name = event.target.value;
  }

  decrement(){
    this.details.count--;
  }
  increment(){
    this.details.count++;
  }

  selectedfilterradio:string = 'all';

  onFilterChanged(value:string){
    this.selectedfilterradio = value;
  }

}


// false = '',0'undefined,null