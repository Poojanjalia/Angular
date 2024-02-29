import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CreateFormGroupArgs } from '@progress/kendo-angular-grid';
import { data } from './data';
import { Data } from './model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  public data: Data[] = data;
  public formGroup: FormGroup = this.formBuider.group({
    ID: null,
    Name: "",
    LastName: "",
  });
  constructor(private formBuider: FormBuilder) {
     this.createFormGroup = this.createFormGroup.bind(this);
  }
  public createFormGroup(args: CreateFormGroupArgs): FormGroup{
    const item = args.isNew ? new Data() : args.dataItem;

    this.formGroup = this.formBuider.group({
      ID: [item.ID, Validators.required],
      Name: [item.Name, Validators.required],
      LastName: [item.LastName, Validators.required],
    });
    return this.formGroup;
  } 
}