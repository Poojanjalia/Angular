import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  constructor() {this.encodeImage();}
  imagePathh: string = ''; 
  

  encodeImage() {
    fetch(this.imagePathh).then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imagePathh = reader.result as string;
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => console.error('error', error));
  }
}