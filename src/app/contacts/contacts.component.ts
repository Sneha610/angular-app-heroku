import { Component, OnInit } from '@angular/core';
//importing below class so thhat the function in the class can be accessed from here
import {ContactService} from '../contact.service';
import { FormsModule } from '@angular/forms'

//importing below class so thhat the data members inside the class can be accessed from here
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  //using providers, teh mentioned class can be used in the contrcutor, classes, etc
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts : Contact[];
  //din't understand the below line
  contact : Contact;

  first_name:string;
  last_name: string;
  phone: string;


  constructor(private contactService:ContactService) { }

  addContact()
  {
      const newContact = {
      first_name : this.first_name,
      last_name : this.last_name,
      phone : this.phone,
    }
    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact);

        //the below is the function definition of nginit() method, Why we are mentioneing here is, once after we clcik on add, if we reload the page, the new contact will be displayed. this is because, fetching all contacts inside nginit funation  will be executed once after the loading the page. to vaoid this, fetching the contacts is mentioned below after adding  contact 
      this.contactService.getContacts()
      .subscribe(contacts => 
        this.contacts = contacts); 
      });

  }

  deleteContact(id:any)
  {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data => {
        if(data.n==1)
        {
          for(var i=0; i<contacts.length; i++)
          {
            if(contacts[i]._id == id)
            {
              //below method for removal
              contacts.splice(i,1);
            }
          }
        }
      });
  }

  // once application is loaded, this componenet will be initialised and  this nginit function will be called
  //subecribe means whenever there is change, function is executed
  ngOnInit(): void {
    this.contactService.getContacts()
        .subscribe(contacts => 
          this.contacts = contacts); 
  }

}
