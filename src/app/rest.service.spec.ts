import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
