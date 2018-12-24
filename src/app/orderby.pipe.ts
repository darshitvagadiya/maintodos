import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: Todo[]): any {
 	return array.sort((a, b) => {
	return new Date(a.edited_at || a.created_at).getTime() - new Date(b.edited_at || b.created_at).getTime()}).reverse();
  	
	//to sort by title
  	// return array.sort((a, b) => {
  	// 	return a.text.localeCompare(b.text);
  	// })

  	//to sort by description
  	// return array.sort((a, b) => {
  	// 	return a.description.localeCompare(b.description);
  	// })

  }

}
