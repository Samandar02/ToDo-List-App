import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareItemService } from '../share-item.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private shareSvc:ShareItemService) { }
  title:string = '';
  btnTitle:string = '';
  isSignIn:boolean = false
  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(url=>{
      (url.get('type') == 'signin')?this.isSignIn = true:this.isSignIn = false
      this.title = this.isSignIn?"Kirish":"Ro'yxatdan o'tish"
      this.btnTitle = this.isSignIn?"Kirish":"Ro'yxatdan o'tish"
    })
  }
  authorization(){
    this.router.navigate([''])
    if(this.isSignIn){
      this.shareSvc.signIn(this.form.value).subscribe(response=>{
        
      })
    }
    else{
      this.shareSvc.signUp(this.form.value);
  }}

}
