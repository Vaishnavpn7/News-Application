import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private service:NewsService) {}




  // ndata={
  //   lname:"",
  //   title:"",
  //   image:"",
  //   url:"",
  //   description:"",
  //   time:""

  // }

  // news={}
  todaynews:any=[];

  title:any

  getnews(){
    this.service.todaynews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  
  }

  generalnews(){
    this.service.gennews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  }



  sportsnews(){
    this.service.sponews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  }

  entertainmentnews(){
    this.service.entnews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  }

  businessnews(){
    this.service.busnews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  }

  technologynews(){
    this.service.technews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  }

  healthnews(){
    this.service.healtnews().then(res=>res.json()).then(data=>this.todaynews=data.articles)
  }




      

  }

