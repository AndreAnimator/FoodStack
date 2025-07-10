import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingredient } from '../models/ingredientes/ingredientes';
//começa a mudança de banco de dados aqui

@Injectable({
    providedIn: 'root'
})
export class IngredientService {

    /* private ingredientsCollection: AngularFirestoreCollection<Ingredient>; */
    private ingredients: Observable<Ingredient[]>;

    constructor() {
        /*
        this.ingredientsCollection = this.firestore.collection<Ingredient>('ingredients');
        this.ingredients = this.ingredientsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as Ingredient;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
        */
    }
/*
    createIngredient(ingredient: Ingredient): Promise<void> {
        const id = this.firestore.createId();
        return this.firestore.doc(`ingredients/${id}`).set({
            id,
            type: ingredient.type,
            name: ingredient.name,
            category: ingredient.category,
            calories: ingredient.calories
        });
    }
*/

    getIngredients(): Observable<Ingredient[]> {
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient) {
        /*
        return this.firestore.collection<Ingredient>('ingredients').add(ingredient);
        */
    }

    getIngredientsByCategory(category: string): Observable<Ingredient[]> {
        return this.ingredients.pipe(
            map(ingredients => ingredients.filter(ingredient => ingredient.category === category))
        );
    }

    getTipo() {
        /*
        return this.db.list('tipo').valueChanges();
        */
    }

    getCategoria(selectedValue: string) {

        // return this.db.list('categoria', ref => ref.orderByChild('parent').equalTo(selectedValue)).valueChanges();
    }

}
