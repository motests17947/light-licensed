import { App } from './app';

describe('App', () => {
  let component: App;

  beforeEach(() => {
    component = new App();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title signal', () => {
    expect(component['title']).toBeDefined();
  });
});
