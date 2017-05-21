import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'wordMakeBold'
})
export class WordMakeBoldPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) {
            return value
        }

        function replacer(str, p1, p2, offset, s) {
            return '<b>' + str.slice(1, str.length - 1) + '</b>';
        }

        return value.replace(/\*([^*]*)\*/ig, replacer);
    }
}