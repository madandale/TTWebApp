import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    ourServicesArray : any [] = [];
  
    constructor(private http: HttpClient,private router: Router) {
      
      this.getJSON().subscribe(data => {
        const userStr = JSON.stringify(data);
          console.log(userStr);
         let servicesJson = JSON.parse(userStr);
          this.ourServicesArray = servicesJson.ourServices;
          console.log("achievementsArray list size"+ this.ourServicesArray.length);
      }
        )
    }
    

    onClick(ourServices) {
     
      var value = ourServices.title;
      console.log("value on click"+value);
      this.router.navigateByUrl('/bookNow');

      
    }


    public getJSON(): Observable<any> {
      return this.http.get("./assets/pageJson/our_services.json")
    }
  ngOnInit() {
  }

}
