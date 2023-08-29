import { Pipe, PipeTransform } from '@angular/core';
import { Team } from 'src/app/shared/team';

@Pipe({
  name: 'TeamFilter'
})
export class TeamFilterPipe implements PipeTransform {

  transform(products: Team[], filter: string = ''): Team[] {
    const filterLowercase = filter.toLowerCase();
    return products.filter(({name}) => name.toLowerCase().indexOf(filterLowercase) !== -1);
  }

}