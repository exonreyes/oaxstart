import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonComponent} from "@layout/skeleton/skeleton.component";
import {DashBoardComponent} from "@modules/general/dash-board/dash-board.component";

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '', loadChildren: () => import('@modules/security/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'index', component: DashBoardComponent
      }
    ]
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
