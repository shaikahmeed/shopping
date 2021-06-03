import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  public ad = 'assets/iphone.jpg';
  public msg = '';
  public styleObj = {
    'width':'100px',
    'height':'100px'
  };

  public showAd1(){
    this.ad = 'assets/oneplus.jpg';
  }
  public showAd2(){
    this.ad = 'assets/fridge.jpg';
  }


  public StopAnimation(e){
    e.target.start();
  }
  public StartAnimation(e){
    e.target.stop();
  }

  public Drag(){
    this.msg = 'You can drag the div';
    console.log('drag')
    this.styleObj = {
      'width':'200px',
      'height':'200px'
    };
  }

  public Drop(){
    this.msg = 'You can drop the div';
    this.styleObj = {
      'width':'100px',
      'height':'100px'
    };
  }

}
