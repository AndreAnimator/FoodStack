import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente-service.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: false,
})
export class LoginPage implements OnInit {

    constructor(private router: Router, private clienteService: ClienteService, private formBuilder: FormBuilder) { }

    email: string;
    senha: string;
    mensagemErro: string = '';

    loginForm: FormGroup = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.login();
        } else {
            // show error message
        }
    }

    login() {
        if (!this.email || !this.senha) {
            this.mensagemErro = 'Por favor, preencha todos os campos.';
        } else {
            if (this.clienteService.login(this.email, this.senha)) {
                this.email = "";
                this.senha = "";
                this.mensagemErro = " ";
                this.router.navigate(['/home']);
                const foo = <HTMLElement>document.querySelector("body");
                foo.classList.add("conta");
            }
            else {
                this.mensagemErro = 'Usuario ou senha inválidos';
            }
        }
    }
}
