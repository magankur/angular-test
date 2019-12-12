import { TestBed } from '@angular/core/testing';

import { ApiRequestService } from './api-request.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestService } from './rest.service';

describe('ApiRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RestService]
  }));

  it('should be created', () => {
    const service: ApiRequestService = TestBed.get(ApiRequestService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: ApiRequestService = TestBed.get(ApiRequestService);
    expect(service.getUsers).toBeTruthy();
   });

});
