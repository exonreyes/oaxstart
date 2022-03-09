import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {SkeletonComponent} from './layout/skeleton/skeleton.component';
import {FooterComponent} from './layout/footer/footer.component';
import {NavigationComponent} from './layout/topbar/navigation.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {SideBarService} from "@data/services/api/SideBarService";
// import {DashBoardComponent} from './modules/general/dash-board/dash-board.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatIconModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [SideBarService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
