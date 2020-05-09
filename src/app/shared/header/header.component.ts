import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected mobileMenuActive: boolean = false;
  protected navbarItems: MenuItem[] = [
    {
      name: 'Home',
      class: '',
      url: 'home',
      children: []
    },
    {
      name: 'Link 2',
      class: '',
      url: '404',
      children: []
    },
    {
      name: 'Sandbox',
      class: '',
      url: 'sandbox',
      children: []
    },
    {
      name: 'Dropdown',
      class: '',
      url: '404',
      children: [
        {
          name: 'Link 1',
          class: '',
          url: '404',
          children: []
        },
        {
          name: 'Link 2',
          class: '',
          url: '404',
          children: []
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.navbarItems)
  }

  handleHamburgerClick() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

}

interface MenuItem {
  name: string,
  class: string,
  url: string,
  children: MenuItem[]
}
