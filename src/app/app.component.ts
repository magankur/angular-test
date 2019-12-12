import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiRequestService } from './api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // sample image
  public sampleImage: string = '/assets/images/lorem_ipsum.png';
  // query param id
  public queryParamId: string;
  // table headers data
  public tableMenus = [{ title: "Id", sortBy: 'id' }, { title: "Avatar", sortBy: '' }, { title: "Name", sortBy: 'first_name' }, { title: "Email", sortBy: 'email' }];
  // user data
  public usersData = [];
  // filtered user data
  public filterUsersData = [];
  // total user count
  public totalUsers = 0;
  // initial page number
  public page: number = 1;
  // initial page limit
  public limit: number = this.service.defaultLimit;
  // limit list
  public limitArray: any[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  constructor(private activateRoute: ActivatedRoute, private service: ApiRequestService, private elRef: ElementRef) {
    // get user list 
    this.onGetUserList(0);
  }


  /**
   * Get user list.
   * @param page page number
   */
  onGetUserList(page: any) {
    let obj = {
      page: page,
      per_page: this.limit
    }
    this.service.getUsers(obj).subscribe((res: any) => {
      if (res.data && res.data.length > 0) {
        this.usersData = res.data;
        this.filterUsersData = res.data;
        this.totalUsers = res.total;
      }
    });
  }

  /**
   * Get query param.
   */
  ngAfterContentInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.queryParamId = (params && params.id) ? params.id : null;
      this.queryParamId ? this.onScrollToElement(this.queryParamId) : null;
    });
  }

  /**
   * Scroll to element.
   */
  onScrollToElement(queryParamId: string) {
    let element = this.elRef.nativeElement.querySelector(`#${queryParamId}`);
    if (element) {
      setTimeout(() =>
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }), 250);
    }
  }

  /**
   * Update limit.
   * @param limit new limit
   */
  updateLimit(limit: number) {
    this.onGetUserList(this.page);
  }

}
