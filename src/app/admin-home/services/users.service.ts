import {Injectable} from '@angular/core';
import {Http, Response,Headers,RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class UsersService {
  private usersUrl = "http://localhost:8080/users/";

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    let headers=new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.usersUrl,options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let data = res.json();
    for(const user of data){
      console.log(user.nickname);
    }
    return data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
