import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente-service.service';
@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.page.html',
    styleUrls: ['./cadastrar.page.scss'],
    standalone: false,
})
export class cadastrarPage implements OnInit {

    constructor(private router: Router, private clienteService: ClienteService, private formBuilder: FormBuilder) { }

    email: string;
    senha: string;
    mensagemErro: string = '';

    cadastrarForm: FormGroup = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    ngOnInit() {
        this.cadastrarForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.cadastrarForm.valid) {
            this.cadastrar();
        } else {
            // show error message
        }
    }

    cadastrar() {
        //if (!this.email || !this.senha) {
        //    this.mensagemErro = 'Por favor, preencha todos os campos.';
        //} else {
        //    if (this.clienteService.cadastrar(this.email, this.senha)) {
        //        this.email = "";
        //        this.senha = "";
        //        this.mensagemErro = " ";
        //        
        //    }
        //    else {
        //        this.mensagemErro = 'Usuario ou senha inválidos';
        //    }
        //}
        this.router.navigate(['/login']);
    }
}
