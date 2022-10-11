import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Home');
    document.body.className = 'bg_background';
  }
  onFxTradebooking() {
    this.router.navigate(['/FxTradeBooking']);
  }
}
