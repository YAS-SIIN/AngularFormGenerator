import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormCreatorComponent } from './formcreator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FormCreatorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormCreatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BugloosTest'`, () => {
    const fixture = TestBed.createComponent(FormCreatorComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BugloosTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormCreatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('BugloosTest app is running!');
  });
});
