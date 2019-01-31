import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],

})
export class FormControlComponent implements OnInit {
 // data:any;

 emails = [{ email: "email1" }, { email: "email2" }, { email: "email3" }, { email: 'email4' }]
 
  control: AbstractControl;
  @Input() data: any;
  @Input() parentForm: FormGroup;
  showExtraField : boolean =false;

  ngOnInit() {
    this.control = this.parentForm.get(this.data.key);
  }

  handleChange(evt) {
    console.log(evt.target.value)

    if(evt.target.value == "Me"){
      this.showExtraField = true;
    }else if(evt.target.value == "For someone else") {
      this.showExtraField =false;
    }
  }
}
