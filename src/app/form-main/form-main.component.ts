import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',

})
export class FormMainComponent implements OnInit {

  quizForm: FormGroup;
  showFormValue = false;
  @Input() dataList: any[];


  ngOnInit() {

    const formContent: any = {};
   

    this.dataList.forEach(data => {
      formContent[data.key] = new FormControl(data.value);
    });

    this.quizForm = new FormGroup(formContent);

  }

  onSubmit() {

    this.showFormValue = true;

  }


  onReset() {

    this.quizForm.reset();
    this.showFormValue = false;

  }

}
