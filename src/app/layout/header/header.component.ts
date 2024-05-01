import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public menuActive: boolean = false;
  @ViewChild('menus') menus!: ElementRef;

  public onMenu() {
    this.menus.nativeElement.classList.toggle('menu-active');
    this.menuActive = !this.menuActive;
    if (this.menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

}
