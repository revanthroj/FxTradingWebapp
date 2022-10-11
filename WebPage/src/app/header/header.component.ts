import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private dialogservice: DialogService) {}

  ngOnInit(): void {}
  onExit() {
    this.dialogservice
      .OpenConfirmExit('Do you really want to exit (y/n)')
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.router.navigate(['/Exit']);
        } else {
        }
      });
  }
}
