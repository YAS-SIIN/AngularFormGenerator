import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormElementsComponent } from './formelements.component';

describe('FormElementsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FormElementsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormElementsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BugloosTest FormViewer'`, () => {
    const fixture = TestBed.createComponent(FormElementsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BugloosTest FormViewer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormElementsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('BugloosTest app is running!');
  });
});
