import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  maxDate: Date = new Date();

  // form group for create card
  cardForm: FormGroup = this.formBuilder.group({
    title: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(20) ]],
    description: ['', [ Validators.maxLength(255) ]],
    imageLink: ['', [ Validators.required, Validators.pattern(/^((http|https|ftp|www):\/\/)?([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)(\.)([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]+)/g)]],
    videoLink: ['', [ Validators.required, Validators.pattern(/^((http|https|ftp|www):\/\/)?([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)(\.)([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]+)/g)]],
    date: [ null ]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  addCard() {
    if (this.cardForm.valid) {
      this.cardForm.value.date = new Date();

      console.log(this.cardForm.value);
      // this.cardForm.reset();
    }
  }

}
