import * as i0 from '@angular/core';
import { ElementRef, InjectionToken, NgZone, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm, NgControl } from '@angular/forms';
import * as rxjs from 'rxjs';
import { Subject } from 'rxjs';
import { Platform } from 'cub-lib-view-rootng/cdk/platform';

type Constructor<T> = new (...args: any[]) => T;
type AbstractConstructor<T = object> = abstract new (...args: any[]) => T;

type CubThemeColor = 'brand' | 'success' | 'error' | 'warning' | 'neutral' | 'neutral-light' | undefined;
type CubThemeColorContrast = 'brand-contrast' | 'success-contrast' | 'error-contrast' | 'warning-contrast' | 'neutral-contrast' | 'neutral-light-contrast' | undefined;
type CubThemeColorScheme = 'light' | 'dark';
type CubThemeStatus = 'success' | 'warning' | 'error' | 'neutral' | 'custom';
type CubThemeSize = 'small' | 'medium' | 'large' | 'extra-large';
type CubFormAppearance = 'outline' | 'borderless';
type CubFlexOrientation = 'horizontal' | 'vertical';

/** @docs-private */
interface CanColor {
    /** Theme color palette for the component. */
    color: CubThemeColor;
    /** Default color to fall back to if no value is set. */
    defaultColor: CubThemeColor;
}
type CanColorCtor = Constructor<CanColor> & AbstractConstructor<CanColor>;
/** @docs-private */
interface HasElementRef {
    _elementRef: ElementRef;
}
/** Possible color palette values. */
/** Mixin to augment a directive with a `color` property. */
declare function mixinColor<T extends AbstractConstructor<HasElementRef>>(base: T, defaultColor?: CubThemeColor): CanColorCtor & T;

/** @docs-private */
interface CanDisableRipple {
    /** Whether ripples are disabled. */
    disableRipple: boolean;
}
type CanDisableRippleCtor = Constructor<CanDisableRipple> & AbstractConstructor<CanDisableRipple>;
/** Mixin to augment a directive with a `disableRipple` property. */
declare function mixinDisableRipple<T extends AbstractConstructor<{}>>(base: T): CanDisableRippleCtor & T;

/** @docs-private */
interface CanDisable {
    /** Whether the component is disabled. */
    disabled: boolean;
}
type CanDisableCtor = Constructor<CanDisable> & AbstractConstructor<CanDisable>;
/** Mixin to augment a directive with a `disabled` property. */
declare function mixinDisabled<T extends AbstractConstructor<{}>>(base: T): CanDisableCtor & T;

/** Error state matcher that matches when a control is invalid and dirty. */
declare class ShowOnDirtyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowOnDirtyErrorStateMatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShowOnDirtyErrorStateMatcher>;
}
/** Provider that defines how form controls behave with regards to displaying error messages. */
declare class ErrorStateMatcher {
    isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorStateMatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorStateMatcher>;
}

interface CanUpdateErrorState {
    /** Updates the error state based on the provided error state matcher. */
    updateErrorState(): void;
    /** Whether the component is in an error state. */
    errorState: boolean;
    /** An object used to control the error state of the component. */
    errorStateMatcher: ErrorStateMatcher;
}
type CanUpdateErrorStateCtor = Constructor<CanUpdateErrorState> & AbstractConstructor<CanUpdateErrorState>;
interface HasErrorState {
    _parentFormGroup: FormGroupDirective;
    _parentForm: NgForm;
    _defaultErrorStateMatcher: ErrorStateMatcher;
    ngControl: NgControl;
    stateChanges: Subject<void>;
}
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 */
declare function mixinErrorState<T extends AbstractConstructor<HasErrorState>>(base: T): CanUpdateErrorStateCtor & T;

/** @docs-private */
interface HasTabIndex {
    /** Tabindex of the component. */
    tabIndex: number;
    /** Tabindex to which to fall back to if no value is set. */
    defaultTabIndex: number;
}
type HasTabIndexCtor = Constructor<HasTabIndex> & AbstractConstructor<HasTabIndex>;
/** Mixin to augment a directive with a `tabIndex` property. */
declare function mixinTabIndex<T extends AbstractConstructor<CanDisable>>(base: T, defaultTabIndex?: number): HasTabIndexCtor & T;

