import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(cardNum: string): string {
    // return cardNum.replace(/\s+/g, '').replace(/(\d{4})/g, '$1-').trim();
    return [...cardNum].map((chr, idx) => (idx + 1) % 4 ? chr : chr + '-').join('').trimLeft();
  }

}
