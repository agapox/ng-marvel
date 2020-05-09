import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng-marvel';

  @ViewChild('mainContainer', { static: false }) mainContainerEl: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.setMainContHeight();
  }

  setMainContHeight() {
    const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    const footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
    const heightStyle = `calc(100vh - ${headerHeight + footerHeight}px)`;
    this.renderer.setStyle(this.mainContainerEl.nativeElement, 'min-height', heightStyle);
  }
}
