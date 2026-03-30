import { EditSidebarComponent } from './edit-sidebar';

describe('EditSidebarComponent', () => {
  let component: EditSidebarComponent;

  beforeEach(() => {
    component = new EditSidebarComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('expandedConnection', () => {
    it('should initialize expandedConnection to 0', () => {
      expect(component.expandedConnection).toBe(0);
    });
  });

  describe('toggleConnection', () => {
    it('should set expandedConnection to the given index when it is not expanded', () => {
      component.toggleConnection(2);
      expect(component.expandedConnection).toBe(2);
    });

    it('should set expandedConnection to -1 when toggling the same index', () => {
      component.expandedConnection = 2;
      component.toggleConnection(2);
      expect(component.expandedConnection).toBe(-1);
    });

    it('should switch expandedConnection to a different index', () => {
      component.expandedConnection = 1;
      component.toggleConnection(3);
      expect(component.expandedConnection).toBe(3);
    });

    it('should handle toggling index 0', () => {
      component.expandedConnection = 0;
      component.toggleConnection(0);
      expect(component.expandedConnection).toBe(-1);
    });
  });

  describe('closeSidebar event', () => {
    it('should emit closeSidebar event when onClose is called', (done) => {
      component.closeSidebar.subscribe(() => {
        expect(true).toBe(true);
        done();
      });
      component.onClose();
    });
  });

  describe('submit event', () => {
    it('should emit submit event when onSubmit is called', (done) => {
      component.submit.subscribe(() => {
        expect(true).toBe(true);
        done();
      });
      component.onSubmit();
    });
  });

  describe('onClose', () => {
    it('should emit closeSidebar event', (done) => {
      const emitSpy = jest.fn();
      component.closeSidebar.emit = emitSpy;
      component.onClose();
      expect(emitSpy).toHaveBeenCalled();
      done();
    });
  });

  describe('onSubmit', () => {
    it('should emit submit event', (done) => {
      const emitSpy = jest.fn();
      component.submit.emit = emitSpy;
      component.onSubmit();
      expect(emitSpy).toHaveBeenCalled();
      done();
    });
  });
});
