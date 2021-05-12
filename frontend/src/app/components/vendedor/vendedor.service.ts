import { map, catchError } from 'rxjs/operators';
import { Vendedor } from "./vendedor.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VendedorService {
  baseUrl = "http://localhost:8081/vendedorAPI";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  create(vendedor: Vendedor): Observable<Vendedor> {
    const url = `http://localhost:8081/vendedorAPI?bairro=${vendedor.bairro}&celular=${vendedor.celular}&cep=${vendedor.cep}&cpf=${vendedor.cpf}&localidade=${vendedor.localidade}&logradouro=${vendedor.logradouro}&nome=${vendedor.nome}&numeroCasa=${vendedor.numeroCasa}&rg=${vendedor.rg}&telefone=${vendedor.telefone}&uf=${vendedor.uf}`;
    return this.http.post<Vendedor>(url, vendedor).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Vendedor> {
    const url = `${this.baseUrl}/get/${id}`;
    return this.http.get<Vendedor>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(vendedor: Vendedor): Observable<Vendedor> {
    const url = `${this.baseUrl}/atualizar/${vendedor.id}`;
    return this.http.put<Vendedor>(url, vendedor).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Vendedor> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<Vendedor>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

  buscarCep(cep: string): Observable<Vendedor>{
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<Vendedor>(url)
  }
}
