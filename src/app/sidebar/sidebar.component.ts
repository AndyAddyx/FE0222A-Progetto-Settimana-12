import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    'class': 'p-0 m-0'
  },
})
export class SidebarComponent 
  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}