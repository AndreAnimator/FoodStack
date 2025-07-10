import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-custom-header',
    templateUrl: './custom-header.component.html',
    styleUrls: ['./custom-header.component.scss'],
    standalone: false,
})
export class CustomHeaderComponent implements OnInit {

    constructor(public navController: NavController) { }

    ngOnInit() { }

    irParaHome() {
        this.navController.navigateRoot('/home');
    }
    irParaLogin() {
        this.navController.navigateRoot('/login');
    }

    irParaMontagem() {
        this.navController.navigateRoot('/montagem');
    }
    irParaHamburguer() {
        this.navController.navigateRoot('/hamburger');
    }
    irParaPizza() {
        this.navController.navigateRoot('/pizza');
    }
    irParaHotDog() {
        this.navController.navigateRoot('/hotdog');
    }
    irParaPerfil() {
        this.navController.navigateRoot('/perfil');
    }
}
