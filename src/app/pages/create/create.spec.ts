import { AppCreatePageComponent } from './create';

describe('AppCreatePageComponent', () => {
  let component: AppCreatePageComponent;

  beforeEach(() => {
    component = new AppCreatePageComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have connectionTypes array', () => {
    expect(component.connectionTypes).toBeDefined();
    expect(Array.isArray(component.connectionTypes)).toBe(true);
  });

  it('should have correct connection types', () => {
    const expectedTypes = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API'];
    expect(component.connectionTypes).toEqual(expectedTypes);
  });

  it('should have 5 connection types', () => {
    expect(component.connectionTypes.length).toBe(5);
  });

  it('should include MySQL in connection types', () => {
    expect(component.connectionTypes).toContain('MySQL');
  });

  it('should include PostgreSQL in connection types', () => {
    expect(component.connectionTypes).toContain('PostgreSQL');
  });

  it('should include MongoDB in connection types', () => {
    expect(component.connectionTypes).toContain('MongoDB');
  });

  it('should include Redis in connection types', () => {
    expect(component.connectionTypes).toContain('Redis');
  });

  it('should include REST API in connection types', () => {
    expect(component.connectionTypes).toContain('REST API');
  });
});
