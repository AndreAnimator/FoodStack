import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
  standalone: false,
})
export class CustomFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {
    this.router.navigate(['login']);
  }

  montagem() {
    this.router.navigate(['montagem']);
  }

  pizza() {
    this.router.navigate(['pizza']);
  }

  hamburguer() {
    this.router.navigate(['hamburguer']);
  }

  hotdog() {
    this.router.navigate(['hotdog']);
  }
}
