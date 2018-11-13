import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  name: string;
  email: string;
  mobile : string;
  message: string;

  constructor() { }


   /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
   alert(allInfo);

    console.log("form data"+allInfo); 
  }


  ngOnInit() {
  }

}
