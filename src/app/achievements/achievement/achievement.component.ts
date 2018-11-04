import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent   {

  achievementsArray : any [] = [];
  panelOpenState = false;

  constructor(private http: HttpClient) {
    
    this.getJSON().subscribe(data => {
      const userStr = JSON.stringify(data);
        console.log(userStr);
       let achievementsJson = JSON.parse(userStr);
        this.achievementsArray = achievementsJson.achievements;
        console.log("achievementsArray list size"+ this.achievementsArray.length);
    }
      )
  }
  
  public getJSON(): Observable<any> {
    return this.http.get("./assets/pageJson/achievement.json")
  }

}
