import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { AuthService } from 'src/app/shared/services/custom-services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/shared/services/alerts/alertify/alertify.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();


  constructor(private authService: AuthService, private route: Router, private alertify: AlertifyService, ) { }

  ngOnInit() {

  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    if (this.authService.loggOut()) {
      this.alertify.warning('logged out Successfully');
      this.route.navigate(['login']);
    }
  }
}
