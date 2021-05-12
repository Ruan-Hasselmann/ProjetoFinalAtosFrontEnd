import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-crud',
  templateUrl: './vendedor-crud.component.html',
  styleUrls: ['./vendedor-crud.component.css']
})
export class VendedorCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Vendedores',
      icon: 'work',
      routeUrl: '/vendedor'
    }
  }

  ngOnInit(): void {
  }

  navigateToVendedorCreate(): void {
    this.router.navigate(['/vendedor/create'])
  }

}
