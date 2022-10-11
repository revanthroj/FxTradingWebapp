import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-fxtradebooking',
  templateUrl: './fxtradebooking.component.html',
  styleUrls: ['./fxtradebooking.component.css'],
})
export class FxtradebookingComponent implements OnInit {
  constructor(
    private router: Router,
    private dialogservice: DialogService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('DashBoard');
    document.body.className = 'dash_background';
  }

  onBookTrade() {
    this.router.navigate(['/BookTrade']);
  }
  onPrintTrade() {
    this.router.navigate(['/PrintTrade']);
  }
  onExit() {
    this.dialogservice
      .OpenConfirmExit('Do you really want to exit (y/n)')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['/Exit']);
        } else {
        }
      });
  }
}
