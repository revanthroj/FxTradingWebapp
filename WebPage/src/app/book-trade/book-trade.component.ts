import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from '../dialog.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-book-trade',
  templateUrl: './book-trade.component.html',
  styleUrls: ['./book-trade.component.css'],
})
export class BookTradeComponent implements OnInit {
  status: boolean = false;
  isRate: number = 66.0;
  isRateEnable: any = null;

  tempTransferAmount: any;
  tradeStatus: string = '';
  curPair: any;
  name: any;
  rate: any;

  currencyPairsSelect: string[] = ['USDINR', 'EURUSD'];
  modalRef!: BsModalRef;
  usdinr: string = 'USDINR';
  yesOrno: string[] = ['Yes', 'No'];
  yes: string = 'Yes';
  name_pattern: any = /^[a-zA-z]+([\s.][a-zA-Z]+)*$/;
  amount_pattern: any = /^[.0-9]+$/;

  constructor(
    private service: HttpService,
    private router: Router,
    private dialogservice: DialogService,
    private title: Title,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('BookTrade');
    document.body.className = '';
  }

  yesRate(event: any) {
    if (this.status == true) {
      console.log('yesrate', event.target.value);
      this.isRateEnable = true;
      console.log(
        'this.israte',
        this.isRate,
        event.target.value,
        this.isRateEnable
      );
    } else {
      this.status = false;
      console.log('noRate', event.target.value);
      this.isRateEnable = false;
      console.log(
        'this.israte',
        this.isRate,
        event.target.value,
        this.isRateEnable
      );
    }
  }
  noRate(event: any) {
    console.log('noRate', event.target.value);
    this.isRateEnable = false;
    console.log(
      'this.israte',
      this.isRate,
      event.target.value,
      this.isRateEnable
    );
  }
  onBook(f: NgForm) {
    if (!f.valid) {
      this.toaster.warning('Enter all details correctly');
      return false;
    }
    this.dialogservice
      .OpenConfirmDialog('Book/Cancel this trade?')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.isRateEnable = true;
          if (
            this.name_pattern.test(f.value.username) &&
            f.value.currencyPair &&
            this.amount_pattern.test(f.value.transferAmount) != 0
          ) {
            let obj = {
              username: f.value.username,
              currencyPair: f.value.currencyPair.toUpperCase(),
              tranferRate: this.isRate,
              transferAmount: Number(
                f.value.transferAmount * this.isRate
              ).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0,
              }),
            };
            this.service.postRecord(obj).subscribe(
              (response) => {
                console.log(response);
                this.status = true;
                this.tempTransferAmount = obj.transferAmount;
                this.curPair = obj.currencyPair;
                this.name = obj.username;
                this.rate = this.isRate;
              },
              (error) => {
                this.router.navigate(['/notFound']);
              }
            );
          } else {
            this.router.navigate(['/BookTrade']);
            // this.tradeStatus = 'Fill all the details correctly';
            this.toaster.warning('Enter details correctly');
          }
        } else this.toaster.warning('Trade is Canceled');
      });
  }
}
