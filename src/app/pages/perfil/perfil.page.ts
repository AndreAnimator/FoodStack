import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.page.html',
    styleUrls: ['./perfil.page.scss'],
    standalone: false,
})
export class PerfilPage implements OnInit {

    constructor(private favoritosService: FavoritosService) { }

    hamburgueres = this.favoritosService.obterHamburguer();

    ngOnInit() {
    }

    sairConta() {
        window.location.replace("/login");
    }

}
