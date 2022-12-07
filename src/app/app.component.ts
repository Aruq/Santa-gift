import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http:HttpClient){}
  title = 'santa-gift';
  onSubmit(data: any){
    console.warn(data)
    this.http.post('http://192.168.211.75:8082/api/v1/secret-santa',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data)
  }
  
  
}
