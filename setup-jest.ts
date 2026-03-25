import 'jest-preset-angular/setup-env/zone';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

// Initialize the Angular testing environment
setupZoneTestEnv();

// Mock cub-lib-view-rootng 以避免循環依賴
// 提供完整的元數據結構確保 Angular 能正確識別模組
jest.mock('cub-lib-view-rootng', () => {
  // 建立一個通用的 Mock 模組類，包含必要的 Angular 元數據
  const createMockModule = (name: string) => {
    class MockModule {
      static ɵmod = {
        type: MockModule,
        bootstrap: [],
        declarations: [],
        imports: [],
        exports: [],
        providers: [],
        id: null,
        schemas: [],
        transitiveCompileScopes: null
      };
      static ɵinj = {
        providers: [],
        factory: () => new MockModule()
      };
    }
    Object.defineProperty(MockModule, 'name', { value: name });
    return MockModule;
  };

  return {
    CubAccordionModule: createMockModule('CubAccordionModule'),
    CubButtonModule: createMockModule('CubButtonModule'),
    CubCardModule: createMockModule('CubCardModule'),
    CubCheckboxModule: createMockModule('CubCheckboxModule'),
    CubDatetimepickerModule: createMockModule('CubDatetimepickerModule'),
    CubFormFieldModule: createMockModule('CubFormFieldModule'),
    CubInputGroupModule: createMockModule('CubInputGroupModule'),
    CubInputModule: createMockModule('CubInputModule'),
    CubMomentDatetimeModule: createMockModule('CubMomentDatetimeModule'),
    CubRadioBttonModule: createMockModule('CubRadioBttonModule'),
    CubTableModule: createMockModule('CubTableModule'),
    CubTooltipModule: createMockModule('CubTooltipModule'),
    CubTabModule: createMockModule('CubTabModule'),
    CubNativeDatetimeModule: createMockModule('CubNativeDatetimeModule'),
    CubSelectModule: createMockModule('CubSelectModule'),
    CubDialogModule: createMockModule('CubDialogModule'),
    CubInputNumberModule: createMockModule('CubInputNumberModule'),
    CubDialog: class {},
    ErrorStateMatcher: class {},
    CubDatetimepickerInputEvent: class {},
    CubRadioChange: class {},
    TabNavBarComponent: class {
      static ɵcmp = {
        type: 'Component',
        selectors: [['app-tab-nav-bar']],
        factory: () => new TabNavBarComponent(),
        template: '',
        styles: []
      };
      static ɵfac = () => new TabNavBarComponent();
    },
    MessageService: class {},
    CubConfirmDialogComponent: class {
      static ɵcmp = {
        type: 'Component',
        selectors: [['cub-confirm-dialog']],
        factory: () => new CubConfirmDialogComponent(),
        template: '',
        styles: []
      };
      static ɵfac = () => new CubConfirmDialogComponent();
    },
    CUB_DIALOG_DATA: Symbol('CUB_DIALOG_DATA'),
    CubDialogRef: class {},
  };
}, { virtual: true });

// Mock cub-lib-view-rootng/cdk 子模塊 - 用於 Portal、CDK 相關的功能
jest.mock('cub-lib-view-rootng/cdk', () => {
  // 建立 Mock Portal 和相關服務
  class PortalModule {
    static ɵmod = {
      type: PortalModule,
      bootstrap: [],
      declarations: [],
      imports: [],
      exports: [],
      providers: [],
      id: null,
      schemas: [],
      transitiveCompileScopes: null
    };
    static ɵinj = {
      providers: [],
      factory: () => new PortalModule()
    };
  }

  class CdkPortal {
    static ɵcmp = {
      type: 'Component',
      selectors: [['[cdkPortal]']],
      factory: () => new CdkPortal(),
      template: '',
      styles: []
    };
    static ɵfac = () => new CdkPortal();
  }

  class CdkPortalOutlet {
    static ɵcmp = {
      type: 'Component',
      selectors: [['[cdkPortalOutlet]']],
      factory: () => new CdkPortalOutlet(),
      template: '',
      styles: []
    };
    static ɵfac = () => new CdkPortalOutlet();
  }

  class TemplatePortal {
    constructor(template: any, viewContainerRef: any, context?: any) {}
  }

  return {
    PortalModule,
    CdkPortal,
    CdkPortalOutlet,
    TemplatePortal,
    BasePortalOutlet: class {},
    ComponentPortal: class {},
  };
}, { virtual: true });

// 在全域作用域中处理 cub-lib-view-rootng 的圓形依賴問題
// 這是一個臨時的修復措施，直到庫更新修復其內部依賴問題
(globalThis as any).ngDevMode = false;

// 定義 matchMedia mock，供測試使用
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    media: query,
    matches: false,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// 定義其他可能需要的全域物件或設定
Object.defineProperty(window, 'CSS', {
  value: {},
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});

// 設置 localStorage 和 sessionStorage mock
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;
global.sessionStorage = localStorageMock as any;

// 忽略特定的控制台警告或錯誤
const originalWarn = console.warn;
const originalError = console.error;
beforeAll(() => {
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('NG0100') ||
       args[0].includes('NG0104') ||
       args[0].includes('NG0109') ||
       args[0].includes('NG0912') ||
       args[0].includes('MockNgZone') ||
       args[0].includes('NullInjectorError') ||
       args[0].includes('Cannot access') ||
       args[0].includes('TabNavBarComponent') ||
       args[0].includes('before initialization'))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };

  console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('NG0104') ||
       args[0].includes('NG0100') ||
       args[0].includes('NullInjectorError') ||
       args[0].includes('Cannot access') ||
       args[0].includes('TabNavBarComponent') ||
       args[0].includes('before initialization'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});

