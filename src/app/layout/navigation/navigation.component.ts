import {Component, OnInit} from '@angular/core';
import {SideBarService} from "@data/services/api/SideBarService";
import {faBars, faChevronRight,faSignal} from '@fortawesome/free-solid-svg-icons';
import {faBell,faDotCircle, faEnvelope} from "@fortawesome/free-regular-svg-icons";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  iToggle = faBars;
  iChevronRight = faChevronRight;
  iBell = faBell;
  iEnvelope = faEnvelope;
  iSignal=faSignal
  ifaBookmark=faDotCircle;


  constructor(private sidebarService: SideBarService) {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.sidebarService.toggle();
    console.log('Prueba')
  }

  isToggled() {
    return this.sidebarService.isOpen;
  }
}
