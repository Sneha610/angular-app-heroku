import { Injectable } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';

import {Headers} from '@angular/http';

//didn't umderstand the below line
import {Contact} from './contact';
//learm below line after further creatyion
//import 'rxjs/app/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  //retrieving contacts
  getContacts()
  {
    console.log("inside getContacts()");
    return this.http.get('https://shielded-springs-97731.herokuapp.com/api/contacts')
      .pipe(map((response: any) => response.json()));   //initially .map(res => res.json());
  }

  addContact(newContact:Contact)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://shielded-springs-97731.herokuapp.com/api/contacts', newContact, {headers:headers})
      .pipe(map((response: any) => response.json()));

  }
  //delete method
  deleteContact(id:string)
  {
    return this.http.delete('https://shielded-springs-97731.herokuapp.com/api/contacts/'+id)
      .pipe(map((response: any) => response.json()));
  }
  }