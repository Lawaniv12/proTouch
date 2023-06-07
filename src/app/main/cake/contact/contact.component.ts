import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CakeService } from 'src/app/core/services/cake.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private cakeService: CakeService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) { }

  ngOnInit(): void {
    this.initContactForm()
  }

  initContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }

  sendCakeContactUs() {
    this.cakeService.cakeContactUs(this.contactForm.value).subscribe((res) => {
      if (!res?.hasError) {
        this.notify.publishMessages(res?.message, 'success');
        this.contactForm.reset();
      } else {
        this.notify.publishMessages(res?.message, 'danger');
        this.contactForm.reset();
      }
    })
  }

}
