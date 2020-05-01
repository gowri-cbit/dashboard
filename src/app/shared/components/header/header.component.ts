import { Component, OnInit, Output } from '@angular/core';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
this.toggleSideBarForMe.emit();
setTimeout(() => {
  window.dispatchEvent(
      new Event ('resize')
  );
}, 300);
  }

}
