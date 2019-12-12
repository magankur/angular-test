import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiRequestService } from './api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testProject';

  public sampleImage: string = '/assets/images/lorem_ipsum.png';
  public queryParamId: string;

  public tableMenus = [{title:"Id", sortBy:'id'}, {title:"Avatar", sortBy:''}, {title:"Name", sortBy:'first_name'}, {title:"Email", sortBy:'email'}]
  public usersData = [];
  public filterUsersData = [];
  public totalUsers = 0;
  public page: number = 1;
  public limit: number = 0;

  public limitArray: any[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  constructor(private activateRoute: ActivatedRoute, private elRef: ElementRef, private service: ApiRequestService) {
    this.limit = this.service.defaultLimit
    this.onGetUserList(0);

  }

  ngAfterContentInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.queryParamId = (params && params.id) ? params.id : null;
      this.queryParamId ? this.onUrlCheck() : null;
    });
  }

  onUrlCheck() {
    let element = this.elRef.nativeElement.querySelector(`#${this.queryParamId}`);
    if (element) {
      setTimeout(() =>
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }), 250);
    }
  }

  updateLimit(limit: number){
    this.onGetUserList(this.page);
  }

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
        this.page = 1;
      }
    });
  }

  tableSort(param: any){
    // this.filterUsersData = this.service.onSortCRM(param);
  }

}
