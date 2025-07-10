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
        } else {
            console.log(this.clienteS)
            if (this.clienteS.cadastrar(this.email, this.senha)) {
                this.email = "";
                this.senha = "";
                this.sobrenome = "";
                this.nome = "";
                this.mensagemErro = " ";
                console.log(this.clienteS)
                this.router.navigate(['/home']);
            }
            else {
                this.mensagemErro = 'Usuario ou senha inválidos';
            }
        }
    }


}
