import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{

    public transform(value: any[], filterText: string) {
        return filterText.length>3 ? value.filter(x => x.title.toLowerCase().includes(filterText.toLowerCase())): value;
    }

}
