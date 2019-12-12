import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  // api base url
  apiBaseUrl: string = environment.apiBaseUrl;
  // content default limit
  defaultLimit: number = 5;

  constructor(private api: RestService) { }

  /**
   * Get user list.
   * @param param parameters
   */
  getUsers(param: any) {
    return this.api.get(
      `users?page=${param.page}&per_page=${param.per_page}`
    );
  }

}
