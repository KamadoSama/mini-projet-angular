import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ResidenceDetailComponent } from "./residence-detail/residence-detail.component";
import { ResidenceEditComponent } from "./residence-edit/residence-edit.component";
import { residenceEditGuard } from "./shared/guards/residence-edit.guard";
import { ResidenceDetailGuard } from "./shared/guards/residence-detail.guard";

const routes = [
  {path:'residence/:id',component:ResidenceDetailComponent,canActivate:[ResidenceDetailGuard ]},
  {path:'residence/:id/edit',component:ResidenceEditComponent, canDeactivate:[residenceEditGuard]}
]
@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ResidenceRouterModule {}
