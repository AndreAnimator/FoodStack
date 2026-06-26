import { Component, OnInit } from '@angular/core';
import { Favoritos } from 'src/app/models/favoritos/favoritos';
import { Ingredient } from 'src/app/models/ingredientes/ingredientes';
import { Hamburguer } from 'src/app/models/produtos/hamburger';
import { HotDog } from 'src/app/models/produtos/hot-dog';
import { Pizza } from 'src/app/models/produtos/pizza';
import { DadosService } from 'src/app/services/dados.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
    selector: 'app-montagem',
    templateUrl: './montagem.page.html',
    styleUrls: ['./montagem.page.scss'],
    standalone: false,
})
export class MontagemPage implements OnInit {
    constructor(private dataService: DadosService, private favoritosService: FavoritosService) {
        this.burger = new Hamburguer();
    }
    ngOnInit() {
    }
    nomeLanche: string;
    burger: Hamburguer;
    vegetais = this.dataService.obterVegetais();
    proteinas = this.dataService.obterProteinas();
    paes = this.dataService.obterPaes();
    queijos = this.dataService.obterQueijos();
    molhos = this.dataService.obterMolhos();
    complementos = this.dataService.obterComplementos();

    showVegetais: boolean = false;
    showProteinas: boolean = false;
    showPaes: boolean = false;
    showMolhos: boolean = false;
    showQueijos: boolean = false;
    showComplementos: boolean = false;

    addFavoritos(burguer: Hamburguer) {
        console.log(this.burger);
        this.favoritosService.adicionarFavorito(burguer);
        console.log(this.favoritosService);
    }

    addVegetable(vegetable: Ingredient): void {
        this.burger.addPart(vegetable);
        vegetable.quantity++;
    }
    removeVegetable(vegetable: Ingredient): void {
        this.burger.removePart(vegetable);
        vegetable.quantity--;
    }
    addPao(bun: Ingredient) {
        this.burger.addPart(bun);
        bun.quantity++;
    }

    addProteina(protein: Ingredient) {
        this.burger.addPart(protein);
        protein.quantity++;
    }

    addMolho(sauce: Ingredient) {
        this.burger.addPart(sauce);
        sauce.quantity++;
    }

    addSalad(salad: Ingredient) {
        this.burger.addPart(salad);
        salad.quantity++;
    }

    addQueijo(cheese: Ingredient) {
        this.burger.addPart(cheese);
        cheese.quantity++;
    }

    addComplemento(extra: Ingredient) {
        this.burger.addPart(extra);
        extra.quantity++;
    }


    removePao(bun: Ingredient) {
        this.burger.removePart(bun);
        bun.quantity--;
    }

    removeProteina(protein: Ingredient) {
        this.burger.removePart(protein);
        protein.quantity--;
    }

    removeMolho(sauce: Ingredient) {
        this.burger.removePart(sauce);
        sauce.quantity--;
    }

    removeSalad(salad: Ingredient) {
        this.burger.removePart(salad);
        salad.quantity--;
    }

    removeQueijo(cheese: Ingredient) {
        this.burger.removePart(cheese);
        cheese.quantity--;
    }

    removeComplemento(extra: Ingredient) {
        this.burger.removePart(extra);
        extra.quantity--;
    }

    clear() {
        this.burger = new Hamburguer();
    }

    getCalories() {
        return this.burger.calories;
    }

    getBurger() {
        this.burger.nome = this.nomeLanche;
        console.log(this.burger)
        this.favoritosService.adicionarFavorito(this.burger);
        const foo = <HTMLElement>document.querySelector("body");
        foo.classList.add("aparece");
        return this.burger;
    }

}
