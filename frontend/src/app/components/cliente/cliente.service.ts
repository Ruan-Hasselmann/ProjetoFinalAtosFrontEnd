import { map, catchError } from 'rxjs/operators';
import { EMPTY,Observable } from 'rxjs';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8081/clienteAPI"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(cliente: Cliente): Observable<Cliente>{
    const url = `http://localhost:8081/clienteAPI?bairro=${cliente.bairro}&celular=${cliente.celular}&cep=${cliente.cep}&cpf=${cliente.cpf}&dataCobranca=${cliente.dataCobranca}&localidade=${cliente.localidade}&logradouro=${cliente.logradouro}&nome=${cliente.nome}&numeroCasa=${cliente.numeroCasa}&pago=${cliente.pago}&restante=${cliente.restante}&rg=${cliente.rg}&telefone=${cliente.telefone}&total=${cliente.total}&uf=${cliente.uf}`;
    return this.http.post<Cliente>(url, cliente).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/get/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/atualizar/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  pagamento(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/pagamento/${cliente.id}?dataCobranca=${cliente.dataCobranca}&pago=${cliente.pago}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/deletar/${id}`;
    return this.http.delete<Cliente>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

  buscarCep(cep: string): Observable<Cliente>{
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<Cliente>(url)
  }
}
