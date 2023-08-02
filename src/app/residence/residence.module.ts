import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidenceListComponent } from './residence-list/residence-list.component';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { ResidenceEditComponent } from './residence-edit/residence-edit.component';
import { ResidenceRouterModule } from './residence-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ResidenceListComponent,
    ResidenceDetailComponent,
    ResidenceEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    ResidenceRouterModule,
    CommonModule,

  ],
  exports:[ResidenceListComponent]
})
export class ResidenceModule { }
