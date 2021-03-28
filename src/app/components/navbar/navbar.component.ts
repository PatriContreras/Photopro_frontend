import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show: boolean;


  constructor(private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('token_cliente') || localStorage.getItem('token_fotografo')) {
      this.show = true;
    } else {
      this.show = false;
    }

  }

  logOut() {

    if (localStorage.getItem('token_cliente')) {
      localStorage.removeItem('token_cliente');

    } else {
      localStorage.removeItem('token_fotografo');
    }
    this.show = false;
    this.router.navigate(['/']);

  }
}
