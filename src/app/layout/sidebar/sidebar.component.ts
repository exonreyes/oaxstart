import {Component, OnInit} from '@angular/core';
import {SideBarService} from "@data/services/api/SideBarService";
import {faHourglass} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  iFaHourglass=faHourglass
  constructor(private sideBarService: SideBarService) {

  }

  ngOnInit(): void {
  }

}
