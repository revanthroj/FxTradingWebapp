import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { DialogService } from '../dialog.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-book-trade',
  templateUrl: './book-trade.component.html',
  styleUrls: ['./book-trade.component.css']
})

export class BookTradeComponent implements OnInit {
  status:boolean = false;
  isRate:number =  69.00;
  isRateEnable:any=null;
  tempTransferAmount:any;
  tradeStatus:string = "";
  curPair:any;
  name:any;
  rate:any;
  currencyPairsSelect:string[] =["USDINR","EURUSD"];
  modalRef!: BsModalRef;
  usdinr:string = "USDINR";
  yesOrno:string[] = ["Yes", "No"]
  yes:string = "Yes";
  name_pattern:any =/^[.a-zA-Z]+$/;
  amount_pattern:any = /^[.0-9]+$/;



  constructor(private service :HttpService,private router:Router,
    private dialogservice: DialogService) { }

  ngOnInit(): void {
    document.body.className = "";
  }
  // onTradeBook(){
  //   if((f.value.username && f.value.currencyPair && f.value.transferAmount != 0)){

  //     let obj={
  //     username:f.value.username,
  //     currencyPair:(f.value.currencyPair).toUpperCase(),
  //     tranferRate : (f.value.tranferRate == 0? this.isRate:f.value.tranferRate),
  //     transferAmount:Number(f.value.transferAmount*((f.value.tranferRate == 0? 66.00:f.value.tranferRate))).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0})
  //   }
  //   this.service.postRecord(obj)
  //   .subscribe((response)=>{
  //     console.log(response);
  //     this.status = true;
  //     this.isRate = obj.tranferRate;
  //     this.tempTransferAmount = obj.transferAmount;
  //     this.curPair = obj.currencyPair;
  //     this.name = obj.username;
  //     this.rate = obj.tranferRate;
  //   })
  // }
  //   else{
  //     this.router.navigate(['/BookTrade']);
  //     this.tradeStatus = "Fill all the details correctly"
  //   }
  // }

  yesRate(event:any){
    if(this.status == true){
    console.log("yesrate",event.target.value)
    this.isRateEnable=true;
    console.log("this.israte",this.isRate,event.target.value,this.isRateEnable);}
    else{
      this.status = false;
      console.log("noRate",event.target.value)
      this.isRateEnable=false;
      console.log("this.israte",this.isRate,event.target.value,this.isRateEnable);
    }
  }
  noRate(event:any){
    console.log("noRate",event.target.value)
    this.isRateEnable=false;
    console.log("this.israte",this.isRate,event.target.value,this.isRateEnable);
  }
  onBook(f:NgForm){
    if(!f.valid){
      alert("Enter all details correctly")
      return false;
    }
    this.dialogservice.OpenConfirmDialog("Are you sure to book?")
    .afterClosed()
    .subscribe((res)=>{
      if(res){
        this.isRateEnable=true;
        if((this.name_pattern.test(f.value.username) && f.value.currencyPair && this.amount_pattern.test(f.value.transferAmount) != 0)){
          let obj={
          username:f.value.username,
          currencyPair:(f.value.currencyPair).toUpperCase(),
          tranferRate : (f.value.tranferRate == 0? this.isRate:f.value.tranferRate),
          transferAmount:Number(f.value.transferAmount*((f.value.tranferRate == 0? 66.00:f.value.tranferRate))).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0})
        }
        this.service.postRecord(obj)
        .subscribe((response)=>{
          console.log(response);
          this.status = true;
          // this.isRate = obj.tranferRate ;
          this.tempTransferAmount = obj.transferAmount;
          this.curPair = obj.currencyPair;
          this.name = obj.username;
          this.rate = obj.tranferRate;
        },error=>{
          this.router.navigate(["/notFound"])
        })
      }
        else{
          this.router.navigate(['/BookTrade']);
          this.tradeStatus = "Fill all the details correctly";
          alert("Enter details correctly")
        }
      }
      else(
        alert("Trade Not Booked")
      )
    })
  }
}
