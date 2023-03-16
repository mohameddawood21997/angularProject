import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromitionAdsService {
 ads:string []=[];
  constructor() { 
    this.ads=[
       'new ad1',
       'new ad2',
       'new ad3',
       ' ',
       'new ad4',
    ]
  }

  getAds():Observable<string>{
    return new Observable<string>((observer)=>{
      var i=0;
      var timerAds=    setInterval(()=>{
          if(i==this.ads.length){
            observer.complete();
          }
          if(this.ads[i]==' '){
            observer.error();
          }
          observer.next(this.ads[i]);
          i++;
         },2000)
         return {
          unsubscribe(){
                clearInterval(timerAds);
          }
         }
    })
  }
}
