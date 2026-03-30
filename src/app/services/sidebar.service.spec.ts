import { TestBed } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('openRightSidebar', () => {
    it('should set rightSidebarOpen to true', (done) => {
      service.openRightSidebar();
      service.rightSidebarOpen$.subscribe((isOpen) => {
        expect(isOpen).toBe(true);
        done();
      });
    });

    it('should set selectedItem when item is provided', (done) => {
      const testItem = { id: 1, name: 'Test Item' };
      service.openRightSidebar(testItem);
      service.selectedItem$.subscribe((item) => {
        expect(item).toEqual(testItem);
        done();
      });
    });

    it('should not change selectedItem when no item is provided', (done) => {
      const testItem = { id: 1, name: 'Test Item' };
      service.setSelectedItem(testItem);
      service.openRightSidebar();
      service.selectedItem$.subscribe((item) => {
        expect(item).toEqual(testItem);
        done();
      });
    });
  });

  describe('closeRightSidebar', () => {
    it('should set rightSidebarOpen to false', (done) => {
      service.openRightSidebar();
      service.closeRightSidebar();
      service.rightSidebarOpen$.subscribe((isOpen) => {
        expect(isOpen).toBe(false);
        done();
      });
    });
  });

  describe('toggleRightSidebar', () => {
    it('should toggle rightSidebarOpen from false to true', (done) => {
      service.closeRightSidebar();
      service.toggleRightSidebar();
      service.rightSidebarOpen$.subscribe((isOpen) => {
        expect(isOpen).toBe(true);
        done();
      });
    });

    it('should toggle rightSidebarOpen from true to false', (done) => {
      service.openRightSidebar();
      service.toggleRightSidebar();
      service.rightSidebarOpen$.subscribe((isOpen) => {
        expect(isOpen).toBe(false);
        done();
      });
    });
  });

  describe('getRightSidebarState', () => {
    it('should return current state of rightSidebarOpen', () => {
      service.closeRightSidebar();
      expect(service.getRightSidebarState()).toBe(false);

      service.openRightSidebar();
      expect(service.getRightSidebarState()).toBe(true);
    });
  });

  describe('setSelectedItem', () => {
    it('should update selectedItem', (done) => {
      const testItem = { id: 2, name: 'Another Item' };
      service.setSelectedItem(testItem);
      service.selectedItem$.subscribe((item) => {
        expect(item).toEqual(testItem);
        done();
      });
    });

    it('should allow setting selectedItem to null', (done) => {
      service.setSelectedItem(null);
      service.selectedItem$.subscribe((item) => {
        expect(item).toBeNull();
        done();
      });
    });
  });
});
