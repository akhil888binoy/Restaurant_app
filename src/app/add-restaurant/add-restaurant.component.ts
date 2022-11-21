import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

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
  constructor(private rs: RestaurantService, private router: Router) { }

  ngOnInit(): void {
  }
    addRecords(){
        this.rs.create(this.restaurantRecords).subscribe((data)=>{
            this.router.navigate(["/"])

        })
    }

}
