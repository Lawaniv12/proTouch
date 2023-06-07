import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  notification: any;
  constructor(private alert: NotificationService) {}

  ngOnInit() {
    this.alert.alertStatus.subscribe((res) => {
      //  (res);
      this.notification = res;
    });
  }

  dismiss() {
    this.alert.dismissMessage();
  }

}
