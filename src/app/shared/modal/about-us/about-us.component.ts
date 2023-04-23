import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router,
    public matDialogRef: MatDialogRef<AboutUsComponent>
  ) { }

  ngOnInit(): void {
  }
  
  close() {
    this.matDialogRef.close(false);
  }

  confirm() {
   this.matDialogRef.close(true) 
  }
}
