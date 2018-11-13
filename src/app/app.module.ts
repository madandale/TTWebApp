import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { CourseCardComponent } from './cources/course-card/course-card.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Readmorecomponent } from './common/readmore/readmore.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCarouselModule } from 'ngx-carousel';
import { BooknowComponent } from './booknow/booknow.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
{ path: '', 
redirectTo: '/home', 
pathMatch: 'full' 
},
  {path: 'home', component: HomeComponent},
  {path: 'ourservices', component: ServicesComponent},
  {path: 'AboutUs', component: AboutusComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'bookNow', component: BooknowComponent}

  // {
  //   path: 'cardDetails',
  //   children: [
  //     {
  //       path: '',
  //       component: CrisisListComponent,
  //       children: [
  //         {
  //           path: ':id',
  //           component: CrisisDetailComponent
  //         },
  //         {
  //           path: '',
  //           component: CrisisCenterHomeComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminSignUpComponent,
    ProductComponent,
    ContactUsComponent,
    ServicesComponent,
    CourseCardComponent,
    Readmorecomponent,
    AboutusComponent,
    BooknowComponent
    ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

