import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Ingredient } from 'src/app/models/ingredientes/ingredientes';
import { Hamburguer } from 'src/app/models/produtos/hamburger';
import { IngredientService } from 'src/app/services/ingrediente-service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
    standalone: false,
})
export class AdminPage implements OnInit {
    exibirConteudo = false;
    selectedItem: any;
    burger: Hamburguer;
    alertController: any;
    loadingCtrl: any;
    ingredientService: any;

    expandir() {
        this.exibirConteudo = !this.exibirConteudo;
    }

    selectedItem1: string;
    vegetais = [{
        name: "alface",
        type: "hamburguer",
        category: "vegetal",
        calories: 10,
        quantity: 0,
    },
    {
        name: "tomate",
        type: "hamburguer",
        category: "vegetal",
        calories: 100,
        quantity: 0,
    },
    {
        name: "picles",
        type: "hamburguer",
        category: "vegetal",
        calories: 1000,
        quantity: 0,
    },
    ];

    selectedItem2: any;
    items2: any[];
    /*constructor(
        private formBuilder: FormBuilder,
        private ingredientService: IngredientService,
        private loadingCtrl: LoadingController,
        private alertController: AlertController,
        private router: Router,
    ) { }
*/
    AdminForm!: FormGroup;

    ngOnInit() {
        /*this.AdminForm = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            category: ['', Validators.required],
            calories: ['', Validators.required],
        });*/
    }

    async presentAlert(header: string, subHeader: string, message: string) {
        const alert = await this.alertController.create({
            header: header,
            subHeader: subHeader,
            message: message,
            buttons: ['OK'],
        });
        await alert.present();
    }

    async showLoading(mensagem: string, duracao: number) {
        const loading = await this.loadingCtrl.create({
            message: mensagem,
            duration: duracao,
        });
        loading.present();
    }

    SubmitIngredient() {
        console.log("entr  ou");
        if (this.AdminForm.valid) {
            const ingredient1: Ingredient = {
                name: this.AdminForm.value.name,
                type: this.AdminForm.value.type,
                category: this.AdminForm.value.category,
                calories: this.AdminForm.value.calories,
                quantity: this.AdminForm.value.quantity,
            };
            this.ingredientService
                .createIngredient(ingredient1)
                .then(() => {
                    this.presentAlert("sucesso", " ", " ingrediente cadastrado com sucesso");
                    this.AdminForm.reset();
                })
                .catch(() => {
                    this.presentAlert("erro", " ", " ingrediente não cadastrado com sucesso");
                });
        }
    }
    constructor() {
        this.burger = new Hamburguer();
    }

    addVegetable(vegetable: Ingredient): void {
        this.burger.addPart(vegetable);
        vegetable.quantity++;
    }

    addBun(bun: Ingredient) {
        this.burger.addPart(bun);
    }

    addProtein(protein: Ingredient) {
        this.burger.addPart(protein);
    }

    addSauce(sauce: Ingredient) {
        this.burger.addPart(sauce);
    }

    addSalad(salad: Ingredient) {
        this.burger.addPart(salad);
    }

    addCheese(cheese: Ingredient) {
        this.burger.addPart(cheese);
    }

    addExtra(extra: Ingredient) {
        this.burger.addPart(extra);
    }

    removeVegetable(vegetable: Ingredient): void {
        this.burger.removePart(vegetable);
        vegetable.quantity--;
    }

    removeBun(bun: Ingredient) {
        this.burger.removePart(bun);
    }

    removeProtein(protein: Ingredient) {
        this.burger.removePart(protein);
    }

    removeSauce(sauce: Ingredient) {
        this.burger.removePart(sauce);
    }

    removeSalad(salad: Ingredient) {
        this.burger.removePart(salad);
    }

    removeCheese(cheese: Ingredient) {
        this.burger.removePart(cheese);
    }

    removeExtra(extra: Ingredient) {
        this.burger.removePart(extra);
    }

    clear() {
        this.burger = new Hamburguer();
    }

    getCalories() {
        return this.burger.calories;
    }

    getBurger() {
        return this.burger;
    }
    selecionarCategoria(selectedItem1: { target: any; }) {
        this.selectedItem2 = null;
        this.items2 = [];
        const selectedValue = selectedItem1.target.value;
        if (selectedValue == "pizza") {
            this.items2 = ["massa", "molho", "queijo", "proteina", "vegetais", "cogumelo", "temperos", 'fruta', "complemento"]
        }

        if (selectedValue == "hotdog") {
            this.items2 = ["pão", "proteina", "molho", "vegetal", "complemento"]
        }


        if (selectedValue == "hamburguer") {
            this.items2 = ["pão", "proteina", "molho", "vegetal", "queijo", "complemento"]
        }
    }
}
