import * as i0 from '@angular/core';
import { AfterViewInit, OnDestroy, TemplateRef, AfterContentChecked, ElementRef, NgZone, AfterContentInit, DoCheck, QueryList, EventEmitter, ChangeDetectorRef, OnInit, InjectionToken } from '@angular/core';
import { AnimationEvent, AnimationTriggerMetadata } from '@angular/animations';
import * as rxjs from 'rxjs';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { FocusTrapFactory, FocusMonitor, InteractivityChecker, FocusOrigin, FocusTrap } from 'cub-lib-view-rootng/cdk/a11y';
import * as i1 from 'cub-lib-view-rootng/cdk/scrolling';
import { ViewportRuler } from 'cub-lib-view-rootng/cdk/scrolling';
import { Directionality } from 'cub-lib-view-rootng/cdk/bidi';
import { BooleanInput, NumberInput } from 'cub-lib-view-rootng/cdk/coercion';
import { Platform } from 'cub-lib-view-rootng/cdk/platform';
import { CubCdkPortalOutlet } from 'cub-lib-view-rootng/cdk/portal';

type CubLayoutAutoFocusTarget = 'dialog' | 'first-tabbable' | 'first-heading';
type CubLayoutToggleResult = 'open' | 'close';
type CubLayoutMode = 'over' | 'push' | 'side';

