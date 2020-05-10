import { Component, OnInit, ViewChildren, ElementRef, QueryList, ViewContainerRef } from '@angular/core';
import { AvatarSandboxComponent } from './avatar-sandbox/avatar-sandbox.component';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  @ViewChildren('tabItem') protected tabsElements: QueryList<ElementRef>;
  protected componentItems: any[] = [];
  protected avatarTypes = [
    {
      name: 'Square',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      withImage: true
    },
    {
      name: 'rounded',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      withImage: true
    },
    {
      name: 'circle',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      withImage: true
    },
    {
      name: 'Square',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      withImage: false
    },
    {
      name: 'rounded',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      withImage: false
    },
    {
      name: 'circle',
      items: ['xs', 'sm', 'md', 'lg', 'xl'],
      withImage: false
    }
  ];

  constructor() { }

  ngOnInit() {
    this.componentItems.push({
      name: 'Avatars',
      component: '<app-avatar-sandbox></app-avatar-sandbox>'
    })
    console.log(this.componentItems)
  }

  handleOpenTab(itemNumber: number) {
    this.tabsElements.forEach((tab, i) => {
      tab.nativeElement.classList.remove('open');
    });
    console.log(this.tabsElements)
    this.tabsElements.filter((tab,i) => itemNumber === i && tab.nativeElement.classList.add('open'));
  }

}
