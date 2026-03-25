import * as i0 from '@angular/core';
import { TemplateRef, AfterContentInit, OnDestroy, EventEmitter, ViewContainerRef, ElementRef, AfterViewInit, Renderer2, QueryList, ChangeDetectorRef } from '@angular/core';
import { Params, QueryParamsHandling, RouterLink, RouterLinkWithHref, Router } from '@angular/router';
import * as i1 from 'cub-lib-view-rootng/cdk/stepper';
import { CubCdkStep, CubCdkStepper, StepperOptions, StepperOrientation } from 'cub-lib-view-rootng/cdk/stepper';
import { TemplatePortal } from 'cub-lib-view-rootng/cdk/portal';
import { FocusableOption, FocusKeyManager } from 'cub-lib-view-rootng/cdk/a11y';
import { NumberInput } from 'cub-lib-view-rootng/cdk/coercion';
import { Directionality } from 'cub-lib-view-rootng/cdk/bidi';
import { CubThemeSize, CubFlexOrientation } from 'cub-lib-view-rootng/component/common';

declare class CubStepContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStepContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubStepContent, "ng-template[cubStepContent]", never, {}, {}, never, never, true, never>;
}

declare class CubStep extends CubCdkStep implements AfterContentInit, OnDestroy {
    private viewContainerRef;
    portal: TemplatePortal;
    private selectedStateSubscription;
    /** 元件是否禁用，預設為 false。 */
    disabled: boolean;
    /** 路由匹配是否需要完全符合，預設為 false。 */
    exact: boolean;
    /** 步驟的加載狀態，預設為 false。 */
    loading: boolean;
    /** 步驟的副標題，預設為 ''。 */
    description: string;
    /** 步驟圖標，預設為 undefined。 */
    icon: string;
    /** 路由鏈接，可以是字符串或數組，預設為 null。 */
    routerLink: string | any[] | null;
    /** 路由查詢參數，預設為 null。 */
    queryParams: Params | null;
    /** 查詢參數處理方式，預設為 null。 */
    queryParamsHandling: QueryParamsHandling | null;
    /** 步驟選擇事件 */
    selectHandler: EventEmitter<CubStep>;
    lazyContent: CubStepContent;
    constructor(stepper: CubCdkStepper, viewContainerRef: ViewContainerRef, stepperOptions?: StepperOptions);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStep, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubStep, "cub-step", never, { "disabled": { "alias": "disabled"; "required": false; }; "exact": { "alias": "exact"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "description": { "alias": "description"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "queryParams": { "alias": "queryParams"; "required": false; }; "queryParamsHandling": { "alias": "queryParamsHandling"; "required": false; }; }, { "selectHandler": "selectHandler"; }, ["lazyContent"], ["*"], true, never>;
}

declare class CubStepHeader implements FocusableOption {
    elementRef: ElementRef<HTMLElement>;
    /** 元件唯一識別符，預設為 undefined。 */
    id: string;
    /** Tab 鍵的控制項索引值，預設為 0。 */
    tabIndex: number;
    /** 是否為啟用狀態，預設為 false。 */
    active: boolean;
    /** 是否為被選取狀態，預設為 false。 */
    selected: boolean;
    /** 是否為禁用狀態，預設為 false。 */
    disabled: boolean;
    constructor(elementRef: ElementRef<HTMLElement>);
    focus(): void;
    _getHostElement(): HTMLElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStepHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubStepHeader, "cub-step-header", never, { "id": { "alias": "id"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "active": { "alias": "active"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CubStepper extends CubCdkStepper implements AfterViewInit, OnDestroy {
    keyManager: FocusKeyManager<FocusableOption>;
    render2: Renderer2;
    showLoading: boolean;
    private readonly RESIZE_DEBOUNCE_TIME;
    private readonly LINE_MARGIN;
    private resizeListener?;
    private debounceTimer?;
    private isDestroyed;
    /** 尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    /** 當前選中的步驟索引，預設為 0。 */
    get selectedIndex(): number;
    set selectedIndex(index: NumberInput);
    /** 步驟器排列方向，預設為 'horizontal'。 */
    get orientation(): StepperOrientation;
    set orientation(value: StepperOrientation);
    /** 標籤文字排列位置，預設為 'horizontal'。 */
    labelOrientation: CubFlexOrientation;
    stepHeaderList: QueryList<CubStepHeader>;
    lineBar: QueryList<ElementRef>;
    stepList: QueryList<CubStep>;
    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    isActive(index: number): boolean;
    isCompleted(index: number, step: CubCdkStep): boolean;
    isError(index: number, step: CubCdkStep): boolean;
    isDisabled(index: number, step: any): boolean;
    selectStep(index: number, step: any): void;
    getFocusIndex(): number | null;
    onKeydown(event: KeyboardEvent): void;
    nextFocusIndex(currentIndex: number): number;
    previousFocusIndex(currentIndex: number): number;
    getLoadingColor(index: number, step: CubCdkStep): "error" | "brand" | "brand-contrast" | "neutral";
    reRenderLoading(): void;
    /** trackBy 函數：確保 Angular 能正確追蹤 step 項目 */
    trackByStep(index: number, step: CubCdkStep): any;
    /** Returns a unique id for the given step label. */
    _getStepLabelId(i: number): string;
    /** Returns a unique id for the given step content. */
    _getStepContentId(i: number): string;
    private getStepHeaderByIndex;
    private calculateLinePosition;
    /**
     * 按照 data-step-index 屬性排序元素
     * 使用數據索引而非 DOM 順序，確保在動態 @if 情況下對應關係正確
     *
     * 支援兩種類型的元素：
     * 1. ElementRef[] - 直接有 nativeElement (如 lineBar)
     * 2. Component[] - 透過 elementRef.nativeElement 訪問 (如 CubStepHeader)
     */
    private sortByDataIndex;
    /**
     * 更新所有連接線的位置
     * 使用 data-step-index 屬性配對 stepHeader 和 lineBar，
     * 確保在動態 @if 插入/移除時對應關係正確
     */
    private updateLinePositions;
    /** 設置視窗大小監聽 */
    private setupWindowResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStepper, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubStepper, "cub-stepper", never, { "size": { "alias": "size"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "labelOrientation": { "alias": "labelOrientation"; "required": false; }; }, {}, ["stepList"], never, true, never>;
}

declare class CubNavStepper extends CubCdkStepper implements AfterViewInit, OnDestroy {
    private dir;
    private changeDetectorRef;
    private elementRef;
    private router;
    keyManager: FocusKeyManager<FocusableOption>;
    render2: Renderer2;
    showLoading: boolean;
    private readonly RESIZE_DEBOUNCE_TIME;
    private readonly LINE_MARGIN;
    private resizeListener?;
    private debounceTimer?;
    private isDestroyed;
    /** 尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    /** 當前選中的步驟索引，預設為 0。 */
    get selectedIndex(): number;
    set selectedIndex(index: NumberInput);
    /** 步驟器排列方向，預設為 'horizontal'。 */
    get orientation(): StepperOrientation;
    set orientation(value: StepperOrientation);
    /** 標籤文字排列位置，預設為 'horizontal'。 */
    labelOrientation: CubFlexOrientation;
    /** 目前選中的步驟物件，預設為 undefined。 */
    get selected(): any;
    set selected(step: any);
    lineBar: QueryList<ElementRef>;
    stepHeaderList: QueryList<CubStepHeader>;
    links: QueryList<RouterLink>;
    linksWithHref: QueryList<RouterLinkWithHref>;
    stepList: QueryList<CubStep>;
    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>, router: Router);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    isActive(index: number): boolean;
    isCompleted(index: number, step: CubCdkStep): boolean;
    isError(index: number, step: CubCdkStep): boolean;
    isDisabled(index: number, step: any): boolean;
    selectStep(index: number, step: CubStep): void;
    getFocusIndex(): number | null;
    onKeydown(event: KeyboardEvent): void;
    nextFocusIndex(currentIndex: number): number;
    previousFocusIndex(currentIndex: number): number;
    getLoadingColor(index: number, step: CubCdkStep): "error" | "brand" | "brand-contrast" | "neutral";
    reRenderLoading(): void;
    /** trackBy 函數：確保 Angular 能正確追蹤 step 項目 */
    trackByStep(index: number, step: CubCdkStep): any;
    private getStepHeaderByIndex;
    private calculateLinePosition;
    /**
     * 按照 data-step-index 屬性排序元素
     * 使用數據索引而非 DOM 順序，確保在動態 @if 情況下對應關係正確
     *
     * 支援兩種類型的元素：
     * 1. ElementRef[] - 直接有 nativeElement (如 lineBar)
     * 2. Component[] - 透過 elementRef.nativeElement 訪問 (如 CubStepHeader)
     */
    private sortByDataIndex;
    private activeHandler;
    private hasActiveLinks;
    private activeLinksIndex;
    private canRedirect;
    /**
     * 更新所有連接線的位置
     * 使用 data-step-index 屬性配對 stepHeader 和 lineBar，
     * 確保在動態 @if 插入/移除時對應關係正確
     */
    private updateLinePositions;
    /** 設置視窗大小監聽 */
    private setupWindowResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubNavStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubNavStepper, "cub-nav-stepper", never, { "size": { "alias": "size"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "labelOrientation": { "alias": "labelOrientation"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, {}, ["links", "linksWithHref", "stepList"], never, true, never>;
}

declare class CubStepperContainer extends CubCdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStepperContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubStepperContainer, "cub-stepper-container", never, {}, {}, never, never, true, never>;
}

declare class CubStepperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStepperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubStepperModule, never, [typeof i1.CubCdkStepperModule, typeof CubStep, typeof CubStepHeader, typeof CubStepContent, typeof CubStepper, typeof CubNavStepper, typeof CubStepperContainer], [typeof i1.CubCdkStepperModule, typeof CubStep, typeof CubStepHeader, typeof CubStepContent, typeof CubStepper, typeof CubNavStepper, typeof CubStepperContainer]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubStepperModule>;
}

export { CubNavStepper, CubStep, CubStepContent, CubStepHeader, CubStepper, CubStepperContainer, CubStepperModule };
