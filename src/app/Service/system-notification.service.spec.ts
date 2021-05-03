import { TestBed } from '@angular/core/testing';

import { SystemNotificationService } from './system-notification.service';

describe('SystemNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemNotificationService = TestBed.get(SystemNotificationService);
    expect(service).toBeTruthy();
  });
});
