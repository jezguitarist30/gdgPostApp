import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      name: ['', Validators.compose([Validators.minLength(50), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(50), Validators.required])],
      message: ['', Validators.compose([Validators.minLength(400), Validators.required])]
    });
  }

  ngOnInit() {
  }

  send() {
    console.log(this.form.value);
  }

}
