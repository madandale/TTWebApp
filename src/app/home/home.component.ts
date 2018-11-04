import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NgxCarousel } from 'ngx-carousel'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public itemList: object[] = [];
  
  public Config: NgxCarousel;

  imagesArray : any;

  constructor(private router: Router) {

    this.Config = {
      grid: {xs: 2, sm: 2, md: 2, lg: 2, all: 0},
      slide: 1,
      speed: 1,
      point: {
        visible: true
      },
      loop: true,
      touch: true
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
      },
      {
        title: 'slide 5',
        color: 'black'
      },
      {
        title: 'slide 6',
        color: 'purple'
      },
            {
        title: 'slide 7',
        color: 'magenta'
      },
      {
        title: 'slide 8',
        color: 'pink'
      },
      {
        title: 'slide 9',
        color: 'grey'
      },
      {
        title: 'slide 10',
        color: 'orange'
      }
    ]
    
   
  }

  ngOnInit() {
  }

 


  loadCarDetails() {
   // this.router.navigate(['./cardDetails']);
  }

}
