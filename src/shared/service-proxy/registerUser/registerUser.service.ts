import { CreateUserDto } from './models/createUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RegisterUserService {
    constructor(private _http: HttpClient){

    }

    createUser(input: CreateUserDto){
        let url = `${env.remoteServiceBaseUrl}/api/user/CreateUser`;
        return this._http.post<any>(url, input);
    }
    getWether(){
        let url = `${env.remoteServiceBaseUrl}/weather-forecast`;
        return this._http.get<any>(url);
    }
}
