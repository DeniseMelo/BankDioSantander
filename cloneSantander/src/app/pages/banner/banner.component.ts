import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  cliente:Array<Cliente> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
