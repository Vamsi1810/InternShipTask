import { Component, OnInit } from '@angular/core';
import { PassdataService } from '../passdata.service';
import { dogs } from '../DogsSchema';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})

export class ShoppingcartComponent implements OnInit {
  
  cart:dogs[]=[]
  Dog:dogs[] = [
    {dogname:"Shiba Inu-1",subtitle:"Dog Breed",imageurl:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {dogname:"Shiba Inu-2",subtitle:"Dog Breed",imageurl:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {dogname:"Shiba Inu-3",subtitle:"Dog Breed",imageurl:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {dogname:"Shiba Inu-4",subtitle:"Dog Breed",imageurl:"https://material.angular.io/assets/img/examples/shiba2.jpg"}
  ];
  constructor(private service:PassdataService) {
   }

  ngOnInit(): void {
  }

  User = this.service.Username;
  addtocart(dgname:String){
    // for(var d in this.Dog){
    //   if(this.Dog[d].dogname===dgname){
    //     this.cart.push(this.Dog[d]);
    //     delete this.Dog[d]

    //     console.log(this.Dog)
    //     console.log(this.cart)
    //   }
    // }
    this.Dog.forEach( (item, index) => {
      if(item.dogname === dgname){
        this.cart.push(item)
        this.Dog.splice(index,1);
      }
    });
  }
}
