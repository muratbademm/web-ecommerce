import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  constructor(private router:Router){}
    doSearch(value:String){
      this.router.navigateByUrl(`/search/${value}`);
    }
  
}
