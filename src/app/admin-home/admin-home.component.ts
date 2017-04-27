import { Component, OnInit } from '@angular/core';
import {UsersService} from "./services/users.service";
import {User} from "./models/user";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  providers:[UsersService]
})
export class AdminHomeComponent implements OnInit {
  private users:User[];

  constructor(private userService:UsersService) { }

  ngOnInit() {
   this.userService.getUsers().subscribe(
      (users:User[])=>{
        this.users=users
      },
    (error)=>{
        console.log(error)
    });
  }

}
