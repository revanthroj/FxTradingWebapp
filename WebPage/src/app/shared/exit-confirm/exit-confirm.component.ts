import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirm',
  templateUrl: './exit-confirm.component.html',
  styleUrls: ['./exit-confirm.component.css']
})
export class ExitConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef:MatDialogRef<ExitConfirmComponent>
  ) { }

  ngOnInit(): void {
  }

}
