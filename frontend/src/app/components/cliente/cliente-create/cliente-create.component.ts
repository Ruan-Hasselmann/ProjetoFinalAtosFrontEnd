import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    rg: '',
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    numeroCasa: '',
    dataCobranca: '',
    total: null,
    celular: '',
    telefone: null,
    pago: 0,
    restante: 0,
  }

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    
  }

  pesquisacep(value: string): void{
    this.clienteService.buscarCep(value).subscribe(cliente => {
      if(cliente.cep==undefined){
        alert('Cep Invalido!')
      }
      this.cliente.logradouro = cliente.logradouro
      this.cliente.bairro = cliente.bairro
      this.cliente.localidade = cliente.localidade
      this.cliente.uf = cliente.uf
    })
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente cadastrado com sucesso!')
      this.router.navigate(['/cliente'])  
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }

}
