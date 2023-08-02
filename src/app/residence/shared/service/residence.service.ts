import { Injectable } from "@angular/core";
import { IResidence } from "../models/residence";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError,tap,map } from "rxjs/operators";
@Injectable({
  providedIn:"root"
})
export class ResidenceListService {
  private readonly RESIDENCE_API_URL = "http://localhost:3000/residence"

  constructor(private http:HttpClient){}

  public getResidence():Observable<IResidence[]>{
    return this.http.get<IResidence[]>(this.RESIDENCE_API_URL).pipe(
      tap(residence =>console.log(residence))
    )
  }

  public getResidenceById(id:number):Observable<IResidence>{
    const url = `${this.RESIDENCE_API_URL}/${id}`
    return this.http.get<IResidence>(url).pipe(
      tap(residence=>console.table(residence)),
      catchError(this.handleError)
    )
  }

  public deleteHotel(id:number):Observable<{}>{
    const url = `${this.RESIDENCE_API_URL}/${id}`

    return this.http.delete<IResidence>(url).pipe(
      catchError(this.handleError)
    )
  }
  public createHotel(residence:IResidence):Observable<IResidence>{
    residence = {
      ...residence,
      imageUrl: "assets/img/window.jpg",
    }
    return this.http.post<IResidence>(this.RESIDENCE_API_URL,residence).pipe(
      tap(residence=>console.log(residence)),
      catchError(this.handleError)
    )
  }

  public updateHotel(residence:IResidence):Observable<IResidence>{
    const url = `${this.RESIDENCE_API_URL}/${residence.id}`
    return this.http.put<IResidence>(url,residence).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse){
    let errorMessage: string
    if(error.error instanceof ErrorEvent){
      console.error(`Il a une erreur: ${error.error.message}`)
      errorMessage= `Il a une erreur: ${error.error.message}`
    } else{
      console.error(
        `Backend returned code ${error.status}` +
        `body was: ${error.error}`
      )
      errorMessage=        `Backend returned code : ${error.status}` +
      `body was: ${error.error}`
    }
    return throwError(
      'Something bad happened; please try again later.' + '\n' + errorMessage
    )
  }
}
