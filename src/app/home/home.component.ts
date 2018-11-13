import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NgxCarousel } from 'ngx-carousel'
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public itemList: object[] = [];
  
  public Config: NgxCarousel;

  locationsToVisit : any[] = [];

  constructor(private router: Router,private http: HttpClient) {
    
    this.getJSON().subscribe(data => {
      const userStr = JSON.stringify(data);
        console.log(userStr);
       let locations = JSON.parse(userStr);
        this.locationsToVisit = locations.homeItems;
        console.log("locationsToVisit list size"+ this.locationsToVisit.length);
    }
      )

    this.Config = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 40,
      interval: 2000,
      point: {
        visible: true
      },
      loop: true
    
      // grid: {xs: 2, sm: 2, md: 2, lg: 2, all: 0},
      // slide: 1,
      // speed: 1,
      // point: {
      //   visible: true
      // },
      // loop: true,
      // touch: true
    }

    this.itemList = [
      {
        title: 'slide 1',
        color: 'green'
      },
      {
        title: 'slide 2',
        color: 'blue'
      },
      {
        title: 'slide 3',
        color: 'red'
      },
      {
        title: 'slide 4',
        color: 'yellow'
      }
     
    ]
    
   
  }

  ngOnInit() {
  }

 
  public getJSON(): Observable<any> {
    return this.http.get("./assets/pageJson/homepageImages.json")
  }

  loadCarDetails() {
   // this.router.navigate(['./cardDetails']);
  }

}
