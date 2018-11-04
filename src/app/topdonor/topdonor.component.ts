import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-topdonor',
  templateUrl: './topdonor.component.html',
  styleUrls: ['./topdonor.component.css']
})
export class TopdonorComponent implements OnInit {

  topDonorList : any [] = [];
  displayedColumns: string[] = ['snumber','name', 'amount'];
  public myDataSource: MatTableDataSource<any>;

  //displayedColumns: string[] = ['name', 'amount'];
 // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // dataSource : MatTableDataSource <PeriodicElement[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {

    this.getJSON().subscribe(data => {
      //this.arrBirds = data as string[];
      const donorJSonString = JSON.stringify(data);
        console.log(donorJSonString);
       let topDonorlistStringData = JSON.parse(donorJSonString);
        this.topDonorList = topDonorlistStringData.topdonors;

    
        this.myDataSource = new MatTableDataSource<any>(this.topDonorList);
        this.myDataSource.paginator = this.paginator;

        console.log("Donor list size"+ this.topDonorList.length +"\n value"+this.topDonorList);
    }
      )
  }
  
  public getJSON(): Observable<any> {
    return this.http.get("./assets/pageJson/topdonorlist.json")
  }

   

  
    ngOnInit() {
    }
  }
  


 
  