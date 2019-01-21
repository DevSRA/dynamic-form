import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],

})
export class FormControlComponent implements OnInit {
 // data:any;
  control: AbstractControl;
  @Input() data: any;
  @Input() parentForm: FormGroup;
  private _prevSelected: any;

  ngOnInit() {
    this.control = this.parentForm.get(this.data.key);

   /* if(this.data.extendedFields){
  
      if(this.data.extendedFields[0]){
        console.log("SS "+ this.data.extendedFields[0]);
    }
  }*/
  }

  handleChange(evt) {
    var target = evt.target;
    if (target.checked) {
     console.log("D"+ target.id)
    } else {
      console.log("D"+ target.checked)
    }
  }
}
