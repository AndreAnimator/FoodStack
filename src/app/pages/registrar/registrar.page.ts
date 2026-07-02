import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente-service.service';

@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.page.html',
    styleUrls: ['./registrar.page.scss'],
    standalone: false,
})
export class RegistrarPage {
    mensagemErro: string = '';
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;

    constructor(private router: Router, private formBuilder: FormBuilder, private clienteS: ClienteService) { }
    registrar() {
        if (!this.email || !this.senha) {
            this.mensagemErro = 'Por favor, preencha todos os campos.';
            alert(this.mensagemErro);
        } else {
            this.clienteS.cadastrar(this.nome, this.sobrenome, this.email, this.senha).subscribe({
                next:(response: any)=>{
                    if(response) {
                        console.log("Teve resposta");
                        console.log(response);
                        this.email = "";
                        this.senha = "";
                        this.sobrenome = "";
                        this.nome = "";
                        this.mensagemErro = " ";
                        this.router.navigate(['/home']);
                        const foo = <HTMLElement>document.querySelector("body");
                        foo.classList.add("conta");
                    }  else {
                        console.log("Sem resposta");
                        alert('Usuario ou senha inválidos');
                    }
                },
                error:(error)=>{
                    alert('Usuario ou senha inválidos');
                }
            });
        }
    }


}
