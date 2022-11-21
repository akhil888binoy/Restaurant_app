import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurantRecords:Restaurant ={
      id:0,
      name:'',
      owner:'',
      mobile:0,
      email:'',
      location:''

    }
  constructor() { }

  ngOnInit(): void {
  }

}
