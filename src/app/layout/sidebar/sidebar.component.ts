import {Component, OnInit} from '@angular/core';
import {SideBarService} from "@data/services/api/SideBarService";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons/faMicrochip";
import {faLaptopMedical} from "@fortawesome/free-solid-svg-icons/faLaptopMedical";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";
import {faHospitalUser} from "@fortawesome/free-solid-svg-icons/faHospitalUser";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons/faBusinessTime";

@Component({
  selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  iColaborator = faHospitalUser;
  iMedical = faLaptopMedical;
  iBusiness=faBusinessTime;

  constructor(private sideBarService: SideBarService) {

  }

  ngOnInit(): void {
  }

}
