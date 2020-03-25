import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule, Routes} from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';

const mapRoutes: Routes = [
  {path: '', component: MapComponent}
]



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes),
    ComponentsModule
  ]
})
export class MapModule { }