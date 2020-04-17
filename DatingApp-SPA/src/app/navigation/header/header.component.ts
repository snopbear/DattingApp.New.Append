import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
 //  authSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    // this.authService.logout();
  }

  ngOnDestroy() {
    // this.authSubscription.unsubscribe();
  }

}
