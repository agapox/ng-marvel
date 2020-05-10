import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-sandbox',
  templateUrl: './avatar-sandbox.component.html',
  styleUrls: ['./avatar-sandbox.component.scss']
})
export class AvatarSandboxComponent implements OnInit {

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
  }

}
