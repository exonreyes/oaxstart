import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list', templateUrl: './user-list.component.html', styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  topHeader = '';
  public title = {
    nameClassTxtForeground: 'text-white',
    text: 'Usuarios registrados',
    icon_color: '',
    icon: 'assets/img/modules/setting/security/users-group.svg'
  };

  constructor() {

  }


  ngOnInit(): void {
  }

  // @HostListener('window:scroll', ['$event']) doSomething() {
  // if(window.scroll)
  //   if (.body.scrollTop>=50) {
  //     this.topHeader = 'topnav position-fixed';
  //     console.log('Estoy aqui')
  //   } else {
  //     this.topHeader = '';
  //   }
  //   console.log(document.body.scroll);
  //   // console.debug("Scroll Event", document.body.scrollTop);
  //   // see András Szepesházi's comment below
  //   // console.log(    document.documentElement.scrollTop || document.body.scrollTop)
  // }

  // @HostListener('window:scroll', ['$event']) track() {
  //   console.log(window.pageYOffset);
  //   if(window.pageYOffset>0){
  //     this.topHeader='header-stiky';
  //   }else{
  //     this.topHeader='';
  //   }
  // }
}

