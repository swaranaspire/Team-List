import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService {
deleteVehicle():Observable<any>{
  return this.httpClient.delete('https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b77')
}

getteammember(): Observable<any>{
  return this.httpClient.get('https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b77')
}

getFilteredData(filterTerm: string): Observable<any>{
  return this.httpClient.get('https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b77'+'?filter='+filterTerm)
}
  constructor(private httpClient:HttpClient) { }
}
