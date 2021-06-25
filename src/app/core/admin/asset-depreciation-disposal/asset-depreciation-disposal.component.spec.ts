import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDepreciationDisposalComponent } from './asset-depreciation-disposal.component';

describe('AssetDepreciationDisposalComponent', () => {
  let component: AssetDepreciationDisposalComponent;
  let fixture: ComponentFixture<AssetDepreciationDisposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDepreciationDisposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDepreciationDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
