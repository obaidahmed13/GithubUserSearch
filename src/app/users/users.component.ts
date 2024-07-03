import { Component } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  username: string = '';
  user: any;
  savedSearch: string[] = [];
  constructor(private userServ: UsersService) {}

  getUser(username: string): void{
    if(username && !this.savedSearch.includes(username)) {
    this.userServ.getUser(username).subscribe(data=> {
      this.user = data;
      this.savedSearch.push(username);
    },
    error => {
      console.log("error getting user", error)
    }
    )
   }    
  }
}
