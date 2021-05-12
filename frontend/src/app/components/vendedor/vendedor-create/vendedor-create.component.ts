import { Vendedor } from './../vendedor.model';
import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-create',
  templateUrl: './vendedor-create.component.html',
  styleUrls: ['./vendedor-create.component.css']
})
export class VendedorCreateComponent implements OnInit {

  vendedor: Vendedor = {
    nome: '',
    cpf: '',
    rg: '',
    celular: '',
    telefone: null,
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    numeroCasa: ''
  }

  constructor(private vendedorService: VendedorService, private router: Router) { }

  ngOnInit(): void {

  }

  pesquisacep(value: string): void{
    this.vendedorService.buscarCep(value).subscribe(vendedor => {
      if(vendedor.cep==undefined){
        alert('Cep Invalido!')
      }
      this.vendedor.logradouro = vendedor.logradouro
      this.vendedor.bairro = vendedor.bairro
      this.vendedor.localidade = vendedor.localidade
      this.vendedor.uf = vendedor.uf
    })
  }

  createVendedor(): void {
    this.vendedorService.create(this.vendedor).subscribe(() => {
      this.vendedorService.showMessage('Vendedor cadastrado com sucesso!')
      this.router.navigate(['/vendedor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/vendedor'])
  }
}
