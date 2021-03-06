import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormArray, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  object;

  constructor(public db: AngularFireDatabase) {

    this.object = { name: 'kartik', subject: 'This is subject', message: 'This is a Message' }

    // db.object('contactus/'+db.createPushId()).set(this.object).then(res => {
    //   console.log(res)
    // });

    db.list('contactus').valueChanges().subscribe(res => console.log(res))

  }

  contact = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  })

  ngOnInit(): void {
  }

  submit() {

    this.object = { name: this.contact.get('name').value, email: this.contact.get('email').value, contact: this.contact.get('contact').value, subject: this.contact.get('subject').value, message: this.contact.get('message').value }

    this.db.object('contactus/' + this.db.createPushId()).set(this.object).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

  }

  open(){
    console.log("open")
    document.querySelector(".letter").classList.toggle('letterOpen')
  }

}
