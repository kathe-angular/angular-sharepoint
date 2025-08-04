import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  private siteUrl = 'https%3A%2F%2Fareandinaeduco%2Esharepoint%2Ecom&correlation=828ab8a1-70d6-0000-ddcb-c97c71f24de3&Type=web&SiteId=90ada90a-dd90-4ad9-882e-3f855cc2ff39';
  private listName = 'Tareas';

  constructor(private http: HttpClient) {}

  getListItems(): Observable<any> {
    const endpoint = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items`;

    const headers = new HttpHeaders({
      'Accept': 'application/json;odata=verbose'
    });

    return this.http.get(endpoint, { headers });
  }
}
