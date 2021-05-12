import { VendedorReadDataSource } from './vendedor-read-datasource';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { VendedorService } from './../vendedor.service';
import { Vendedor } from './../vendedor.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vendedor-read',
  templateUrl: './vendedor-read.component.html',
  styleUrls: ['./vendedor-read.component.css']
})
export class VendedorReadComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Vendedor>;
  dataSource: VendedorReadDataSource;

  vendedores: Vendedor[]
  displayedColumns = ['id', 'nome', 'cpf', 'rg', 'celular', 'cep', 'rua', 'numeroCasa', 'bairro', 'action']

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {
    this.dataSource = new VendedorReadDataSource();
    this.vendedorService.read().subscribe(vendedores => {
      this.vendedores = vendedores
      console.log(vendedores)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
