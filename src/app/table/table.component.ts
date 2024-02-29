import { Component } from '@angular/core';
import { SelectableMode, SelectableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public selectedItems: any[] = [];
  public selectedColumn : string []= ['ID', 'Name', 'Email', 'Number'];
  public gridData: any[] = [
    {
      ID: 1,
      Name: "P",
      Email: "p@gmail.com",
      Age: 5,
      Number: 9172481871
    },
    {
      ID: 2,
      Name: "x",
      Email: "x@gmail.com",
      Age: 9,
      Number: 9978886614
    },
    {
      ID: 3,
      Name: "Xs",
      Email: "xs@gmail.com",
      Age: 6,
      Number: 9428945624
    },
    {
      ID: 4,
      Name: "Xr",
      Email: "xr@gmail.com",
      Age: 8,
      Number: 9428945624
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
  
  public selectedRowData: any[] = [];

  public onSelectionChange(event: any): void {
    const selectedItems = event.selectedRows.map((row: any) => row.dataItem);
  
    if (event.deselectedRows.length > 0) {
      const deselectedItems = event.deselectedRows.map((row: any) => row.dataItem);
      this.selectedRowData = this.selectedRowData.filter(item => !deselectedItems.includes(item));
    }
  
    this.selectedRowData = [...this.selectedRowData, ...selectedItems]; //spread operator
  }
  
}