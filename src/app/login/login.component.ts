import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  public userForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    birthDate: new FormControl(new Date),
    acceptNews: new FormControl()
  })
  public submitForm(): void{
    this.userForm.markAllAsTouched();
  }
  public clearForm(): void{
    this.userForm.reset();
  }
  constructor(private notificationService: NotificationService) { }
  public show(): void{
    this.notificationService.show({
      content: "Subbmited successfully"
    })
  }
}
