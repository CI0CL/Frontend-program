import { Pipe, PipeTransform } from '@angular/core';
import { Player } from 'src/app/shared/player';

@Pipe({
  name: 'PlayerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(products: Player[], filter: string = ''): Player[] {
    const filterLowercase = filter.toLowerCase();
    return products.filter(({name}) => name.toLowerCase().indexOf(filterLowercase) !== -1);
  }

}
