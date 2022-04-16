import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShareItemService } from './share-item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn:boolean = !localStorage.getItem("__todoListToken__");
  constructor(private shareSvc:ShareItemService,private router:Router) {

  }
  signUp(){
    alert(200)
  }
  signIn(){

  }
  signOut(){
    this.router.navigate(['']);
    this.shareSvc.signOut();
  }

}
