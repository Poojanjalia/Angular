import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TableComponent } from './table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DLImgComponent } from './dlimg/dlimg.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ButtonControlPanelComponent,
        LoginComponent,
        TableComponent,
        DLImgComponent,
        ImageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        GridModule,
        BrowserAnimationsModule,
        ButtonsModule,
        LabelModule,
        InputsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DateInputsModule,
        NotificationModule,
        HttpClientModule,
        TreeViewModule,
        TreeViewComponent,
      NotificationModule,
      AppRoutingModule
    ]
})
  
export class AppModule { }