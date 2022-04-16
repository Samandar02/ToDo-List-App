import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Item } from './models';


@Injectable({
  providedIn: 'root'
})
export class ShareItemService {
  constructor(private http:HttpClient) { }
  signOut() {
    localStorage.removeItem('__todoListToken__')
  }
  url:string = 'https://localhost:44341/api/items'
  urlForAuthorization = "https://localhost:44341/api/account"
  getItem(){
    let token:any = localStorage.getItem("__todoListToken__")
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return this.http.get<Item[]>(this.url+'/'+decodedToken?.sub??0);
  }
  postItem(item:Item){
    let token:any = localStorage.getItem("__todoListToken__")
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return this.http.post(this.url+'/'+decodedToken?.sub??0,item)
  }
  deleteItem(id:number){
    return this.http.delete(this.url+'/'+id);
  }


  signUp(credentials:any){
   return this.http.post(this.urlForAuthorization,credentials,{responseType:'text'})
   .subscribe(r=>localStorage.setItem('__todoListToken__',r));
  }
  signIn(credentials:any){
    return this.http.post(this.urlForAuthorization+'signin',credentials)
  }
}
