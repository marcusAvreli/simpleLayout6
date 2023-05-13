import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReaderComponent } from './report-reader.component';

describe('ReportReaderComponent', () => {
  let component: ReportReaderComponent;
  let fixture: ComponentFixture<ReportReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
