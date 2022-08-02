import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-confia',
  templateUrl: './conta-confia.component.html',
  styleUrls: ['./conta-confia.component.css']
})
export class ContaConfiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange(): void {
    console.log('slide change');
  }
}
