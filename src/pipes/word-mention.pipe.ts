import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'wordMention'
})
export class WordMentionPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) {
            return value
        }

        function replacer(str, p1, p2, offset, s) {
            return '<span class="mentioned-word">' + str.slice(2, str.length - 2) + '*</span>';
        }

        return value.replace(/\*\*([^*]*)\*\*/ig, replacer);
    }
}