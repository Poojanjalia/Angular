import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { DLImgComponent } from './dlimg/dlimg.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { TreeViewComponent } from './tree-view/tree-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-component', pathMatch: 'full' },
  { path: 'button', component: ButtonControlPanelComponent },
  { path: 'dlimg', component: DLImgComponent },
  {path: 'hide', component: ImageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'table', component: TableComponent},
  {path: 'treeView', component: TreeViewComponent}
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
