import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators'
 
import { environment } from '../../../environments/environment';
import { SharedService } from '../shared/shared.service';
 


@Injectable({
  providedIn: 'root'
})
export class FormCreatorService implements OnInit {
  private _http: HttpClient;
  private _router: Router;
  private _sharedService: SharedService;

 
  constructor(http: HttpClient, router: Router, sharedService: SharedService) {
    this._http = http;
    this._router = router;
    this._sharedService = sharedService;
  }

  ngOnInit(): void {

  }
 
  FormsList(sourceType: number, sourceId: string ) {
    debugger
 
    return this._http.get("", {} ).pipe(tap(data => data));
    }
}
