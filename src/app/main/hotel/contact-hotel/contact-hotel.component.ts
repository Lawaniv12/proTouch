import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-contact-hotel',
  templateUrl: './contact-hotel.component.html',
  styleUrls: ['./contact-hotel.component.scss']
})
export class ContactHotelComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) { }

  ngOnInit(): void {
    this.initContactForm()
  }

  initContactForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }

  sendHotelContactUs(){
    this.hotelService.hotelContactUs(this.contactForm.value).subscribe((res)=>{
      if(!res?.hasError){
        this.notify.publishMessages(res?.message, 'success')
        this.contactForm.reset()
      }else{
        this.notify.publishMessages(res?.message, 'danger')
        this.contactForm.reset()
      }
    })
  }

}
