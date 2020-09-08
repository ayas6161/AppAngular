import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
export interface Value{
  id: number; name: string;


}

@Component({
  selector: 'app-vakues',
  templateUrl: './vakues.component.html',
  styleUrls: ['./vakues.component.css']
})

export class VakuesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  values: any;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): any {
    this.http.get('http://localhost:5000/api/values').subscribe(resdata => { this.values = resdata;
    } , (error) =>
    {console.log(error); }
    );



  }

}
