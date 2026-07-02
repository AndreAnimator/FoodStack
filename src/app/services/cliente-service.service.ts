import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, take, tap } from 'rxjs';
import { Cliente } from '../models/cliente/cliente';
import { UserResponse } from '../models/cliente/userResponse';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    api_key = environment.API_KEY;
    // private user$ = new BehaviorSubject<User>(null);
    private httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private http: HttpClient) { }
    private users: { username: string, password: string }[] = [
        { username: 'Andre@gmail.com', password: '1234' },
        { username: 'Felipe@gmail.com', password: 'abcd' },
        { username: 'Paulo@gmail.com', password: 'abcd' }
    ];

   login(email: string, password: string){
        return this.http
        .post(
        `${environment.API_KEY}/login`,
        { email, password }, this.httpOptions
        )
    }

    cadastrar(name: string, surname: string, email: string, password: string) {
        return this.http
        .post(
            `${environment.API_KEY}/signup`,
            { name, surname, email, password }, {responseType: 'text'}
        )
    }
}
