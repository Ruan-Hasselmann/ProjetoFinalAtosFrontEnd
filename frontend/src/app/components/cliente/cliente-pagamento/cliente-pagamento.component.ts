import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-pagamento',
  templateUrl: './cliente-pagamento.component.html',
  styleUrls: ['./cliente-pagamento.component.css']
})
export class ClientePagamentoComponent implements OnInit {
  cliente: Cliente
  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.clienteService.readById(id).subscribe((cliente) => {
      cliente.dataCobranca = null
      cliente.pago = null
      this.cliente = cliente
    })
  }

  pagamentoCliente(): void {
    this.clienteService.pagamento(this.cliente).subscribe(() =>{
      this.clienteService.showMessage('Resgistro de pagamento realizado com sucesso!')
      this.router.navigate(['/cliente'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }

}
