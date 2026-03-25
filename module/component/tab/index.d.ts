import * as i0 from '@angular/core';
import { ElementRef, NgZone, AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy, ChangeDetectorRef, QueryList, EventEmitter, Injector, Renderer2, OnInit, ComponentFactoryResolver, ViewContainerRef, TemplateRef, OnChanges, SimpleChanges, InjectionToken } from '@angular/core';
import { Directionality, Direction } from 'cub-lib-view-rootng/cdk/bidi';
import { ViewportRuler } from 'cub-lib-view-rootng/cdk/scrolling';
import { Platform } from 'cub-lib-view-rootng/cdk/platform';
import * as cub_lib_view_rootng_component_common from 'cub-lib-view-rootng/component/common';
import { CubFlexOrientation, HasTabIndex, CanDisable, CubThemeSize } from 'cub-lib-view-rootng/component/common';
import { NumberInput, BooleanInput } from 'cub-lib-view-rootng/cdk/coercion';
import { FocusableOption, FocusMonitor, FocusOrigin } from 'cub-lib-view-rootng/cdk/a11y';
import { Subject } from 'rxjs';
import { CubCdkPortalOutlet, TemplatePortal, CubCdkPortal } from 'cub-lib-view-rootng/cdk/portal';
import { AnimationEvent, AnimationTriggerMetadata } from '@angular/animations';

declare class CubTabNavPanel {
    _activeTabId?: string;
    /** 元件唯一識別符，預設為 undefined。 */
    id: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabNavPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTabNavPanel, "cub-tab-nav-panel", ["cubTabNavPanel"], { "id": { "alias": "id"; "required": false; }; }, {}, never, ["*"], true, never>;
}

