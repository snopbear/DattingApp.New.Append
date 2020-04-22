import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/custom-services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;


  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    // this.authService.logout();
  }

  ngOnDestroy() {
   
  }

}
