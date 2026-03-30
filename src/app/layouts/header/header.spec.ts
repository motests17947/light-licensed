import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleLeftSidebar event', () => {
    it('should emit toggleLeftSidebar event', (done) => {
      component.toggleLeftSidebar.subscribe(() => {
        expect(true).toBe(true);
        done();
      });
      component.toggleSidebar();
    });
  });

  describe('toggleSidebar', () => {
    it('should emit toggleLeftSidebar when called', (done) => {
      const emitSpy = jest.fn();
      component.toggleLeftSidebar.emit = emitSpy;
      component.toggleSidebar();
      expect(emitSpy).toHaveBeenCalled();
      done();
    });
  });

  describe('toggleRightSidebar event', () => {
    it('should have toggleRightSidebar output', () => {
      expect(component.toggleRightSidebar).toBeDefined();
    });
  });
});
