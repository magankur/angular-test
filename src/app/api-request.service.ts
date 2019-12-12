import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  apiBaseUrl: string = environment.apiBaseUrl;
  defaultLimit: number = 5;
  activeSortBy = {};

  constructor(private httpClient: HttpClient, private api: RestService) { }

  getUsers(param: any) {
    return this.api.get(
      `users?page=${param.page}&per_page=${param.per_page}`
    );
  }

  onSortCRM(param: any){
    if (this.activeSortBy[param.sortBy] == 'asc') {
      this.activeSortBy[param.sortBy] = 'desc';
    } else {
      this.activeSortBy = {};
      this.activeSortBy[param.sortBy] = 'asc';
    }
    if (this.activeSortBy[param.sortBy] == 'asc') {
      param.array.sort((itemA: any, itemB: any) => {
        let keyA = itemA[param.sortBy] || "",
          keyB = itemB[param.sortBy] || "";
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (this.activeSortBy[param.sortBy] == 'desc') {
      param.array.sort((itemA: any, itemB: any) => {
        let keyA = itemA[param.sortBy] || "",
          keyB = itemB[param.sortBy] || "";
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
    }
    return param.array;
  }
}
