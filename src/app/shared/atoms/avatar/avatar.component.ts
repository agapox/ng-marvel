import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() protected type: 'circle' | 'rounder' | 'square' = 'circle';
  @Input() protected withImage: boolean = true;
  @Input() protected size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() protected avatar: Avatar = {
    fullName: 'Jane Doe',
    firstName: 'Jane',
    lastName: 'Doe',
    nickName: 'JaneD',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
  };
  constructor() { }

  ngOnInit() { }

}

interface Avatar {
  fullName: string,
  firstName: string,
  lastName: string,
  nickName: string,
  img: string
}
