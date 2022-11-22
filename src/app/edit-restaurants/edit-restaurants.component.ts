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
  constructor(private rs:RestaurantService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params)=>{
      let id=Number(params.get('id'))
  })
  }
  getById(id:number){
      this.rs.getbyId(id).subscribe((data)=>{
          this.restaurantRecords=data;
      })
  }

}
