import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let head of headElements">{{head}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <td>{{item.id}}</td>
          <td>{{item.first_name}}</td>
          <td>{{item.last_name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.n_document}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  data: any[];
  emails: any[];
  headElements = ['ID', 'Nombre', 'Apellido', 'Correo Electronico', 'Documento']
  constructor() { }

  ngOnInit(): void {
    //data from json.
    this.data = [
      {
        "id": 1,
        "email": "haha@example.com",
        "first_name": "haha",
        "last_name": "haha",
        "n_document": "333222244",
        "phone_number": "34445556677"
      },
      {
        "id": 2,
        "email": "rfg@example.com",
        "first_name": "hplalslas",
        "last_name": "jdjdjd",
        "n_document": "23232344",
        "phone_number": "34453321454"
        
      },
      {
        "id": 3,
        "email": "cjqoxec134@nowdigit.com",
        "first_name": "juan ",
        "last_name": "Hhh",
        "n_document": "387374",
        "phone_number": "3887890987"
        
      },
      {
        "id": 4,
        "email": "vhhgh@gm.com",
        "first_name": "Nbbbv",
        "last_name": "Gggg",
        "n_document": "155555666",
        "phone_number": "3556677777"
        
      },
      {
        "id": 5,
        "email": "ndjdndb@gm.com",
        "first_name": "Jajsjsjsjs",
        "last_name": "Hehehe",
        "n_document": "18373737",
        "phone_number": "3838370000"
        
      }
    
    ]
    this.getEmail()
  }

  getEmail() {
    this.emails = this.data.map( item => item.email )
    console.log(this.emails);
  }
}

