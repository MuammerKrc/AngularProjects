import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popus-home',
  templateUrl: './popus-home.component.html',
  styleUrls: ['./popus-home.component.css']
})
export class PopusHomeComponent implements OnInit {
  modalIpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.modalIpen = !this.modalIpen;
  }
}
