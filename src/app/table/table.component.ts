import { Component } from '@angular/core';
import { SelectableMode, SelectableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public selectedItems: any[] = [];
  public selectedColumn : string []= ['ID', 'Name', 'Email', 'Age'];
  public gridData: any[] = [
    {
      ID: 1,
      Name: "P",
      Email: "p@gmail.com",
      Age: 5,
    },
    {
      ID: 2,
      Name: "x",
      Email: "x@gmail.com",
      Age: 9
    },
    {
      ID: 3,
      Name: "Xs",
      Email: "xs@gmail.com",
      Age: 6
    }
  ]
  public mode: SelectableMode = "multiple";
  public selectableSettings?: SelectableSettings;

  constructor() {
    this.setSelectableSettings();
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      checkboxOnly: false, 
      mode: this.mode,
      drag: false
    };
  }
  
  public selectedRowData: any = [];
  public onSelectionChange(selection: any):void {
    if (selection.selectedRows.length > 0) {
      const selectedItem = selection.selectedRows[0].dataItem;
      this.selectedRowData = selectedItem;
    }
  }
}