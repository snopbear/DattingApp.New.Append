import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  result: any[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (response: any[]) => {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.result = response;
      }
    );
  }

}