type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
declare enum DEVICE_BREAKPOINT {
    MOBILE = 375,
    TABLET_PORTRAIT = 768,
    TABLET_LANDSCAPE = 1024,
    DESKTOP = 1440,
    LARGE_DESKTOP = 1920
}
declare enum GRID_BREAKPOINT {
    SM = 576,
    MD = 768,
    LG = 1024,
    XL = 1440,
    XXL = 1920
}

declare const isMobileDevice: () => boolean;
declare const isIOSMobileDevice: () => boolean;

declare const setViewHeight: () => void;
declare const setViewWidth: () => void;

type CubDividerAppearance = 'dashed' | 'dotted' | 'solid';

declare class CubDivider {
    private _appearance;
    get appearance(): CubDividerAppearance;
    set appearance(value: CubDividerAppearance);
    orientation: CubFlexOrientation;
    get isVertical(): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubDivider, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubDivider, "[cubDivider], cub-divider", ["cubDivider"], { "appearance": { "alias": "appearance"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubDividerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubDividerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubDividerModule, never, [typeof CubDivider], [typeof CubDivider]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubDividerModule>;
}

/**
 * @dynamic is for runtime initializing DomHandler.browser
 *
 * If delete below comment, we can see this error message:
 *  Metadata collected contains an error that will be reported at runtime:
 *  Only initialized variables and constants can be referenced
 *  because the value of this variable is needed by the template compiler.
 */
declare class DomHandler {
    static zindex: number;
    private static calculatedScrollbarWidth;
    private static calculatedScrollbarHeight;
    private static browser;
    static addClass(element: any, className: string): void;
    static addMultipleClasses(element: any, className: string): void;
    static removeClass(element: any, className: string): void;
    static hasClass(element: any, className: string): boolean;
    static siblings(element: any): any;
    static find(element: any, selector: string): any[];
    static findSingle(element: any, selector: string): any;
    static index(element: any): number;
    static indexWithinGroup(element: any, attributeName: string): number;
    static appendOverlay(overlay: any, target: any, appendTo?: any): void;
    static alignOverlay(overlay: any, target: any, appendTo?: any, calculateMinWidth?: boolean): void;
    static relativePosition(element: any, target: any): void;
    static absolutePosition(element: any, target: any): void;
    static getParents(element: any, parents?: any): any;
    static getScrollableParents(element: any): any[];
    static getHiddenElementOuterHeight(element: any): number;
    static getHiddenElementOuterWidth(element: any): number;
    static getHiddenElementDimensions(element: any): any;
    static scrollInView(container: any, item: any): void;
    static fadeIn(element: any, duration: number): void;
    static fadeOut(element: any, ms: any): void;
    static getWindowScrollTop(): number;
    static getWindowScrollLeft(): number;
    static getOuterWidth(el: any, margin?: any): any;
    static getHorizontalPadding(el: any): number;
    static getHorizontalMargin(el: any): number;
    static innerWidth(el: any): any;
    static width(el: any): any;
    static getInnerHeight(el: any): any;
    static getOuterHeight(el: any, margin?: any): any;
    static getHeight(el: any): number;
    static getWidth(el: any): number;
    static getViewport(): any;
    static getOffset(el: any): {
        top: any;
        left: any;
    };
    static replaceElementWith(element: any, replacementElement: any): any;
    static getUserAgent(): string;
    static isIE(): boolean;
    static isIOS(): boolean;
    static isAndroid(): boolean;
    static isTouchDevice(): boolean;
    static appendChild(element: any, target: any): void;
    static removeChild(element: any, target: any): void;
    static removeElement(element: Element): void;
    static isElement(obj: any): any;
    static calculateScrollbarWidth(el?: HTMLElement): number;
    static calculateScrollbarHeight(): number;
    static invokeElementMethod(element: any, methodName: string, args?: any[]): void;
    static clearSelection(): void;
    static getBrowser(): any;
    static resolveUserAgent(): {
        browser: string;
        version: string;
    };
    static isInteger(value: any): boolean;
    static isHidden(element: HTMLElement): boolean;
    static isVisible(element: HTMLElement): boolean;
    static isExist(element: HTMLElement): false | "" | ParentNode | null;
    static focus(element: HTMLElement, options?: FocusOptions): void;
    static getFocusableElements(element: HTMLElement): any[];
    static generateZIndex(): number;
    static getSelection(): string | null;
    static getTargetElement(target: any, el?: HTMLElement): any;
}

declare class CubFilterService {
    filters: {
        startsWith: (value: any, filter: any, filterLocale?: any) => boolean;
        contains: (value: any, filter: any, filterLocale?: any) => boolean;
        notContains: (value: any, filter: any, filterLocale?: any) => boolean;
        endsWith: (value: any, filter: any, filterLocale?: any) => boolean;
        equals: (value: any, filter: any, filterLocale?: any) => boolean;
        notEquals: (value: any, filter: any, filterLocale?: any) => boolean;
        in: (value: any, filter: any[], filterLocale?: any) => boolean;
        between: (value: any, filter: any[], filterLocale?: any) => boolean;
        lt: (value: any, filter: any, filterLocale?: any) => boolean;
        lte: (value: any, filter: any, filterLocale?: any) => boolean;
        gt: (value: any, filter: any, filterLocale?: any) => boolean;
        gte: (value: any, filter: any, filterLocale?: any) => boolean;
        is: (value: any, filter: any, filterLocale?: any) => boolean;
        isNot: (value: any, filter: any, filterLocale?: any) => boolean;
        before: (value: any, filter: any, filterLocale?: any) => boolean;
        after: (value: any, filter: any, filterLocale?: any) => boolean;
        dateIs: (value: any, filter: any, filterLocale?: any) => boolean;
        dateIsNot: (value: any, filter: any, filterLocale?: any) => boolean;
        dateBefore: (value: any, filter: any, filterLocale?: any) => boolean;
        dateAfter: (value: any, filter: any, filterLocale?: any) => boolean;
    };
    filter(value: any[], fields: any[], filterValue: any, filterMatchMode: string, filterLocale?: string): any[];
    register(rule: string, fn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CubFilterService>;
}

/** Filter 功能篩選模式文字轉換 */
declare class FilterMatchMode {
    static readonly STARTS_WITH = "startsWith";
    static readonly CONTAINS = "contains";
    static readonly NOT_CONTAINS = "notContains";
    static readonly ENDS_WITH = "endsWith";
    static readonly EQUALS = "equals";
    static readonly NOT_EQUALS = "notEquals";
    static readonly IN = "in";
    static readonly LESS_THAN = "lt";
    static readonly LESS_THAN_OR_EQUAL_TO = "lte";
    static readonly GREATER_THAN = "gt";
    static readonly GREATER_THAN_OR_EQUAL_TO = "gte";
    static readonly BETWEEN = "between";
    static readonly IS = "is";
    static readonly IS_NOT = "isNot";
    static readonly BEFORE = "before";
    static readonly AFTER = "after";
    static readonly DATE_IS = "dateIs";
    static readonly DATE_IS_NOT = "dateIsNot";
    static readonly DATE_BEFORE = "dateBefore";
    static readonly DATE_AFTER = "dateAfter";
}

declare class ObjectUtils {
    static equals(obj1: any, obj2: any, field?: string): boolean;
    static equalsByValue(obj1: any, obj2: any): boolean;
    static resolveFieldData(data: any, field: any): any;
    static isFunction(obj: any): boolean;
    static reorderArray(value: any[], from: number, to: number): void;
    static insertIntoOrderedArray(item: any, index: number, arr: any[], sourceArr: any[]): void;
    static findIndexInList(item: any, list: any): number;
    static contains(value: any, list: any): boolean;
    static removeAccents(str: any): any;
    static isEmpty(value: any): boolean;
    static isNotEmpty(value: any): boolean;
    static compare(value1: any, value2: any, locale: any, order?: number): number;
    static sort(value1: any, value2: any, order: number | undefined, locale: any, nullSortOrder?: number): number;
    static merge(obj1?: any, obj2?: any): any;
}

declare const CUB_PREFIX: InjectionToken<CubPrefix>;
declare class CubPrefix {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubPrefix, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubPrefix, "[cubPrefix]", never, {}, {}, never, never, true, never>;
}

declare const CUB_SUFFIX: InjectionToken<CubSuffix>;
declare class CubSuffix {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSuffix, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSuffix, "[cubSuffix]", never, {}, {}, never, never, true, never>;
}

declare const CUB_END: InjectionToken<CubEnd>;
declare class CubEnd {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubEnd, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubEnd, "[cubEnd]", never, {}, {}, never, never, true, never>;
}

declare class CubPositionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubPositionModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubPositionModule, never, [typeof CubPrefix, typeof CubSuffix, typeof CubEnd], [typeof CubPrefix, typeof CubSuffix, typeof CubEnd]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubPositionModule>;
}

declare class CubRequired {
    required: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRequired, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubRequired, "[cubRequired]", never, { "required": { "alias": "cubRequired"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_required: unknown;
}

declare class CubRequiredModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRequiredModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubRequiredModule, never, [typeof CubRequired], [typeof CubRequired]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubRequiredModule>;
}

declare const enum CubRippleState {
    FADING_IN = 0,
    VISIBLE = 1,
    FADING_OUT = 2,
    HIDDEN = 3
}

interface CubRippleAnimationConfig {
    enterDuration?: number;
    exitDuration?: number;
}
interface CubRippleClassConfig {
    ripple?: string;
    rippleElement?: string;
}
interface CubRippleTarget {
    rippleConfig: CubRippleConfig;
    rippleDisabled: boolean;
}
interface CubRippleEventListeners {
    onTransitionEnd: EventListener;
    onTransitionCancel: EventListener;
}
interface CubRippleGlobalOptions {
    disabled?: boolean;
    animation?: CubRippleAnimationConfig;
    terminateOnPointerUp?: boolean;
}

type CubRippleConfig = {
    color?: string;
    centered?: boolean;
    radius?: number;
    persistent?: boolean;
    animation?: CubRippleAnimationConfig;
    terminateOnPointerUp?: boolean;
    rippleClass?: CubRippleClassConfig;
};

declare class RippleRef {
    private _renderer;
    element: HTMLElement;
    config: CubRippleConfig;
    _animationForciblyDisabledThroughCss: boolean;
    state: CubRippleState;
    constructor(_renderer: {
        fadeOutRipple(ref: RippleRef): void;
    }, element: HTMLElement, config: CubRippleConfig, _animationForciblyDisabledThroughCss?: boolean);
    fadeOut(): void;
}
declare class RippleRenderer implements EventListenerObject {
    private _target;
    private _ngZone;
    private _containerElement;
    private _triggerElement;
    private _isPointerDown;
    private _activeRipples;
    private _mostRecentTransientRipple;
    private _lastTouchStartEvent;
    private _pointerUpEventsRegistered;
    private _containerRect;
    constructor(_target: CubRippleTarget, _ngZone: NgZone, elementOrElementRef: HTMLElement | ElementRef<HTMLElement>, platform: Platform);
    fadeInRipple(x: number, y: number, config?: CubRippleConfig): RippleRef;
    fadeOutRipple(rippleRef: RippleRef): void;
    fadeOutAll(): void;
    fadeOutAllNonPersistent(): void;
    setupTriggerEvents(elementOrElementRef: HTMLElement | ElementRef<HTMLElement>): void;
    handleEvent(event: Event): void;
    _removeTriggerEvents(): void;
    private _finishRippleTransition;
    private _startFadeOutTransition;
    private _destroyRipple;
    private _onMousedown;
    private _onTouchStart;
    private _onKeyDown;
    private _onPointerUp;
    private _registerEvents;
    private _getActiveRipples;
}

declare const CUB_RIPPLE_GLOBAL_OPTIONS: InjectionToken<CubRippleGlobalOptions>;
declare const defaultRippleAnimationConfig: {
    enterDuration: number;
    exitDuration: number;
};
declare const defaultRippleClassConfig: {
    ripple: string;
    rippleElement: string;
};
declare const ignoreMouseEventsTimeout = 800;
declare const passiveEventOptions: boolean | AddEventListenerOptions;
declare const pointerDownEvents: string[];
declare const pointerUpEvents: string[];

declare function distanceToFurthestCorner(x: number, y: number, rect: DOMRect): number;

declare class CubRipple implements OnInit, OnDestroy, CubRippleTarget {
    private _elementRef;
    private _animationMode?;
    private _trigger;
    private _rippleRenderer;
    private _globalOptions;
    private _isInitialized;
    private _disabled;
    get rippleConfig(): CubRippleConfig;
    get rippleDisabled(): boolean;
    specifyClass: string;
    color: string;
    unbounded: boolean;
    centered: boolean;
    radius: number;
    animation: CubRippleAnimationConfig;
    get disabled(): boolean;
    set disabled(value: boolean);
    get trigger(): HTMLElement;
    set trigger(trigger: HTMLElement);
    get rippleClass(): string;
    constructor(_elementRef: ElementRef<HTMLElement>, ngZone: NgZone, platform: Platform, globalOptions?: CubRippleGlobalOptions, _animationMode?: string | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    fadeOutAll(): void;
    fadeOutAllNonPersistent(): void;
    launch(config: CubRippleConfig): RippleRef;
    launch(x: number, y: number, config?: CubRippleConfig): RippleRef;
    private _setupTriggerEventsIfEnabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRipple, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubRipple, "[cub-ripple], [cubRipple]", ["cubRipple"], { "specifyClass": { "alias": "cubRippleClass"; "required": false; }; "color": { "alias": "cubRippleColor"; "required": false; }; "unbounded": { "alias": "cubRippleUnbounded"; "required": false; }; "centered": { "alias": "cubRippleCentered"; "required": false; }; "radius": { "alias": "cubRippleRadius"; "required": false; }; "animation": { "alias": "cubRippleAnimation"; "required": false; }; "disabled": { "alias": "cubRippleDisabled"; "required": false; }; "trigger": { "alias": "cubRippleTrigger"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubRippleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRippleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubRippleModule, never, [typeof CubRipple], [typeof CubRipple]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubRippleModule>;
}

declare class CubTemplate {
    template: TemplateRef<any>;
    name: string;
    constructor(template: TemplateRef<any>);
    getType(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTemplate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTemplate, "[cubTemplate]", never, { "name": { "alias": "cubTemplate"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTemplateModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTemplateModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubTemplateModule, never, [typeof CubTemplate], [typeof CubTemplate]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubTemplateModule>;
}

declare class CubDarkModeToggler {
    isDark: boolean;
    disabled: boolean;
    constructor();
    toggle(event: Event): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubDarkModeToggler, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubDarkModeToggler, "[cubDarkModeToggler]", never, { "isDark": { "alias": "isDark"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubStyleManagerService {
    constructor();
    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key: string, href: string): void;
    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubStyleManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CubStyleManagerService>;
}

declare class CubThemeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubThemeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubThemeModule, never, [typeof CubDarkModeToggler], [typeof CubDarkModeToggler]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubThemeModule>;
}

interface Translation {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    is?: string;
    isNot?: string;
    before?: string;
    after?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    dayNames?: string[];
    dayNamesShort?: string[];
    dayNamesMin?: string[];
    monthNames?: string[];
    monthNamesShort?: string[];
    dateFormat?: string;
    firstDayOfWeek?: number;
    today?: string;
    weekHeader?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyMessage?: string;
    emptyFilterMessage?: string;
}
declare class TranslationKeys {
    static readonly STARTS_WITH = "startsWith";
    static readonly CONTAINS = "contains";
    static readonly NOT_CONTAINS = "notContains";
    static readonly ENDS_WITH = "endsWith";
    static readonly EQUALS = "equals";
    static readonly NOT_EQUALS = "notEquals";
    static readonly NO_FILTER = "noFilter";
    static readonly LT = "lt";
    static readonly LTE = "lte";
    static readonly GT = "gt";
    static readonly GTE = "gte";
    static readonly IS = "is";
    static readonly IS_NOT = "isNot";
    static readonly BEFORE = "before";
    static readonly AFTER = "after";
    static readonly CLEAR = "clear";
    static readonly APPLY = "apply";
    static readonly MATCH_ALL = "matchAll";
    static readonly MATCH_ANY = "matchAny";
    static readonly ADD_RULE = "addRule";
    static readonly REMOVE_RULE = "removeRule";
    static readonly ACCEPT = "accept";
    static readonly REJECT = "reject";
    static readonly CHOOSE = "choose";
    static readonly UPLOAD = "upload";
    static readonly CANCEL = "cancel";
    static readonly DAY_NAMES = "dayNames";
    static readonly DAY_NAMES_SHORT = "dayNamesShort";
    static readonly DAY_NAMES_MIN = "dayNamesMin";
    static readonly MONTH_NAMES = "monthNames";
    static readonly MONTH_NAMES_SHORT = "monthNamesShort";
    static readonly FIRST_DAY_OF_WEEK = "firstDayOfWeek";
    static readonly TODAY = "today";
    static readonly WEEK_HEADER = "weekHeader";
    static readonly WEAK = "weak";
    static readonly MEDIUM = "medium";
    static readonly STRONG = "strong";
    static readonly PASSWORD_PROMPT = "passwordPrompt";
    static readonly EMPTY_MESSAGE = "emptyMessage";
    static readonly EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
}
declare class TranslationConfig {
    translationSource: Subject<any>;
    translationObserver: rxjs.Observable<any>;
    filterMatchModeOptions: {
        text: string[];
        numeric: string[];
        date: string[];
    };
    private translation;
    getTranslation(key: string): string | number | string[] | undefined;
    setTranslation(value: Translation): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslationConfig>;
}

declare var lastId: number;
declare function UniqueComponentId(): string;

declare class CubCommonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubCommonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubCommonModule, never, never, [typeof CubDividerModule, typeof CubRippleModule, typeof CubTemplateModule, typeof CubThemeModule, typeof CubPositionModule, typeof CubRequiredModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubCommonModule>;
}

export { CUB_END, CUB_PREFIX, CUB_RIPPLE_GLOBAL_OPTIONS, CUB_SUFFIX, CubCommonModule, CubDarkModeToggler, CubDivider, CubDividerModule, CubEnd, CubFilterService, CubPositionModule, CubPrefix, CubRequired, CubRequiredModule, CubRipple, CubRippleModule, CubRippleState, CubStyleManagerService, CubSuffix, CubTemplate, CubTemplateModule, CubThemeModule, DEVICE_BREAKPOINT, DomHandler, ErrorStateMatcher, FilterMatchMode, GRID_BREAKPOINT, ObjectUtils, RippleRef, RippleRenderer, ShowOnDirtyErrorStateMatcher, TranslationConfig, TranslationKeys, UniqueComponentId, defaultRippleAnimationConfig, defaultRippleClassConfig, distanceToFurthestCorner, ignoreMouseEventsTimeout, isIOSMobileDevice, isMobileDevice, lastId, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinTabIndex, passiveEventOptions, pointerDownEvents, pointerUpEvents, setViewHeight, setViewWidth };
export type { AbstractConstructor, Breakpoint, CanColor, CanDisable, CanDisableRipple, CanUpdateErrorState, Constructor, CubDividerAppearance, CubFlexOrientation, CubFormAppearance, CubRippleAnimationConfig, CubRippleClassConfig, CubRippleConfig, CubRippleEventListeners, CubRippleGlobalOptions, CubRippleTarget, CubThemeColor, CubThemeColorContrast, CubThemeColorScheme, CubThemeSize, CubThemeStatus, HasElementRef, HasErrorState, HasTabIndex, Translation };
