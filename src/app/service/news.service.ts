import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  todaynews(){

    return fetch(`https://newsapi.org/v2/everything?q=news&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  gennews(){

    return fetch(`https://newsapi.org/v2/everything?q=general&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  sponews(){

    return fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  entnews(){

    return fetch(`https://newsapi.org/v2/everything?q=entertainment&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  busnews(){

    return fetch(`https://newsapi.org/v2/everything?q=business&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  technews(){

    return fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  healtnews(){

    return fetch(`https://newsapi.org/v2/everything?q=health&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }
}
