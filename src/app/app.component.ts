import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultValue = 'advanced';
  submitted = false;
  emailAddress;
  sub;
  password;

  onSubmit() {
    this.submitted = true;
    this.emailAddress = this.signupForm.value.email;
    this.sub = this.signupForm.value.subscriptions;
    this.password = this.signupForm.value.pass;

    this.signupForm.reset();
  }

}
