/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoistService } from './todoist.service';

describe('TodoistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoistService]
    });
  });

  it('should ...', inject([TodoistService], (service: TodoistService) => {
    expect(service).toBeTruthy();
  }));
});
