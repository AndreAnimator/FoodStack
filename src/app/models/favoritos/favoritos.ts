import { Cliente } from '../cliente/cliente';
import { Hamburguer } from '../produtos/hamburger';
import { HotDog } from '../produtos/hot-dog';
import { Pizza } from '../produtos/pizza';

export class Favoritos {
    lanches: {
        burger: Hamburguer[];
        hotDog: HotDog[];
        pizza: Pizza[];
    };

    constructor() {
        this.lanches = { burger: [], hotDog: [], pizza: [] };
        
    }

    adicionarFavorito(lanche: Hamburguer | HotDog | Pizza): void {
        switch (lanche.constructor) {
            case Hamburguer:
                this.lanches.burger.push(lanche as Hamburguer);
                break;
            case HotDog:
                this.lanches.hotDog.push(lanche as HotDog);
                break;
            case Pizza:
                this.lanches.pizza.push(lanche as Pizza);
                break;
            default:
                throw new Error('Lanche inválido.');
        }
    }

    removerFavorito(lanche: Hamburguer | HotDog | Pizza): void {
        switch (lanche.constructor) {
            case Hamburguer:
                this.lanches.burger = this.lanches.burger.filter((item) => item.nome !== lanche.nome);
                break;
            case HotDog:
                this.lanches.hotDog = this.lanches.hotDog.filter((item) => item.nome !== lanche.nome);
                break;
            case Pizza:
                this.lanches.pizza = this.lanches.pizza.filter((item) => item.nome !== lanche.nome);
                break;
            default:
                throw new Error('Lanche inválido.');
        }
    }
}
