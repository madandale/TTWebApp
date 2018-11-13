import { Component, OnInit,Input } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from '@angular/material';

import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';


export const PICK_FORMATS = {
    parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
    display: {
        dateInput: 'input',
        monthYearLabel: {year: 'numeric', month: 'short'},
        dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
        monthYearA11yLabel: {year: 'numeric', month: 'long'}
    }
};
class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return new DatePipe('en-US').transform(date, 'EEE, MMM dd, yyyy');
      } else {
          return date.toDateString();
      }
  }
}
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css'],
  providers: [
      {provide: DateAdapter, useClass: PickDateAdapter},
      {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}]
})
export class BooknowComponent implements OnInit {

  @Input('group') bookNowForm: FormGroup;

  name : string;
  date = new FormControl(new Date());



  constructor(private fb: FormBuilder) { }

  addEmail() {
      const emailArray = <FormArray>this.bookNowForm.controls['emails'];
      const newEmail = this.initEmail();

      emailArray.push(newEmail);
  }

  removeEmail(idx: number) {
      const emailArray = <FormArray>this.bookNowForm.controls['emails'];
      emailArray.removeAt(idx);
  }

  initEmail() {
      return this.fb.group({
          text: ''
      });
  }

  ngOnInit() {
  }

}