interface _CubInkBarPositioner {
    (element: HTMLElement, orientation: CubFlexOrientation): {
        left?: string;
        width?: string;
        top?: string;
        height?: string;
    };
}
declare class CubInkBar {
    private _elementRef;
    private _ngZone;
    private _inkBarPositioner;
    _animationMode?: string | undefined;
    _orientation: CubFlexOrientation;
    cubTabGroup: any;
    constructor(_elementRef: ElementRef<HTMLElement>, _ngZone: NgZone, _inkBarPositioner: _CubInkBarPositioner, _animationMode?: string | undefined);
    alignToElement(element: HTMLElement): void;
    show(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubInkBar, [null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubInkBar, "cub-ink-bar", never, {}, {}, never, never, true, never>;
}

type CubTabScrollDirection = 'after' | 'before';
type CubPaginatedTabHeaderItem = FocusableOption & {
    elementRef: ElementRef;
};
type CubTabBodyPositionState = 'left' | 'center' | 'right' | 'left-origin-center' | 'right-origin-center';
type CubTabHeaderPosition = 'above' | 'below';
type CubTabAppearance = 'line' | 'filled' | 'outline';

declare abstract class CubTabHeaderPaginated implements AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _changeDetectorRef: ChangeDetectorRef;
    private _viewportRuler;
    private _dir;
    private _ngZone;
    private _platform;
    _animationMode?: string | undefined;
    abstract _tabListContainer: ElementRef<HTMLElement>;
    abstract _tabList: ElementRef<HTMLElement>;
    abstract _tabListInner: ElementRef<HTMLElement>;
    abstract _nextPaginator: ElementRef<HTMLElement>;
    abstract _previousPaginator: ElementRef<HTMLElement>;
    abstract _items: QueryList<CubPaginatedTabHeaderItem>;
    abstract _inkBar: {
        hide: () => void;
        alignToElement: (element: HTMLElement) => void;
    };
    _showPaginationControls: boolean;
    _disableScrollAfter: boolean;
    _disableScrollBefore: boolean;
    _orientation: CubFlexOrientation;
    cubTabGroup: any;
    readonly selectFocusedIndex: EventEmitter<number>;
    readonly indexFocused: EventEmitter<number>;
    protected readonly _destroyed: Subject<void>;
    private _tabLabelCount;
    private _scrollDistanceChanged;
    private _keyManager;
    private _currentTextContent;
    private _stopScrolling;
    private _scrollDistance;
    private _selectedIndexChanged;
    private _disablePagination;
    private _selectedIndex;
    get scrollDistance(): number;
    set scrollDistance(value: number);
    get focusIndex(): number;
    set focusIndex(value: number);
    get selectedIndex(): number;
    set selectedIndex(value: NumberInput);
    /**
     * 是否停用 tab 分頁按鈕（當 tab 過多時不顯示左右切換箭頭）。
     * 預設為 false。
     */
    get disablePagination(): boolean;
    set disablePagination(value: BooleanInput);
    constructor(_elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef, _viewportRuler: ViewportRuler, _dir: Directionality, _ngZone: NgZone, _platform: Platform, _animationMode?: string | undefined);
    protected abstract _itemSelected(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    updatePagination(): void;
    _handleKeydown(event: KeyboardEvent): void;
    _onContentChanges(): void;
    _isValidIndex(index: number): boolean;
    _setTabFocus(tabIndex: number): void;
    _getLayoutDirection(): Direction;
    _updateTabScrollPosition(): void;
    _scrollHeader(direction: CubTabScrollDirection): {
        maxScrollDistance: number;
        distance: number;
    };
    _handlePaginatorClick(direction: CubTabScrollDirection): void;
    _scrollToLabel(labelIndex: number): void;
    _checkPaginationEnabled(): void;
    _checkScrollingControls(): void;
    _getMaxScrollDistance(): number;
    _alignInkBarToSelectedTab(): void;
    _stopInterval(): void;
    _handlePaginatorPress(direction: CubTabScrollDirection, mouseEvent?: MouseEvent): void;
    private _itemsResized;
    private _scrollTo;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabHeaderPaginated, [null, null, null, { optional: true; }, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabHeaderPaginated, never, never, { "disablePagination": { "alias": "disablePagination"; "required": false; }; }, {}, never, never, true, never>;
}

declare abstract class _CubTabNavBase extends CubTabHeaderPaginated implements AfterContentChecked, AfterContentInit, OnDestroy {
    abstract _items: QueryList<CubPaginatedTabHeaderItem & {
        active: boolean;
        id: string;
    }>;
    /**
     * 綁定對應的 tab panel 元件實例。
     * 讓導覽列能與內容面板互動（如同步 active 狀態、aria 屬性等）。
     */
    tabPanel?: CubTabNavPanel;
    constructor(elementRef: ElementRef, dir: Directionality, ngZone: NgZone, changeDetectorRef: ChangeDetectorRef, viewportRuler: ViewportRuler, platform: Platform);
    ngAfterContentInit(): void;
    updateActiveLink(): void;
    _getRole(): string | null;
    protected _itemSelected(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubTabNavBase, [null, { optional: true; }, null, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubTabNavBase, never, never, { "tabPanel": { "alias": "tabPanel"; "required": false; }; }, {}, never, never, true, never>;
}

declare const _CubTabLinkMixinBase: cub_lib_view_rootng_component_common.Constructor<HasTabIndex> & cub_lib_view_rootng_component_common.AbstractConstructor<HasTabIndex> & cub_lib_view_rootng_component_common.Constructor<CanDisable> & cub_lib_view_rootng_component_common.AbstractConstructor<CanDisable> & {
    new (): {};
};
declare class _CubTabLinkBase extends _CubTabLinkMixinBase implements AfterViewInit, OnDestroy, CanDisable, HasTabIndex, FocusableOption {
    private _tabNavBar;
    private injector;
    private renderer;
    elementRef: ElementRef;
    private _focusMonitor;
    protected _isActive: boolean;
    private _rippleInstance;
    /**
     * 是否為目前作用中的 tab link。
     */
    get active(): boolean;
    set active(value: BooleanInput);
    /** 元件唯一識別符，預設為 undefined。 */
    id: string;
    constructor(_tabNavBar: _CubTabNavBase, injector: Injector, renderer: Renderer2, elementRef: ElementRef, tabIndex: string, _focusMonitor: FocusMonitor);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    focus(): void;
    _handleFocus(): void;
    _handleKeydown(event: KeyboardEvent): void;
    _getAriaControls(): string | null;
    _getAriaSelected(): string | null;
    _getAriaCurrent(): string | null;
    _getRole(): string | null;
    _getTabIndex(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubTabLinkBase, [null, null, null, null, { attribute: "tabindex"; optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubTabLinkBase, never, never, { "active": { "alias": "active"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, {}, never, never, true, never>;
}
declare class CubTabLink extends _CubTabLinkBase implements OnDestroy {
    constructor(tabNavBar: CubTabNavBar, injector: Injector, renderer: Renderer2, elementRef: ElementRef, tabIndex: string, focusMonitor: FocusMonitor);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabLink, [null, null, null, null, { attribute: "tabindex"; optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabLink, "[cub-tab-link], [CubTabLink]", ["cubTabLink"], { "disabled": { "alias": "disabled"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTabNavBar extends _CubTabNavBase {
    _items: QueryList<CubTabLink>;
    _inkBar: CubInkBar;
    _tabListContainer: ElementRef;
    _tabList: ElementRef;
    _tabListInner: ElementRef;
    _nextPaginator: ElementRef<HTMLElement>;
    _previousPaginator: ElementRef<HTMLElement>;
    constructor(elementRef: ElementRef, dir: Directionality, ngZone: NgZone, changeDetectorRef: ChangeDetectorRef, viewportRuler: ViewportRuler, platform: Platform);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabNavBar, [null, { optional: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTabNavBar, "[cub-tab-nav-bar]", ["cubTabNavBar", "cubTabNav"], { "color": { "alias": "color"; "required": false; }; }, {}, ["_items"], ["*"], true, never>;
}

declare abstract class _CubTabBodyBase implements OnInit, OnDestroy {
    private _elementRef;
    private _dir;
    abstract _portalHost: CubCdkPortalOutlet;
    _position: CubTabBodyPositionState;
    readonly _translateTabComplete: Subject<AnimationEvent>;
    private _positionIndex;
    private _dirChangeSubscription;
    /** 要顯示的內容模板（通常由外部傳入），預設為 undefined */
    _content: TemplatePortal;
    /** 動畫起始位置，預設為 null。 */
    origin: number | null;
    /** 動畫持續時間，預設為 '0ms'。 */
    animationDuration: string;
    /** 是否保留內容（切換時不移除 DOM），預設為 false。 */
    preserveContent: boolean;
    /** 設定 tab body 的位置索引，會自動計算動畫狀態。 */
    set position(position: number);
    /** 當 tab body 開始置中動畫時發出，帶入目前 tab 的高度（px）。 */
    readonly onCentering: EventEmitter<number>;
    /** 當 tab body 動畫開始置中前發出，帶入是否為置中狀態（true/false）。 */
    readonly beforeCentering: EventEmitter<boolean>;
    /** 當 tab body 離開置中狀態後發出。 */
    readonly afterLeavingCenter: EventEmitter<void>;
    /** 當 tab body 動畫完成置中時發出。 */
    readonly onCentered: EventEmitter<void>;
    constructor(_elementRef: ElementRef<HTMLElement>, _dir: Directionality, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    _onTranslateTabStarted(event: AnimationEvent): void;
    _getLayoutDirection(): Direction;
    _isCenterPosition(position: CubTabBodyPositionState | string): boolean;
    private _computePositionAnimationState;
    private _computePositionFromOrigin;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubTabBodyBase, [null, { optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubTabBodyBase, never, never, { "_content": { "alias": "content"; "required": false; }; "origin": { "alias": "origin"; "required": false; }; "animationDuration": { "alias": "animationDuration"; "required": false; }; "preserveContent": { "alias": "preserveContent"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, { "onCentering": "onCentering"; "beforeCentering": "beforeCentering"; "afterLeavingCenter": "afterLeavingCenter"; "onCentered": "onCentered"; }, never, never, true, never>;
}

declare class CubTabBody extends _CubTabBodyBase {
    _portalHost: CubCdkPortalOutlet;
    constructor(elementRef: ElementRef<HTMLElement>, dir: Directionality, changeDetectorRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabBody, [null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTabBody, "cub-tab-body", never, {}, {}, never, never, true, never>;
}
declare class CubTabBodyPortal extends CubCdkPortalOutlet implements OnInit, OnDestroy {
    private _host;
    private _centeringSub;
    private _leavingSub;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, _host: CubTabBody, _document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabBodyPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabBodyPortal, "[CubTabBodyPortal]", never, {}, {}, never, never, true, never>;
}

declare class CubTabLabel extends CubCdkPortal {
    _closestTab: any;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, _closestTab: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabLabel, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabLabel, "[cub-tab-label],[cubTabLabel]", never, {}, {}, never, never, true, never>;
}

declare const _CubTabBase: cub_lib_view_rootng_component_common.Constructor<CanDisable> & cub_lib_view_rootng_component_common.AbstractConstructor<CanDisable> & {
    new (): {};
};
declare class CubTab extends _CubTabBase implements OnInit, CanDisable, OnChanges, OnDestroy {
    private _viewContainerRef;
    _closestTabGroup: any;
    position: number | null;
    origin: number | null;
    isActive: boolean;
    readonly _stateChanges: Subject<void>;
    protected _templateLabel: CubTabLabel;
    private _contentPortal;
    get content(): TemplatePortal | null;
    /** 元件傳入的計數數值，預設值為 ''。 */
    count: number;
    /** 元件傳入的計數數值，判斷 0 是否顯示，預設值為 true。 */
    countHidden: boolean;
    /** 示的數值最大值，當超過設定數值時，會以"最大值+"顯示。 */
    countMax: number | null;
    /** 元件標籤，預設為 ''。 */
    textLabel: string;
    /** 元件標題（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaLabel: string;
    /** 優先於標題讀取的替代文字（螢幕閱讀器讀取用），預設為 null。 */
    ariaLabelledby: string;
    /** 元件 Label 額外 CSS 樣式類別，可為字串或字串陣列，預設為 undefined。 */
    labelClass: string | string[];
    /** 元件 Body 額外 CSS 樣式類別，可為字串或字串陣列，預設為 undefined。 */
    bodyClass: string | string[];
    get templateLabel(): CubTabLabel;
    set templateLabel(value: CubTabLabel);
    _explicitContent: TemplateRef<any>;
    _implicitContent: TemplateRef<any>;
    constructor(_viewContainerRef: ViewContainerRef, _closestTabGroup: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    protected _setTemplateLabelInput(value: CubTabLabel | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTab, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTab, "cub-tab", ["cubTab"], { "disabled": { "alias": "disabled"; "required": false; }; "count": { "alias": "count"; "required": false; }; "countHidden": { "alias": "countHidden"; "required": false; }; "countMax": { "alias": "countMax"; "required": false; }; "textLabel": { "alias": "label"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "bodyClass": { "alias": "bodyClass"; "required": false; }; }, {}, ["templateLabel", "_explicitContent"], ["*"], true, never>;
}

interface CubTabGroupBaseHeader {
    _alignInkBarToSelectedTab(): void;
    updatePagination(): void;
    focusIndex: number;
}
interface CubTabsConfig {
    animationDuration?: string;
    disablePagination?: boolean;
    fitInkBarToContent?: boolean;
    dynamicHeight?: boolean;
    contentTabIndex?: number;
    preserveContent?: boolean;
}

declare class CubTabChangeEvent {
    index: number;
    tab: CubTab;
}

declare const _CubTabGroupMixinBase: cub_lib_view_rootng_component_common.Constructor<cub_lib_view_rootng_component_common.CanColor> & cub_lib_view_rootng_component_common.AbstractConstructor<cub_lib_view_rootng_component_common.CanColor> & {
    new (_elementRef: ElementRef): {
        _elementRef: ElementRef;
    };
};
declare abstract class _CubTabGroupBase extends _CubTabGroupMixinBase implements AfterContentInit, AfterContentChecked, OnDestroy {
    protected _changeDetectorRef: ChangeDetectorRef;
    _animationMode?: string | undefined;
    abstract _allTabs: QueryList<CubTab>;
    abstract _tabBodyWrapper: ElementRef;
    abstract _tabHeader: CubTabGroupBaseHeader;
    _tabs: QueryList<CubTab>;
    /**
     * 【暫不開放使用】
     * tab 標頭（tab 標籤列）顯示位置。可選 'above'（上方）、'below'（下方）、'before'（左側）、'after'（右側）。
     * 預設為 'above'。
     */
    headerPosition: CubTabHeaderPosition;
    private _groupId;
    private _indexToSelect;
    private _lastFocusedTabIndex;
    private _tabBodyWrapperHeight;
    private _tabsSubscription;
    private _tabLabelSubscription;
    private _orientation;
    private _dynamicHeight;
    private _selectedIndex;
    private _animationDuration;
    private _contentTabIndex;
    private _disablePagination;
    private _preserveContent;
    /** 元件外觀樣式，預設為 'line'。 */
    appearance: CubTabAppearance;
    /** 尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    /** 元件方向，預設為 'horizontal'。 */
    get orientation(): CubFlexOrientation;
    set orientation(value: CubFlexOrientation);
    /**
     * 是否根據選取的 tab 動態調整高度。預設為 false。
     * 設為 true 時，tab 內容高度會隨內容自動變化。
     */
    get dynamicHeight(): boolean;
    set dynamicHeight(value: BooleanInput);
    /**
     * 當前選取的 tab 索引（從 0 開始）。可由外部設定或雙向繫結。
     * 預設為 null（會自動選第一個）。
     */
    get selectedIndex(): number | null;
    set selectedIndex(value: NumberInput);
    /**
     * tab 切換動畫持續時間，可傳數字（自動補 ms）或字串。
     * 預設為 '0ms'。
     */
    get animationDuration(): string;
    set animationDuration(value: NumberInput);
    /**
     * 內容區域的 tabIndex 屬性，預設為 null（不設定）。
     */
    get contentTabIndex(): number | null;
    set contentTabIndex(value: NumberInput);
    /**
     * 是否停用 tab 分頁按鈕（當 tab 過多時不顯示左右切換箭頭）。
     * 預設為 false。
     */
    get disablePagination(): boolean;
    set disablePagination(value: BooleanInput);
    /**
     * 切換 tab 時是否保留內容（不移除 DOM），預設為 false。
     */
    get preserveContent(): boolean;
    set preserveContent(value: BooleanInput);
    /**
     * 當選取的 tab 索引變更時發出。
     */
    readonly selectedIndexChange: EventEmitter<number>;
    /**
     * 當 tab header focus 變更時發出。
     */
    readonly focusChange: EventEmitter<CubTabChangeEvent>;
    /**
     * 當 tab 動畫完成時發出。
     */
    readonly animationDone: EventEmitter<void>;
    /**
     * 當選取的 tab 變更時發出，包含索引與 tab 實例。
     */
    readonly selectedTabChange: EventEmitter<CubTabChangeEvent>;
    constructor(elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, defaultConfig?: CubTabsConfig, _animationMode?: string | undefined);
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    realignInkBar(): void;
    updatePagination(): void;
    focusTab(index: number): void;
    _focusChanged(index: number): void;
    _getTabLabelId(i: number): string;
    _getTabContentId(i: number): string;
    _setTabBodyWrapperHeight(tabHeight: number): void;
    _removeTabBodyWrapperHeight(): void;
    _handleClick(tab: CubTab, tabHeader: CubTabGroupBaseHeader, index: number): void;
    _getTabIndex(tab: CubTab, index: number): number | null;
    _tabFocusChanged(focusOrigin: FocusOrigin, index: number): void;
    private _clampTabIndex;
    private _subscribeToAllTabChanges;
    private _createChangeEvent;
    private _subscribeToTabLabels;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubTabGroupBase, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubTabGroupBase, never, never, { "appearance": { "alias": "appearance"; "required": false; }; "size": { "alias": "size"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "dynamicHeight": { "alias": "dynamicHeight"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "animationDuration": { "alias": "animationDuration"; "required": false; }; "contentTabIndex": { "alias": "contentTabIndex"; "required": false; }; "disablePagination": { "alias": "disablePagination"; "required": false; }; "preserveContent": { "alias": "preserveContent"; "required": false; }; }, { "selectedIndexChange": "selectedIndexChange"; "focusChange": "focusChange"; "animationDone": "animationDone"; "selectedTabChange": "selectedTabChange"; }, never, never, true, never>;
}

declare class CubTabGroup extends _CubTabGroupBase {
    _allTabs: QueryList<CubTab>;
    _tabBodyWrapper: ElementRef;
    _tabHeader: CubTabGroupBaseHeader;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, defaultConfig?: CubTabsConfig, _animationMode?: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabGroup, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTabGroup, "cub-tab-group", ["cubTabGroup"], {}, {}, ["_allTabs"], never, true, never>;
}

declare abstract class _CubTabHeaderBase extends CubTabHeaderPaginated implements AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy {
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, viewportRuler: ViewportRuler, dir: Directionality, ngZone: NgZone, platform: Platform);
    protected _itemSelected(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubTabHeaderBase, [null, null, null, { optional: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubTabHeaderBase, "[CubTabHeaderBase]", never, {}, {}, never, never, true, never>;
}

declare const _CubTabLabelWrapperBase: cub_lib_view_rootng_component_common.Constructor<CanDisable> & cub_lib_view_rootng_component_common.AbstractConstructor<CanDisable> & {
    new (): {};
};
declare class CubTabLabelWrapper extends _CubTabLabelWrapperBase implements CanDisable {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    focus(): void;
    getOffsetLeft(): number;
    getOffsetWidth(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabLabelWrapper, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabLabelWrapper, "[CubTabLabelWrapper]", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTabHeader extends _CubTabHeaderBase implements AfterViewInit {
    _items: QueryList<CubTabLabelWrapper>;
    _inkBar: CubInkBar;
    _tabListContainer: ElementRef;
    _tabList: ElementRef;
    _tabListInner: ElementRef;
    _nextPaginator: ElementRef<HTMLElement>;
    _previousPaginator: ElementRef<HTMLElement>;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, viewportRuler: ViewportRuler, dir: Directionality, ngZone: NgZone, platform: Platform);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabHeader, [null, null, null, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTabHeader, "cub-tab-header", never, { "selectedIndex": { "alias": "selectedIndex"; "required": false; }; }, { "selectFocusedIndex": "selectFocusedIndex"; "indexFocused": "indexFocused"; }, ["_items"], ["*"], true, never>;
}

/**
 * Tab 切換時，因為不同分頁內容長度不同，有時會有檢視範圍上跳問題。
 * 此修正主要目的是讓切換保持穩定且檢視範圍不上跳。
 */
declare class CubGroupScrollFix implements AfterViewInit, OnDestroy {
    private cubTabGroup;
    private unsubscribe$;
    private scrollPosition;
    private tabChanging;
    constructor(cubTabGroup: CubTabGroup);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubGroupScrollFix, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubGroupScrollFix, "[cubTabGroupScrollFix]", never, {}, {}, never, never, true, never>;
}

declare class CubTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabContent, "[cubTabContent]", never, {}, {}, never, never, true, never>;
}

declare class CubTabNavGroup {
    /** 元件外觀樣式，預設為 'line'。 */
    appearance: CubTabAppearance;
    /** 尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabNavGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabNavGroup, "cub-tab-nav-group", never, { "appearance": { "alias": "appearance"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTabCount implements OnInit, OnChanges {
    private el;
    private renderer;
    private countElement;
    /** 元件傳入的計數數值，預設值為 0。 */
    count: number;
    /** 元件傳入的計數數值，判斷 0 是否隱藏，預設值為 true。 */
    countHidden: boolean;
    /** 示的數值最大值，當超過設定數值時，會以"最大值+"顯示，預設值 99。 */
    max: number | null;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private checkRenderedContent;
    private updateRenderedContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabCount, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTabCount, "[cubTabCount]", never, { "count": { "alias": "cubTabCount"; "required": false; }; "countHidden": { "alias": "cubTabCountHidden"; "required": false; }; "max": { "alias": "cubTabCountMax"; "required": false; }; }, {}, never, never, true, never>;
}

declare const CUB_TAB_CONTENT: InjectionToken<CubTabContent>;
declare const EXAGGERATED_OVERSCROLL = 60;
declare const HEADER_SCROLL_DELAY = 650;
declare const HEADER_SCROLL_INTERVAL = 100;
declare const passiveEventListenerOptions: EventListenerOptions;
declare const CUB_TABS_CONFIG: InjectionToken<CubTabsConfig>;
declare const CUB_TAB_GROUP: InjectionToken<any>;
declare const CUB_TAB_LABEL: InjectionToken<CubTabLabel>;
declare const CUB_TAB: InjectionToken<any>;
declare const cubTabsAnimations: {
    readonly translateTab: AnimationTriggerMetadata;
};

declare class CubTabModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTabModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubTabModule, never, [typeof CubGroupScrollFix, typeof CubTabNavBar, typeof CubTabBody, typeof CubTabGroup, typeof CubTabHeader, typeof CubTab, typeof CubTabNavPanel, typeof CubTabBodyPortal, typeof CubInkBar, typeof CubTabLabelWrapper, typeof CubTabLabel, typeof CubTabLink, typeof CubTabContent, typeof CubTabNavGroup, typeof CubTabCount], [typeof CubGroupScrollFix, typeof CubTabNavBar, typeof CubTabBody, typeof CubTabGroup, typeof CubTabHeader, typeof CubTab, typeof CubTabNavPanel, typeof CubTabBodyPortal, typeof CubInkBar, typeof CubTabLabelWrapper, typeof CubTabLabel, typeof CubTabLink, typeof CubTabContent, typeof CubTabNavGroup, typeof CubTabCount]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubTabModule>;
}

export { CUB_TAB, CUB_TABS_CONFIG, CUB_TAB_CONTENT, CUB_TAB_GROUP, CUB_TAB_LABEL, CubGroupScrollFix, CubInkBar, CubTab, CubTabBody, CubTabBodyPortal, CubTabChangeEvent, CubTabContent, CubTabCount, CubTabGroup, CubTabHeader, CubTabHeaderPaginated, CubTabLabel, CubTabLabelWrapper, CubTabLink, CubTabModule, CubTabNavBar, CubTabNavGroup, CubTabNavPanel, EXAGGERATED_OVERSCROLL, HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL, _CubTabBodyBase, _CubTabGroupBase, _CubTabHeaderBase, _CubTabLinkBase, _CubTabNavBase, cubTabsAnimations, passiveEventListenerOptions };
export type { CubPaginatedTabHeaderItem, CubTabAppearance, CubTabBodyPositionState, CubTabGroupBaseHeader, CubTabHeaderPosition, CubTabScrollDirection, CubTabsConfig };
