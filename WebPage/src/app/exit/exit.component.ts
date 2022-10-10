import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
})
export class ExitComponent implements OnInit {
  constructor(private router: Router, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Exit');
  }
}
