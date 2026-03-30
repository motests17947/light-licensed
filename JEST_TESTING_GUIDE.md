# Jest Unit Testing Guide for Light-Link Project

## Overview
This project has been configured with Jest for unit testing Angular components and services. Jest is a modern testing framework that provides excellent TypeScript support and a great developer experience.

## Project Structure
```
src/app/
├── services/
│   ├── sidebar.service.ts
│   └── sidebar.service.spec.ts          ✓ Test file created
├── components/
│   └── edit-sidebar/
│       ├── edit-sidebar.ts
│       └── edit-sidebar.spec.ts         ✓ Test file created
├── layouts/
│   ├── header/
│   │   ├── header.ts
│   │   └── header.spec.ts               ✓ Test file created
│   ├── footer/
│   │   ├── footer.ts
│   │   └── footer.spec.ts               ✓ Test file created
│   └── main/
│       ├── main.ts
│       └── main.spec.ts                 ✓ Test file created
└── pages/
    ├── create/
    │   ├── create.ts
    │   └── create.spec.ts               ✓ Test file created
    ├── search/
    │   ├── search.ts
    │   └── search.spec.ts               ✓ Test file created
    └── todo/
        ├── todos.ts
        └── todos.spec.ts                ✓ Test file created
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

This will install all Jest-related dependencies specified in `package.json`:
- `jest` - Testing framework
- `jest-preset-angular` - Angular preset for Jest
- `jest-environment-jsdom` - DOM environment for tests
- `@types/jest` - TypeScript types for Jest
- `identity-obj-proxy` - CSS module mocking

### 2. Configuration Files
The following configuration files are already in place:

- **jest.config.ts** - Main Jest configuration
  - Preset: `jest-preset-angular`
  - Test environment: `jsdom`
  - Module name mapper for path aliases and CSS
  - Coverage thresholds: 85% for all metrics
  - Transform configuration for TypeScript and HTML

- **setup-jest.ts** - Jest setup file
  - Angular testing environment initialization
  - Mock configurations for `cub-lib-view-rootng` library
  - Global mocks for browser APIs (localStorage, sessionStorage, matchMedia)
  - Console warning/error filters

- **tsconfig.spec.json** - TypeScript configuration for tests

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Run tests with coverage report
```bash
npm run test:coverage
```

## Test Files Created

### 1. **SidebarService** (`sidebar.service.spec.ts`)
Tests for the sidebar state management service:
- Service creation
- Opening/closing sidebar
- Toggling sidebar state
- Setting selected items
- Observable subscriptions

### 2. **EditSidebarComponent** (`edit-sidebar.spec.ts`)
Tests for the edit sidebar component:
- Component creation
- Toggle connection expansion
- Close sidebar event emission
- Submit event emission

### 3. **HeaderComponent** (`header.spec.ts`)
Tests for the header layout component:
- Component creation
- Toggle left sidebar event
- Toggle right sidebar event

### 4. **FooterComponent** (`footer.spec.ts`)
Tests for the footer layout component:
- Component creation
- Rendering verification

### 5. **MainLayoutComponent** (`main.spec.ts`)
Tests for the main layout component:
- Component initialization
- Sidebar state management
- Window resize handling
- Service integration
- Toggle methods

### 6. **AppCreatePageComponent** (`create.spec.ts`)
Tests for the create page:
- Component creation
- Connection types array
- Data validation

### 7. **AppSearchPageComponent** (`search.spec.ts`)
Tests for the search page:
- Component creation
- Rendering verification

### 8. **AppTodoPageComponent** (`todos.spec.ts`)
Tests for the todo page:
- Component creation
- Tab switching
- State management

## Writing New Tests

### Basic Component Test Template
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests here
});
```

### Basic Service Test Template
```typescript
import { TestBed } from '@angular/core/testing';
import { YourService } from './your.service';

describe('YourService', () => {
  let service: YourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add more tests here
});
```

## Best Practices

1. **Test Naming**: Use descriptive test names that explain what is being tested
   ```typescript
   it('should emit closeSidebar event when onClose is called', () => {
     // test implementation
   });
   ```

2. **Arrange-Act-Assert Pattern**: Structure tests clearly
   ```typescript
   it('should toggle sidebar state', () => {
     // Arrange
     component.sidebar_open = false;
     
     // Act
     component.leftToggle();
     
     // Assert
     expect(component.sidebar_open).toBe(true);
   });
   ```

3. **Use beforeEach for Setup**: Initialize common test fixtures
   ```typescript
   beforeEach(async () => {
     await TestBed.configureTestingModule({...}).compileComponents();
     fixture = TestBed.createComponent(YourComponent);
   });
   ```

4. **Test Observable Subscriptions**: Use `done` callback for async tests
   ```typescript
   it('should emit value', (done) => {
     service.value$.subscribe(val => {
       expect(val).toBe(expectedValue);
       done();
     });
   });
   ```

5. **Mock External Dependencies**: Use TestBed providers
   ```typescript
   TestBed.configureTestingModule({
     providers: [
       { provide: SomeService, useValue: mockService }
     ]
   });
   ```

## Coverage Thresholds

The project is configured with the following coverage thresholds (85%):
- **Statements**: 85%
- **Branches**: 85%
- **Functions**: 85%
- **Lines**: 85%

To check coverage, run:
```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory.

## Troubleshooting

### Issue: "Cannot find module" errors
**Solution**: Check that path aliases in `jest.config.ts` match those in `tsconfig.json`

### Issue: Custom elements not recognized
**Solution**: Add `CUSTOM_ELEMENTS_SCHEMA` to test configuration:
```typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

### Issue: Observable tests timing out
**Solution**: Use the `done` callback or increase `testTimeout` in `jest.config.ts`

### Issue: Module mocking errors
**Solution**: Check `setup-jest.ts` for existing mocks and add new ones as needed

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Angular Testing Guide](https://angular.io/guide/testing)
- [jest-preset-angular](https://github.com/thymikee/jest-preset-angular)

## Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm test` to execute all tests
3. Run `npm run test:coverage` to see coverage report
4. Add more tests for additional components and services as needed
5. Integrate tests into CI/CD pipeline
