import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  // transform(value: number): number {
  //   return value*value;
  // }


  transform(id: string,date:string) {
    let year:string=id[1]+id[2];
    let month:string=id[3]+id[4];
    let day:string=id[5]+id[6];;

    if(date=="MM"){
      
      return month;
    }
    else if(date=="YY"){
    
      return year;
    }
   else if(date=="DD"){
     
      return day;
    }else{
      return '19'+year+'-'+month+'-'+day;
    }
    
  }

 
}

//2970218  2200658