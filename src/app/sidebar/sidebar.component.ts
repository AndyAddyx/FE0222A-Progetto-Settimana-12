import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn)=>{
      isLoggedIn = isLoggedIn
    })
  }

}
