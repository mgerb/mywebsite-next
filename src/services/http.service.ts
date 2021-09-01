import Axios from "axios";
import { from, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

class _HttpService {
  public get<T>(url: string): Observable<T | undefined> {
    return from(Axios.get(url)).pipe(
      map((res) => res.data),
      catchError((err) => {
        console.error(err);
        return of(undefined);
      })
    );
  }

  public post<T>(url: string, data: any): Observable<T | undefined> {
    return from(Axios.post(url, data)).pipe(
      map((res) => res.data),
      catchError((err) => {
        console.error(err);
        return of(undefined);
      })
    );
  }
}

export const HttpService = new _HttpService();
