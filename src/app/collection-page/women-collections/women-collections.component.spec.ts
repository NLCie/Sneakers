import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCollectionsComponent } from './women-collections.component';

describe('WomenCollectionsComponent', () => {
  let component: WomenCollectionsComponent;
  let fixture: ComponentFixture<WomenCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
