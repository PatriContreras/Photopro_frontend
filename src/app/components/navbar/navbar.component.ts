import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {

    if (localStorage.getItem('token_cliente')) {
      localStorage.removeItem('token_cliente')

    } else {
      localStorage.removeItem('token_fotografo')
    }

    this.router.navigate(['/'])

  }
}
