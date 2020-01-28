import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service'; 
import { HttpResponse } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditDialogueComponent } from '../edit-dialogue/edit-dialogue.component';
import {ExcelService} from '../excel.service'; 
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})

export class ViewDataComponent implements OnInit { 


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;  

  constructor(private apiService: ApiService,public dialog: MatDialog,private excelService:ExcelService,private datePipe: DatePipe) { }

  displayedColumns: string[] = ['id', 'username', 'password', 'DOB', 'edit', 'delete'];  
  loginData = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.loginData.filter = filterValue.trim().toLowerCase();
  }

	ngOnInit() {
		this.loadData();
  }

  exportAsXLSX():void {  
    this.apiService.get().subscribe((excelData: any[]) =>{   
      if(!excelData){
        return;
      }      
      
      for (let data of excelData) {
        data.DOB = this.datePipe.transform(data.DOB,"MM-dd-yyyy");
      }
      
      this.excelService.exportAsExcelFile(excelData, 'sample');  
    })      
  }

  public loadData() {
    this.apiService.get().subscribe((data: any[]) =>{   
      if(!data){
        return;
      }
      // console.log(data)
      this.loginData= new MatTableDataSource(data);
      this.loginData.paginator=this.paginator; 
      this.loginData.sort=this.sort;       
    })    
  } 
  
  public redirectToUpdate = (i: string, id: string, username: string, password: string) => {     
    let serverDialogRef = this.dialog.open(EditDialogueComponent, {
      width: '250px',
      data: {id: id, username: username, password: password}
    });
  }

  // dialogRef.afterClosed().subscribe(result => {
  //   if (result === 1) {
  //     // When using an edit things are little different, firstly we find record inside DataService by id
  //     const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
  //     // Then you update that record using data from dialogData (values you enetered)
  //     this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
  //     // And lastly refresh table
  //     this.refreshTable();
  //   }
  // }); 

 
  public redirectToDelete = (id: string, username: string) => {  

    if(confirm("Are you sure to delete user '" + username + "'")) {
      this.apiService.deleteData(id).subscribe((data: any[]) => {
        this.loadData(); 
      });  
    }    
  }
}
