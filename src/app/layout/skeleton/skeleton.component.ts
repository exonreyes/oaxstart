import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SideBarService} from "@data/services/api/SideBarService";

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})

export class SkeletonComponent implements OnInit {
  @ViewChild('sideTogglet') title!: ElementRef;
  toggled = false;

  constructor(private sidebarService: SideBarService) {
  }

  ngOnInit(): void {
    this.sidebarService.change.subscribe(isOpen => this.toggled = isOpen);
  }

  onToggle() {
    this.sidebarService.toggle();
  }

  // Evento disparado al hacer touch/click en el area principal de la pantalla,
  // como comodidad para minimizar el menu sidebar
  eventContent() {
    if (window.innerWidth >= 992) return
    if (this.title.nativeElement.classList.contains('sidenav-toggled')) {
      this.sidebarService.toggle();
    }
    console.log("Clickeado")
  }
}
