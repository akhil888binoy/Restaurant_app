import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-restaurants',
  templateUrl: './edit-restaurants.component.html',
  styleUrls: ['./edit-restaurants.component.css']
})
export class EditRestaurantsComponent implements OnInit {
  restaurantRecords:Restaurant = {
      id:0,
      name:'',
      owner:'',
      mobile:0,
      email:'',
      location:''

    }
  constructor(private rs:RestaurantService, route:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
