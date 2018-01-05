import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GradingFormatService {

  constructor(private httpClient : HttpClient) { }

  public getGradingFormats(): Observable<any> {
    return this.httpClient.post('http://localhost:8082/TRMS/get-grading-formats', {});
  }
}
