import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(dateTimeValue, createTime: any): string {
  	let remainingTime: string;

  	let seconds = (new Date().getTime() - new Date(dateTimeValue).getTime()) / 1000;

  	if(seconds < 10){
  		remainingTime = 'Now';
  		// console.log(seconds);
  	}else if(seconds < 60){
  		remainingTime = Math.floor(seconds) + ' seconds ago';
  		// console.log(seconds);
  	}else if(seconds < 3600){
  		remainingTime = Math.floor(seconds / 60) + ' minutes ago';
  	}else if(seconds < 86400){
  		remainingTime = Math.floor(seconds / 3600) + ' hour ago';
  	}else if(seconds > 86400){
  		remainingTime = Math.floor(seconds / 86400) + ' day ago';
  	}


    return remainingTime;
  }

}
