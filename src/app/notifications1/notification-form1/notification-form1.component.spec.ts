import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFormComponent } from './notification-form1.component';

describe('NotificationForm1Component', () => {
  let component: NotificationFormComponent;
  let fixture: ComponentFixture<NotificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
