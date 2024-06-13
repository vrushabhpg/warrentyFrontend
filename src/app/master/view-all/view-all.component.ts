import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Customers } from 'src/app/shared/my-model/Customers';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit{

displayedColumns: string[] = ['position', 'name', 'weight','Contact' ,'model','symbol'];
  dataSource:MatTableDataSource<any>;

  apiData: any[] = [];
  dataS2: any;
  DataS2:any;
  userData: Customers[];
  data:Customers[];

  
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http:HttpClient){}

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/getalldata').subscribe(data => {
      
    //  let data1: Customers[] = this.compressUserByUserRole(data.returnObject);

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator=this.paginator;
    let data1: Customers[] = this.compressUserByUserRole(data.returnObject);
                  
    });
  }

  compressUserByUserRole(data2: Customers[]) :  Customers[]{

    let userGroupByRole: Customers[] = []
    data2.forEach((element, indexTemp) => {

      let newItem = new Customers();
      newItem.id=element.id,
      newItem.firstName=element.firstName,
      newItem.lastName=element.lastName,
      newItem.email=element.email,
      newItem.phone=element.phone,
      newItem.city=element.city
      newItem.street=element.street,
      newItem.street2=element.street2,
      newItem.zip=element.zip,
      newItem.model=element.model,
      newItem.date=element.date,
      newItem.selectorControl=element.selectorControl,
      newItem.item=element.item
      
      userGroupByRole.push(newItem);
      console.log(userGroupByRole);

    })

    return userGroupByRole;

  }



}
