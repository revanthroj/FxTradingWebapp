import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-print-trade',
  templateUrl: './print-trade.component.html',
  styleUrls: ['./print-trade.component.css'],
})
export class PrintTradeComponent implements OnInit {
  arObj: any[] = [];
  p: number = 1;
  constructor(
    private service: HttpService,
    private router: Router,
    private title: Title,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Trade History');
    document.body.className = '';
    this.GetPost();
  }

  GetPost() {
    this.service.getPost().subscribe(
      (res: any) => {
        this.arObj = res;
        console.log(res.status);
      },
      (error) => {
        this.toastr.error('Server Not Connected');
        this.router.navigate(['/notFound']);
      }
    );
  }
}
