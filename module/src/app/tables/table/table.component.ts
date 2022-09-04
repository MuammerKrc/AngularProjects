import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data = [
    { name: 'Can', age: 20, job: "Mimar", employed: 'Evet' },
    { name: 'Canan', age: 20, job: "Mimar", employed: 'Evet' },
    { name: 'Muamemr', age: 20, job: "Mimar", employed: 'Evet' },
    { name: 'Dilek', age: 20, job: "Mimar", employed: 'Evet' }
  ];
  headers:[
    {key:'employed',label:'Aldığı ücretten memnun mu?'},
    {key:'name',label:'Ad Soyad'},
    {key:'age',label:'Yaş'},
    {key:'job',label:'Meslek'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
