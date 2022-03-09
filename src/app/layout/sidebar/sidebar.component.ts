import {Component, OnInit} from '@angular/core';
import {SideBarService} from "@data/services/api/SideBarService";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons/faMicrochip";
import {faLaptopMedical} from "@fortawesome/free-solid-svg-icons/faLaptopMedical";

@Component({
  selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  iApps = faMicrochip;
  iMedical = faLaptopMedical;

  constructor(private sideBarService: SideBarService) {

  }

  ngOnInit(): void {
  }

}
