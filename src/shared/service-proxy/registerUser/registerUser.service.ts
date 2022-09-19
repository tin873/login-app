import { CreateUserInput } from './models/createUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RegisterUserService {


    private API_BASE_URL: string;

    constructor(
        private _http: HttpClient
    ) {
        this.API_BASE_URL = env.remoteServiceBaseUrl !== undefined && env.remoteServiceBaseUrl !== null ? env.remoteServiceBaseUrl : "";
    }

    createUser(input: CreateUserInput){
        let url = `${env.remoteServiceBaseUrl}/api/user/CreateUser`;
        const content = JSON.stringify(input);
        return this._http.post<CreateUserInput>(url, content);
    }
}
