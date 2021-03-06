import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleTreeComponent } from './sample-tree.component';
import { TreeComponent } from './tree/tree.component';
import { RouterModule, Routes} from '@angular/router';
import { TreeModule } from 'angular-tree-component';
import { ContextMenuModule } from 'ngx-contextmenu';
import { FormsModule } from '@angular/forms';



const treesRoutes: Routes = [
  {path: '', component: SampleTreeComponent}
]


@NgModule({
  declarations: [SampleTreeComponent, TreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(treesRoutes),
    TreeModule.forRoot(),
    ContextMenuModule.forRoot()
  ]
})
export class SampleTreeModule { }
