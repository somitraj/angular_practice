import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';
  public route: string; 
  isValid = true;
  
  constructor(private router:Router) {

    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        this.route = event.url; 
      }
    });
  }
}

export class TestComponent implements OnInit {  
  constructor() { }
  ngOnInit() { }
}
