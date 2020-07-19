import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  @Input() color: string = '';
  @Input() ySize: 'medium' | 'large' | 'fullheight' | '' = ''; // 'is-medium' | 'is-large' | 'is-fullheight' | ''
  @Input() classColor: 'primary' | 'info' | 'success' | 'link' | 'warning' | 'danger' | 'light' | 'dark' | '' = '';
  @Input() hasGradient: boolean = false; // 'is-bold'
  constructor() { }

  ngOnInit() {
  }

  getYSizes(classesArr: Array<string>): Array<string> {
    this.ySize !== '' && classesArr.push(`is-${this.ySize}`);
    return classesArr;
  }

  getClassColor(classesArr: Array<string>): Array<string> {
    if (this.color === '') {
      this.hasGradient && this.classColor !== '' && classesArr.push('is-bold');
      this.classColor !== '' && classesArr.push(`is-${this.classColor}`);
    }
    return classesArr;
  }

  getClases(): Array<string> {
    let classesArr = [];
    this.getYSizes(classesArr);
    this.getClassColor(classesArr);

    return classesArr;
  }

}
