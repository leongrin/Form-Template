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
  genders = ['male', 'female'];

  user = {
    emailAddress: '',
    repeatType: '',
    password: '',
    sub: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedEmail = 'test@testsuggested.com';
    this.signupForm.form.patchValue({
      userData: {
        email: suggestedEmail
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.emailAddress = this.signupForm.value.userData.email;
    this.user.sub = this.signupForm.value.subscriptions;
    this.user.password = this.signupForm.value.userData.pass;
    this.user.gender = this.signupForm.value.genderSelected;
    this.user.repeatType = this.signupForm.value.textRepeat;

    console.log(this.signupForm);

    this.signupForm.reset();
  }

}
