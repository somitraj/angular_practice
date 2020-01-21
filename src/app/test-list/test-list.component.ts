import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})

export class TestListComponent {
  title = 'test';
  // hide = true;
  public openNav() { 
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  public closeNav() { 
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }
}

