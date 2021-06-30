import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{


  users: string [];

  constructor(private http: HttpClient,) { }
  onSubmit(data)

  {
    this.http.post('http://localhost:3000/users', data)
      .subscribe((result) => {
      console.warn(result)
    })
    console.warn(data)


  }


  ngOnInit() {

    this.http.get('http://localhost:3000/users').subscribe(
      data => {
        this.users = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      }
    );
  }


  matchingPassword(password: FormControl, cpassword: FormControl, registration: FormControl) {
    if (password.value !== cpassword.value) {
      registration.invalid;
      return 'Passwords must match!'
    }
  }
/*
  constructor(private fb: FormBuilder) { }
  onSubmit(data) {
    console.log(data);
  }
  ngOnInit() {


    this.registration = this.fb.group({
      email: this.email,
      Subscriptions: this.Subscriptions,
      password: this.password,
      date: new Date()

    })

  }
*/

}
