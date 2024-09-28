import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Verificador de Fibonacci';
  numberInput: number = 0;  // Valor padrão inicial
  resultMessage: string = '';  // Mensagem de resultado (se pertence à sequência)
  fibonacciSequence: number[] = [];  // Armazena a sequência de Fibonacci

  constructor(private http: HttpClient) {}

  // Método para verificar se o número pertence à sequência de Fibonacci e obter a sequência
  checkFibonacci() {
    if (this.numberInput === null || this.numberInput === undefined) {
      this.resultMessage = 'Por favor, insira um número válido.';
      return;
    }

    // Fazendo a requisição ao backend
    this.http.post<any>('http://localhost:3000/check-fibonacci', { number: this.numberInput })
      .subscribe(
        response => {
          this.resultMessage = response.message;  // Exibindo a mensagem recebida do backend
          this.fibonacciSequence = response.sequence;  // Armazenando a sequência de Fibonacci
        },
        error => {
          this.resultMessage = 'Ocorreu um erro ao tentar verificar o número. Tente novamente mais tarde.';
          this.fibonacciSequence = [];  // Limpar a sequência em caso de erro
        }
      );
  }
}
