import { TestBed, inject } from '@angular/core/testing';

import { AppEmailNotificationService } from './app-email-notification.service';

describe('AppEmailNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppEmailNotificationService]
    });
  });

  it('should be created', inject([AppEmailNotificationService], (service: AppEmailNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
