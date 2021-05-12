import { ClienteReadDataSource } from './cliente-read-datasource';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements AfterViewInit, OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cliente>;
  dataSource: ClienteReadDataSource;

  clientes: Cliente[]
  displayedColumns = ['id', 'nome', 'cpf', 'celular', 'cep', 'rua', 'bairro', 'numeroCasa', 'dataCobranca', 'total', 'restante', 'action'];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.dataSource = new ClienteReadDataSource();
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
    }) 
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
