import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  paginas: any[] = [
    { titulo: "Home", icone: 'home', url: '/list' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
