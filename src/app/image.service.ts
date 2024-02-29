import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  apiUrl = 'https://localhost:44358/api/Img/PostImage';
  apiUrl2 = 'https://localhost:44358/api/Img/PostImage';
  constructor(private http: HttpClient) { }
  getImage(imagePath:string): Observable<Blob>{
    return this.http.get(this.apiUrl, { responseType: 'blob' });
  }
  postImage(imagePath: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl2}`,imagePath);
  }
  baseUrl = 'https://localhost:44358/api/Img/Get'
  download1(imagePath: string): Observable<Blob>{
    const url = `${this.baseUrl}?imagePath=${imagePath}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  downloadImage(imagePath: string): Observable<Blob> {
    return this.http.get('https://localhost:44358/api/Img/GetImage', {
      responseType: 'blob',
      params: { imagePath: imagePath }
    })
  }
}