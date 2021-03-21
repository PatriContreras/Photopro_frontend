import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-menu-ajustes',
  templateUrl: './menu-ajustes.component.html',
  styleUrls: ['./menu-ajustes.component.scss']
})
export class MenuAjustesComponent implements OnInit {

  fotografoid: number;
  constructor(
    private fotografoService: FotografoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }

}
