import { Pipe, PipeTransform } from '@angular/core';
import { Player } from 'src/app/shared/player';
import { Team } from 'src/app/shared/team';

@Pipe({
  name: 'TeamFilter'
})
export class TeamFilterPipe implements PipeTransform {

  transform(products: Team[], filter: string = ''): Team[] {
    const filterLowercase = filter.toLowerCase();
    return products.filter(({teamName}) => teamName.toLowerCase().indexOf(filterLowercase) !== -1);
  }

}