import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente-service.service';
@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.page.html',
    styleUrls: ['./cadastrar.page.scss'],
    standalone: false,
})
export class cadastrarPage implements OnInit {
    mensagemErro: string = '';
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    signupForm : FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private clienteService: ClienteService) { 
        this.signupForm = new FormGroup({
            name: new FormControl,
            surname: new FormControl,
            email: new FormControl,
            password: new FormControl
        });
    }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['',  Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    get errorControl(){
        return this.signupForm.controls;
    }

    onSubmit() {
        if (this.signupForm.valid) {
            this.cadastrar();
        } else {
            // show error message
            alert("campos preenchidos inválidos");
            console.log("socorro")
            console.log(this.signupForm)
        }
    }

    cadastrar() {
        console.log("Oporra");
        this.clienteService.cadastrar(this.signupForm.value['name'], this.signupForm.value['surname'], this.signupForm.value['email'], this.signupForm.value['password'])
        .subscribe(
            /*
            {
            next:(response: any)=>{
                console.log("Alou");
                alert(response)
                console.log("Teve resposta?");
                console.log(response);
                if(response) {
                    console.log("Teve resposta");
                    console.log(response);
                    this.email = "";
                    this.senha = "";
                    this.sobrenome = "";
                    this.nome = "";
                    this.mensagemErro = " ";
                    
                }  else {
                    console.log("Sem resposta");
                    alert('Usuario ou senha inválidos');
                }
            },
            error:(error)=>{
                alert(error);
                alert('Usuario ou senha inválidos');
            }
        }
        */
        data => {
            console.log(data);
            if (data == "You are now registered. Please log in") {
                alert('Cadastro realizado com sucesso.');
                this.router.navigate(['/home']);
                const foo = <HTMLElement>document.querySelector("body");
                foo.classList.add("conta");
            }
            else{
                alert(data);
            }
            
        }
    );
    }
}