declare class CubStickyActionBar implements AfterViewInit, OnDestroy {
    private layoutService;
    stickyBar: TemplateRef<any>;
    /**
     元件 id，預設為 'cub-sticky-action-bar-0'。
     */
    id: string;
    /** 元件顯示的位置，有效值為 'top' 與 'bottom'，預設為 'top'。 */
    position: 'top' | 'bottom';
    constructor(layoutService: CubLayoutService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStickyActionBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubStickyActionBar, "cub-sticky-action-bar", ["cubStickyActionBar"], { "id": { "alias": "id"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CubLayoutService {
    stickyBarSource: BehaviorSubject<CubStickyActionBar[]>;
    stickyBarSource$: rxjs.Observable<CubStickyActionBar[]>;
    contentMarginCheck: Subject<number>;
    contentMarginCheck$: rxjs.Observable<number>;
    constructor();
    registerStickyBar(stickyBar: CubStickyActionBar): void;
    unregisterStickyBar(stickyBar: CubStickyActionBar): void;
    onPanelResize(width: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLayoutService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CubLayoutService>;
}

declare class CubLayoutPanel implements AfterViewInit, AfterContentChecked, OnDestroy {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _focusTrapFactory: FocusTrapFactory;
    protected _focusMonitor: FocusMonitor;
    protected _platform: Platform;
    protected _ngZone: NgZone;
    protected _layoutService: CubLayoutService;
    protected readonly _interactivityChecker: InteractivityChecker;
    protected _doc: any;
    _container?: CubLayoutContainer | undefined;
    _animationState: 'open-instant' | 'open' | 'void';
    readonly _modeChanged: Subject<void>;
    readonly _animationStarted: Subject<AnimationEvent>;
    readonly _animationEnd: Subject<AnimationEvent>;
    protected _position: 'start' | 'end';
    protected _mode: CubLayoutMode;
    protected _disableClose: boolean;
    protected _autoFocus: CubLayoutAutoFocusTarget | string | boolean | undefined;
    protected _opened: boolean;
    protected _openedVia: FocusOrigin | null;
    protected _focusTrap: FocusTrap;
    protected _elementFocusedBeforeLayoutWasOpened: HTMLElement | null;
    protected _enableAnimations: boolean;
    protected _isAttached: boolean;
    protected _anchor: Comment | null;
    protected resizeObserver?: ResizeObserver;
    protected readonly _destroyed: Subject<void>;
    /** 元件顯示的位置，有效值為 'start' 與 'end'，預設為 'start'。 */
    get position(): 'start' | 'end';
    set position(value: 'start' | 'end');
    /** 元件的顯示模式，有效值為 'over'、'push' 與 'side'，預設為 'over'。 */
    /** 'over' 表示懸浮在內容區塊之上，並顯示遮罩覆蓋住內容區塊。 */
    /** 'push' 表示將內容區塊推開，並顯示遮罩覆蓋住內容區塊。 */
    /** 'side' 表示與內容區塊並排顯示，縮小內容區塊顯示寬度。 */
    get mode(): CubLayoutMode;
    set mode(value: CubLayoutMode);
    /** 是否禁止使用退出鍵或點擊背景來關閉抽屜，預設為 false。 */
    get disableClose(): boolean;
    set disableClose(value: BooleanInput);
    /** 元件開啟時，是否自動聚焦於第一個可聚焦元素，預設為 undefined。 */
    get autoFocus(): CubLayoutAutoFocusTarget | string | boolean;
    set autoFocus(value: CubLayoutAutoFocusTarget | string | BooleanInput);
    /** 元件是否開啟，預設為 false。 */
    get opened(): boolean;
    set opened(value: BooleanInput);
    /** 當開啟狀態改變時調用的通知事件。 */
    readonly openedChange: EventEmitter<boolean>;
    /** 當開啟時調用的通知事件。 */
    readonly _openedStream: Observable<void>;
    /** 當開始開啟時調用的通知事件。 */
    readonly openedStart: Observable<void>;
    /** 當關閉時調用的通知事件。 */
    readonly _closedStream: Observable<void>;
    /** 當開始關閉時調用的通知事件。 */
    readonly closedStart: Observable<void>;
    readonly onPositionChanged: EventEmitter<void>;
    _content: ElementRef<HTMLElement>;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusTrapFactory: FocusTrapFactory, _focusMonitor: FocusMonitor, _platform: Platform, _ngZone: NgZone, _layoutService: CubLayoutService, _interactivityChecker: InteractivityChecker, _doc: any, _container?: CubLayoutContainer | undefined);
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    open(openedVia?: FocusOrigin): Promise<CubLayoutToggleResult>;
    close(): Promise<CubLayoutToggleResult>;
    toggle(isOpen?: boolean, openedVia?: FocusOrigin): Promise<CubLayoutToggleResult>;
    _closeViaBackdropClick(): Promise<CubLayoutToggleResult>;
    _getWidth(): number;
    protected _registeredObserver(): void;
    protected _forceFocus(element: HTMLElement, options?: FocusOptions): void;
    protected _focusByCssSelector(selector: string, options?: FocusOptions): void;
    protected _takeFocus(): void;
    protected _restoreFocus(focusOrigin: Exclude<FocusOrigin, null>): void;
    protected _isFocusWithinLayout(): boolean;
    protected _setOpen(isOpen: boolean, restoreFocus: boolean, focusOrigin: Exclude<FocusOrigin, null>): Promise<CubLayoutToggleResult>;
    protected _updateFocusTrapState(): void;
    protected _updatePositionInParent(newPosition: 'start' | 'end'): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLayoutPanel, [null, null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubLayoutPanel, "cub-layout-panel", ["cubLayoutPanel"], { "position": { "alias": "position"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "opened": { "alias": "opened"; "required": false; }; }, { "openedChange": "openedChange"; "_openedStream": "opened"; "openedStart": "openedStart"; "_closedStream": "closed"; "closedStart": "closedStart"; "onPositionChanged": "positionChanged"; }, never, ["*"], true, never>;
}
declare class CubLayoutContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLayoutContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubLayoutContent, "cub-layout-content", never, {}, {}, never, ["*"], true, never>;
}
declare class CubLayoutContainer implements AfterContentInit, DoCheck, OnDestroy {
    layoutService: CubLayoutService;
    private _dir;
    private _element;
    private _ngZone;
    private _changeDetectorRef;
    private _animationMode?;
    _backdropOverride: boolean | null;
    _contentMargins: {
        left: number | null;
        right: number | null;
    };
    _contentPaddings: {
        top: number;
        bottom: number;
    };
    _stickyBars: CubStickyActionBar[];
    _stickyTopBar: CubStickyActionBar | null;
    _stickyBottomBar: CubStickyActionBar | null;
    _layoutPanels: QueryList<CubLayoutPanel>;
    readonly _contentMarginChanges: Subject<{
        left: number | null;
        right: number | null;
    }>;
    readonly _contentPaddingChanges: Subject<{
        top: number | null;
        bottom: number | null;
    }>;
    private _autosize;
    private _start;
    private _end;
    private _left;
    private _right;
    private readonly _destroyed;
    private readonly _doCheckSubject;
    get start(): CubLayoutPanel | null;
    get end(): CubLayoutPanel | null;
    /** 元件尺寸改變時，是否自動調整容器大小，預設為 undefined。 */
    get autosize(): boolean;
    set autosize(value: BooleanInput);
    /** 元件打開時，是否顯示遮罩背景，預設為 null。 */
    get hasBackdrop(): boolean;
    set hasBackdrop(value: BooleanInput);
    /** 當點擊遮罩背景時調用的通知事件。 */
    readonly backdropClick: EventEmitter<void>;
    _allLayoutPanels: QueryList<CubLayoutPanel>;
    _content: CubLayoutContent;
    _layoutContent: CubLayoutContent;
    portalOutlet: CubCdkPortalOutlet;
    _layoutStickyTopBar: ElementRef<HTMLElement>;
    _layoutStickyBottomBar: ElementRef<HTMLElement>;
    constructor(layoutService: CubLayoutService, _dir: Directionality, _element: ElementRef<HTMLElement>, _ngZone: NgZone, _changeDetectorRef: ChangeDetectorRef, viewportRuler: ViewportRuler, defaultAutosize?: boolean, _animationMode?: string | undefined);
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    updateContentMargins(): void;
    updateContentPaddings(): void;
    _isPushed(): boolean;
    _onBackdropClicked(): void;
    _closeModalLayoutsViaBackdrop(): void;
    _isShowingBackdrop(): boolean;
    private _watchLayoutToggle;
    private _watchLayoutPosition;
    private _watchLayoutMode;
    private _setContainerClass;
    private _validateStickyBars;
    private _validateLayouts;
    private _canHaveBackdrop;
    private _isLayoutOpen;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLayoutContainer, [null, { optional: true; }, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubLayoutContainer, "cub-layout-container", ["cubLayoutContainer"], { "autosize": { "alias": "autosize"; "required": false; }; "hasBackdrop": { "alias": "hasBackdrop"; "required": false; }; }, { "backdropClick": "backdropClick"; }, ["_content", "_allLayoutPanels"], ["[cubLayoutHeader]", "[cubLayoutPanel]", "cub-layout-content", "*", "[cubLayoutFooter]"], true, never>;
}

declare class CubHeader implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubHeader, "cub-header", ["cubHeader"], {}, {}, never, ["*"], true, never>;
}

declare class CubFooter implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFooter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubFooter, "cub-footer", ["cubFooter"], {}, {}, never, ["*"], true, never>;
}

declare class CubSidebarContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSidebarContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSidebarContent, "cub-sidebar-content", ["cubSidebarContent"], {}, {}, never, never, true, never>;
}

declare class CubSidebar extends CubLayoutPanel {
    private _fixedInViewport;
    private _fixedTopGap;
    private _fixedBottomGap;
    /** 元件是否固定在可視區域中，預設為 false。 */
    get fixedInViewport(): boolean;
    set fixedInViewport(value: BooleanInput);
    /** 元件設定為固定模式時，與可視區域上方的間距，預設為 0。 */
    get fixedTopGap(): number;
    set fixedTopGap(value: NumberInput);
    /** 元件設定為固定模式時，與可視區域下方的間距，預設為 0。 */
    get fixedBottomGap(): number;
    set fixedBottomGap(value: NumberInput);
    _contentStatic: CubSidebarContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubSidebar, "cub-sidebar", ["cubSidebar"], { "fixedInViewport": { "alias": "fixedInViewport"; "required": false; }; "fixedTopGap": { "alias": "fixedTopGap"; "required": false; }; "fixedBottomGap": { "alias": "fixedBottomGap"; "required": false; }; }, {}, ["_contentStatic"], ["cub-sidebar-header", "cub-sidebar-content", "*", "cub-sidebar-actions"], true, never>;
}

declare class CubSidebarHeader implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSidebarHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubSidebarHeader, "cub-sidebar-header", ["cubSidebarHeader"], {}, {}, never, ["*", "cub-sidebar-close"], true, never>;
}

declare class CubSidebarClose {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSidebarClose, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSidebarClose, "cub-sidebar-close", ["cubSidebarClose"], {}, {}, never, never, true, never>;
}

declare class CubSidebarActions {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSidebarActions, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSidebarActions, "cub-sidebar-actions", ["cubSidebarActions"], {}, {}, never, never, true, never>;
}

declare const CubLayoutAnimations: {
    readonly transformLayout: AnimationTriggerMetadata;
};

declare const CUB_LAYOUT_DEFAULT_AUTOSIZE: InjectionToken<boolean>;
declare const CUB_LAYOUT_CONTAINER: InjectionToken<unknown>;

declare function throwCubDuplicatedLayoutError(position: string): void;
declare function throwCubDuplicatedStickyBarError(position: string): void;
declare function CUB_LAYOUT_DEFAULT_AUTOSIZE_FACTORY(): boolean;

declare class CubLayoutModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLayoutModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubLayoutModule, never, [typeof i1.CubCdkScrollableModule, typeof CubLayoutPanel, typeof CubLayoutContent, typeof CubLayoutContainer, typeof CubHeader, typeof CubFooter, typeof CubStickyActionBar, typeof CubSidebar, typeof CubSidebarHeader, typeof CubSidebarClose, typeof CubSidebarContent, typeof CubSidebarActions], [typeof i1.CubCdkScrollableModule, typeof CubLayoutPanel, typeof CubLayoutContent, typeof CubLayoutContainer, typeof CubHeader, typeof CubFooter, typeof CubStickyActionBar, typeof CubSidebar, typeof CubSidebarHeader, typeof CubSidebarClose, typeof CubSidebarContent, typeof CubSidebarActions]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubLayoutModule>;
}

export { CUB_LAYOUT_CONTAINER, CUB_LAYOUT_DEFAULT_AUTOSIZE, CUB_LAYOUT_DEFAULT_AUTOSIZE_FACTORY, CubFooter, CubHeader, CubLayoutAnimations, CubLayoutContainer, CubLayoutContent, CubLayoutModule, CubLayoutPanel, CubLayoutService, CubSidebar, CubSidebarActions, CubSidebarClose, CubSidebarContent, CubSidebarHeader, CubStickyActionBar, throwCubDuplicatedLayoutError, throwCubDuplicatedStickyBarError };
export type { CubLayoutAutoFocusTarget, CubLayoutMode, CubLayoutToggleResult };
