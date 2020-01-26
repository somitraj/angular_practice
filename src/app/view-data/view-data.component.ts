import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service'; 
import { HttpResponse } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})

export class ViewDataComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;  
  constructor(private apiService: ApiService) { }
  
  displayedColumns: string[] = ['id', 'username', 'password', 'edit', 'delete'];  
  loginData = new MatTableDataSource();


  applyFilter(filterValue: string) {
    this.loginData.filter = filterValue.trim().toLowerCase();
  }

	ngOnInit() {
		this.apiService.get().subscribe(data =>{   
      if(!data){
        return;
      }
      // console.log(data)
      // this.loginData= new MatTableDataSource(data);
      this.loginData.paginator=this.paginator; 
      this.loginData.sort=this.sort; 

      
    })  
    
     
	}

}
