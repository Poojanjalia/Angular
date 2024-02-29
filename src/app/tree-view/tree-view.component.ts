import { Component } from '@angular/core';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { Observable, of } from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  imports: [TreeViewModule]
})
export class TreeViewComponent {
  public selection: SelectableSettings = { mode: "multiple" };
  public checkedKeys: any[] = [];
  public data: any[] = [
    {
      text: "Cars",
      items: [{ text: "SUVs" },
      { text: "Sedans", items: [{ text: "Volvo" }] },
      { text: "Hatchbacks" }
      ],
    },
    {
      text: "BMW",
      items: [{ text: "X7" },
      { text: "M340i" },
      { text: "118d" }],
    },
  ];
 


  public checkedKey: any[] = [   
  ]
  public company: any[] = [
  
    {
      categoryName: "Nissan",
      subCategories: [
        { subCategoryName: "Patrol" },
        { subCategoryName: "GTR" },
        { subCategoryName: "Maxima" }
      ]
    },
    {
      categoryName: "Jaguar",
      subCategories: [
        { subCategoryName: "Xf" },
        { subCategoryName: "XJl" },
        { subCategoryName: "I-Pace" }
      ]
    },
    {
      categoryName: "LandRover",
      subCategories: [
        { subCategoryName: "Evoque" },
        { subCategoryName: "Velar" },
        { subCategoryName: "SV" }
      ]
    },
    {
      categoryName: "Toyota",
      subCategories: [
        { subCategoryName: "LC300" },
        { subCategoryName: "Corola" },
        { subCategoryName: "Velfire" }
      ]
    }
  ]
}