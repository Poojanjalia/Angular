import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-dlimg',
  templateUrl: './dlimg.component.html',
  styleUrls: ['./dlimg.component.css']
})
export class DLImgComponent {

 imagePath: string = '';
  ErrorMsg: string ='';
  
  constructor(private ImageService: ImageService) {}
  downloadImg() 
  {
    if (!this.imagePath) 
    {
      console.error("Please enter a file name");
      return;
    }
    else{
      this.ErrorMsg="Wrong name";
    }
    
    this.ImageService.download1(this.imagePath).subscribe(
      blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = this.imagePath;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      },
      error => 
      {
        console.error("Download failed:", error);
      }
    );
  }
}