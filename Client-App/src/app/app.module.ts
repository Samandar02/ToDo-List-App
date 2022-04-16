import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { AuthComponent } from './auth/auth.component';
import { ShareItemService } from './share-item.service';
import { AuthInterceptorService } from './auth-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    ToDoAppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  ////        This code need to use http interceptor !!!
  providers: [ShareItemService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
