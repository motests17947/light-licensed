import { MainLayoutComponent } from './main';
import { SidebarService } from '../../services/sidebar.service';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let sidebarService: SidebarService;

  beforeEach(() => {
    sidebarService = new SidebarService();
    component = new MainLayoutComponent(sidebarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should initialize leftOpened to false', () => {
      expect(component.leftOpened).toBe(false);
    });

    it('should initialize sidebar_open to false', () => {
      expect(component.sidebar_open).toBe(false);
    });

    it('should initialize rightSidebarOpen to false', () => {
      expect(component.rightSidebarOpen).toBe(false);
    });

    it('should initialize selectedItem to null', () => {
      expect(component.selectedItem).toBeNull();
    });
  });

  describe('ngOnInit', () => {
    it('should call updateSidebarOpen on init', () => {
      const updateSpy = jest.fn();
      component.updateSidebarOpen = updateSpy;
      component.ngOnInit();
      expect(updateSpy).toHaveBeenCalled();
    });

    it('should subscribe to rightSidebarOpen$ observable', (done) => {
      component.ngOnInit();
      sidebarService.openRightSidebar();
      setTimeout(() => {
        expect(component.rightSidebarOpen).toBe(true);
        done();
      }, 100);
    });

    it('should subscribe to selectedItem$ observable', (done) => {
      const testItem = { id: 1, name: 'Test' };
      component.ngOnInit();
      sidebarService.setSelectedItem(testItem);
      setTimeout(() => {
        expect(component.selectedItem).toEqual(testItem);
        done();
      }, 100);
    });
  });

  describe('ngOnDestroy', () => {
    it('should complete destroy$ subject', () => {
      const completeSpy = jest.fn();
      component['destroy$'].complete = completeSpy;
      component.ngOnDestroy();
      expect(completeSpy).toHaveBeenCalled();
    });
  });

  describe('updateSidebarOpen', () => {
    it('should set sidebar_open to true when width > 1024', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 1200,
        writable: true,
        configurable: true
      });
      component.updateSidebarOpen();
      expect(component.sidebar_open).toBe(true);
    });

    it('should set sidebar_open to false when width <= 1024', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 800,
        writable: true,
        configurable: true
      });
      component.updateSidebarOpen();
      expect(component.sidebar_open).toBe(false);
    });

    it('should set sidebar_open to true when width equals 1025', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 1025,
        writable: true,
        configurable: true
      });
      component.updateSidebarOpen();
      expect(component.sidebar_open).toBe(true);
    });
  });

  describe('leftToggle', () => {
    it('should toggle sidebar_open when called without parameter', () => {
      component.sidebar_open = false;
      component.leftToggle();
      expect(component.sidebar_open).toBe(true);
      component.leftToggle();
      expect(component.sidebar_open).toBe(false);
    });

    it('should set sidebar_open to true when called with true', () => {
      component.leftToggle(true);
      expect(component.sidebar_open).toBe(true);
    });

    it('should set sidebar_open to false when called with false', () => {
      component.sidebar_open = true;
      component.leftToggle(false);
      expect(component.sidebar_open).toBe(false);
    });
  });

  describe('rightToggle', () => {
    it('should toggle rightSidebarOpen when called without parameter', () => {
      component.rightSidebarOpen = false;
      component.rightToggle();
      expect(component.rightSidebarOpen).toBe(true);
      component.rightToggle();
      expect(component.rightSidebarOpen).toBe(false);
    });

    it('should set rightSidebarOpen to true when called with true', () => {
      component.rightToggle(true);
      expect(component.rightSidebarOpen).toBe(true);
    });

    it('should set rightSidebarOpen to false when called with false', () => {
      component.rightSidebarOpen = true;
      component.rightToggle(false);
      expect(component.rightSidebarOpen).toBe(false);
    });
  });

  describe('onEditSubmit', () => {
    it('should log message when called', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation();
      component.onEditSubmit();
      expect(logSpy).toHaveBeenCalledWith('編輯開關已送出');
      logSpy.mockRestore();
    });
  });
});
});