// [TEMPORARILY DISABLED] Mock ApplyContentWrapperComponent 和相關基類
// 解決繼承鏈問題，允許 trade-finance 和 additional-info 等組件正常測試
/*
jest.mock('app/pages/apply/shared/apply-content-wrapper/apply-content-wrapper.component', () => {
  class MockControlContainerBase {
    formGroup: any = null;
  }

  class MockApplyContentWrapperComponent extends MockControlContainerBase {
    applyInputBaseList = { toArray: () => [], forEach: () => {} };
    ccyAmtInputGroupContainerList = { toArray: () => [], forEach: () => {} };
    wrapperList = { toArray: () => [], forEach: () => {} };
    content = null;

    ngAfterViewInit() {}
    ngOnDestroy() {}

    static ɵcmp = {
      type: MockApplyContentWrapperComponent,
      selectors: [['cpp-apply-content-wrapper']],
      factory: () => new MockApplyContentWrapperComponent(),
      template: '<ng-content></ng-content>',
      styles: []
    };
    static ɵfac = () => new MockApplyContentWrapperComponent();
  }

  return {
    ApplyContentWrapperComponent: MockApplyContentWrapperComponent
  };
}, { virtual: true });

// Mock ApplyContentWrapperWithValidatorComponent
jest.mock('app/pages/apply/shared/apply-content-wrapper-with-validator/apply-content-wrapper-with-validator.component', () => {
  class MockControlContainerBase {
    formGroup: any = null;
  }

  class MockApplyContentWrapperWithValidatorComponent extends MockControlContainerBase {
    applyInputBaseList = { toArray: () => [], forEach: () => {} };
    ccyAmtInputGroupContainerList = { toArray: () => [], forEach: () => {} };
    wrapperList = { toArray: () => [], forEach: () => {} };
    content = null;

    ngAfterViewInit() {}
    ngOnDestroy() {}

    static ɵcmp = {
      type: MockApplyContentWrapperWithValidatorComponent,
      selectors: [['cpp-apply-content-wrapper-with-validator']],
      factory: () => new MockApplyContentWrapperWithValidatorComponent(),
      template: '<ng-content></ng-content>',
      styles: []
    };
    static ɵfac = () => new MockApplyContentWrapperWithValidatorComponent();
  }

  return {
    ApplyContentWrapperWithValidatorComponent: MockApplyContentWrapperWithValidatorComponent
  };
}, { virtual: true });

// Mock ControlContainerBase - 所有組件的基類
// 完全模擬原始實現，不用 try-catch（讓 Angular 的 DI 系統正常工作）
jest.mock('app/shared/types/control-container-base', () => {
  const { inject } = require('@angular/core');
  const { ControlContainer } = require('@angular/forms');

  return {
    ControlContainerBase: class {
      // 完全模擬原始的類字段初始化器
      private readonly _controlContainer = inject(ControlContainer);

      get formGroup() {
        return this._controlContainer?.control;
      }
    }
  };
}, { virtual: true });

// Mock ProductBase - 大量 apply 組件的基類
// 修正：從注入上下文獲取服務，或提供默認值
jest.mock('app/pages/apply/types/product-base.component', () => {
  const { BehaviorSubject, Subject } = require('rxjs');
  const { signal } = require('@angular/core');
  const { toObservable } = require('@angular/core/rxjs-interop');
  const { inject } = require('@angular/core');

  class MockProductBase {
    protected applyService: any;
    protected xbuService: any;
    protected businessType: any;
    protected caseType$: any;
    protected destroy$: Subject<void>;
    protected feeStandard$: any;

    constructor() {
      this.destroy$ = new Subject();

      // 嘗試從注入上下文獲取服務
      try {
        const ApplyService = require('app/pages/apply/services/apply.service').ApplyService;
        const XbuService = require('app/pages/apply/apply-steps/apply-xbu/apply-xbu.component').XbuService;

        this.applyService = inject(ApplyService, { optional: true });
        this.xbuService = inject(XbuService, { optional: true });
      } catch (e) {
        // inject 可能失敗，使用fallback
      }

      // 如果注入失敗或返回 null，使用默認值
      if (!this.applyService) {
        this.applyService = {
          context: signal({ DBU: {}, OBU: {} }),
          caseType$: new BehaviorSubject(null),
          feeStandard: signal({})
        };
      }

      if (!this.xbuService) {
        this.xbuService = {
          businessType: signal('DBU')
        };
      }

      this.businessType = this.xbuService.businessType || signal('DBU');
      this.caseType$ = this.applyService.caseType$ || new BehaviorSubject(null);
      this.feeStandard$ = toObservable(this.applyService.feeStandard);
    }

    protected anyTouchedExcludeChecked() { return false; }
    get isFormGroupTouched() { return false; }

    ngOnDestroy() {
      if (this.destroy$) {
        this.destroy$.next();
        this.destroy$.complete();
      }
    }
  }

  return {
    ProductBase: MockProductBase
  };
}, { virtual: true });
*/
