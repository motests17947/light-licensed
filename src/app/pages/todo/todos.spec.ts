import { AppTodoPageComponent } from './todos';

describe('AppTodoPageComponent', () => {
  let component: AppTodoPageComponent;

  beforeEach(() => {
    component = new AppTodoPageComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('activeMainTab', () => {
    it('should initialize activeMainTab to "todo-list"', () => {
      expect(component.activeMainTab).toBe('todo-list');
    });
  });

  describe('setMainTab', () => {
    it('should set activeMainTab to "case-tracking"', () => {
      component.setMainTab('case-tracking');
      expect(component.activeMainTab).toBe('case-tracking');
    });

    it('should set activeMainTab to "todo-list"', () => {
      component.activeMainTab = 'case-tracking';
      component.setMainTab('todo-list');
      expect(component.activeMainTab).toBe('todo-list');
    });

    it('should toggle between tabs', () => {
      expect(component.activeMainTab).toBe('todo-list');
      component.setMainTab('case-tracking');
      expect(component.activeMainTab).toBe('case-tracking');
      component.setMainTab('todo-list');
      expect(component.activeMainTab).toBe('todo-list');
    });
  });
});
