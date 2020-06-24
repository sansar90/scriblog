import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import *as firebase from 'firebase/app';
import 'firebase/auth';
import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ApproutingComponent } from './approuting/approuting.component';
import { AppRoutingPipe } from './app-routing.pipe';
import { AppRoutingComponent } from './app-routing/app-routing.component';


// Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyBT2QCj3U1x2qOhfy3UFwWmBgP9de6ndQo",
    authDomain: "scriblogger.firebaseapp.com",
    databaseURL: "https://scriblogger.firebaseio.com",
    projectId: "scriblogger",
    storageBucket: "scriblogger.appspot.com",
    messagingSenderId: "472477952653",
    appId: "1:472477952653:web:07d13025a1d77a4e1790c4",
    measurementId: "G-J67V9Z5QNR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    ProfileComponent,
   MenuComponent,
    MyblogsComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
    ApproutingComponent,
    AppRoutingPipe,
    AppRoutingComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,AppRoutingModule,NgxEditorModule,HttpClientModule ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
