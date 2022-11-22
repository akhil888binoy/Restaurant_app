import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AddRestaurantComponent} from './add-restaurant/add-restaurant.component';
import { EditRestaurantsComponent} from './edit-restaurants/edit-restaurants.component';


const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path: 'add-restaurant', component: AddRestaurantComponent},
  {path: 'edit-restaurants/:id', component:EditRestaurantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
