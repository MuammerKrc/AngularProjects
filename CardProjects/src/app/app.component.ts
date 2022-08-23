import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CardProjects';
  letter = "abcdefghklsmcadeqcbgfhfre";
  sembol = "!'^+%&/()=?_-";
  number="123456789";

  passwordLength: number;
  useLetter: boolean = false;
  useSembol: boolean = false;
  useNumber: boolean = false;

  createdPassword: string='';

  modifyPasswrodLength($event:any) {
    console.log($event.target.value);
    if(!isNaN($event.target.value))this.passwordLength=$event.target.value;

  }
  modifyUseLetter() {
    this.useLetter = !this.useLetter;
  }
  modifyuseNumber() {
    this.useNumber = !this.useNumber;
  }

  modifyuseSembol() {
    this.useSembol = !this.useSembol;
  }


  createPassword() {
    this.createdPassword='';
    var validChars: string;

    if (this.useLetter) validChars += this.letter;
    if (this.useNumber) validChars += this.number;
    if (this.useSembol) validChars += this.sembol;

    for (let i = 0; i < this.passwordLength; i++) {
      const index =Math.floor(Math.random()*validChars.length);
      this.createdPassword+=validChars[index];
    }
  }
}
