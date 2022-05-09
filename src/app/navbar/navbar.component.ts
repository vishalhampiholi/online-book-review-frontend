import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements DoCheck {
  ngDoCheck() {
    console.count('checked');
  }
}