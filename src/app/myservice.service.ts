import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url = 'https://datapro-d01a4-default-rtdb.firebaseio.com/productions.json';

  private headers = new HttpHeaders({'Content-Type':'production/json'})
  constructor(private http:HttpClient) { }

  mysave(add:any[]){
    // post method is use for send data to database, but is main alag alag folder ban jaty han
    //  return this.http.post(this.url , adds) 

    // put method is use for send data to database  
      return this.http.put(this.url , add, {headers: this.headers})
  }

  myfetch(){

    return this.http.get(this.url)
  }
}
