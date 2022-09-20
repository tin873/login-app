import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map, mergeMap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class LoginHttpInterceptor implements HttpInterceptor {


    constructor(
        private _http: HttpClient,
        private _mes: MessageService
    ) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (!environment.production)
        //     console.log('HttpRequest', req);

        return next.handle(this.modifyRequest(req)).pipe(
            map((event: HttpEvent<any>) => {
                // if (!environment.production)
                //     console.log('HttpResponse', event);
                return event;
            }),
            catchError(error => {
                if (error.error) {
                    // if (!environment.production)
                    //     console.log(`Http Error status ${error.status}:`, error?.error?.message);
                    this._mes.add({ severity: 'error', summary: 'Lỗi', detail: error?.error?.message });
                    //return next.handle(this.modifyRequest(req));
                }

                // if (error.status == 500) {
                //     console.log("erro 500", error?.error?.message);
                //     this._mes.add({ severity: 'error', summary: 'Lỗi', detail: error?.error?.message });
                // }

                // if (error.status == 0) {
                //     console.log("erro not response", error?.error?.message);
                //     this._mes.add({ severity: 'error', summary: 'Lỗi', detail: "Lỗi không xác định" });
                // }
                return throwError(error);
            })
        );
    }

    private modifyRequest(req: any) {
        return req.clone({
            setHeaders: { 'Content-Type': 'application/json', }
        });
    }
}
