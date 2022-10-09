import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Nouveau titre";
  url1 = "https://angular.io/assets/images/logos/angular/angular.png";
  url2 = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
  url=this.url1;
  changeLogo(){
    if(this.url == this.url1)
      this.url = this.url2;
    else
      this.url = this.url1;
  }
  getReversed(str:string){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
      reversed+=str.substring(i,i+1);

    }
    return reversed;
  }
  classes=["l1info","l2dsi","l2sem","l2rsi"];


}
