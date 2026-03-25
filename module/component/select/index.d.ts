import * as i0 from '@angular/core';
import { InjectionToken, ElementRef, AfterContentInit, OnChanges, OnDestroy, OnInit, DoCheck, ChangeDetectorRef, NgZone, QueryList, EventEmitter, SimpleChanges, Renderer2 } from '@angular/core';
import { NgForm, FormGroupDirective, NgControl, ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';
import { ActiveDescendantKeyManager, LiveAnnouncer } from 'cub-lib-view-rootng/cdk/a11y';
import { Directionality } from 'cub-lib-view-rootng/cdk/bidi';
import { Overlay, ScrollStrategy, ConnectedPosition, CubCdkConnectedOverlay } from 'cub-lib-view-rootng/cdk/overlay';
import * as i1 from 'cub-lib-view-rootng/cdk/scrolling';
import { ViewportRuler } from 'cub-lib-view-rootng/cdk/scrolling';
import * as cub_lib_view_rootng_component_common from 'cub-lib-view-rootng/component/common';
import { ErrorStateMatcher, CanDisable, HasTabIndex, CanUpdateErrorState, CanDisableRipple, CubThemeSize, CubFormAppearance } from 'cub-lib-view-rootng/component/common';
import * as i3 from 'cub-lib-view-rootng/component/option';
import { _CubOptionBase, CubOptionGroup, CubOption, CubOptionSelectionChange, CubOptionItem } from 'cub-lib-view-rootng/component/option';
import * as i4 from 'cub-lib-view-rootng/component/form-field';
import { CubFormFieldControl, CubFormField } from 'cub-lib-view-rootng/component/form-field';
import { CubCheckbox } from 'cub-lib-view-rootng/component/checkbox';
import { Subject, Observable } from 'rxjs';
import { BooleanInput, NumberInput } from 'cub-lib-view-rootng/cdk/coercion';
import { SelectionModel } from 'cub-lib-view-rootng/cdk/collections';
import { AnimationTriggerMetadata } from '@angular/animations';
import * as i5 from 'cub-lib-view-rootng/component/label';
import * as i6 from 'cub-lib-view-rootng/component/input-group';

/**
 * Injection token that can be used to reference instances of `CubSelectTrigger`. It serves as
 * alternative token to the actual `CubSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
declare const CUB_SELECT_TRIGGER: InjectionToken<CubSelectTrigger>;
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
declare class CubSelectTrigger {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSelectTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSelectTrigger, "cub-select-trigger", never, {}, {}, never, never, true, never>;
}

/** @docs-private */
declare function CUB_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => ScrollStrategy;
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
declare function getCubSelectDynamicMultipleError(): Error;
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
declare function getCubSelectNonArrayValueError(): Error;
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */
declare function getCubSelectNonFunctionValueError(): Error;

/** Object that can be used to configure the default options for the select module. */
interface CubSelectConfig {
    /** Whether option centering should be disabled. */
    disableOptionCentering?: boolean;
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
    typeaheadDebounceInterval?: number;
    /** Class or list of classes to be applied to the menu's overlay panel. */
    overlayPanelClass?: string | string[];
}

/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/** The max height of the select's overlay panel. */
declare const SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis. */
declare const SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */
declare const SELECT_PANEL_INDENT_PADDING_X: number;
/** The height of the select items in `em` units. */
declare const SELECT_ITEM_HEIGHT_EM = 3;
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */
declare const SELECT_MULTIPLE_PANEL_PADDING_X: number;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
declare const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */
declare const CUB_SELECT_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
/** Injection token that can be used to provide the default options the select module. */
declare const CUB_SELECT_CONFIG: InjectionToken<CubSelectConfig>;
/** @docs-private */
declare const CUB_SELECT_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof CUB_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
/** @docs-private */
declare const _CubSelectMixinBase: cub_lib_view_rootng_component_common.Constructor<cub_lib_view_rootng_component_common.CanDisableRipple> & cub_lib_view_rootng_component_common.AbstractConstructor<cub_lib_view_rootng_component_common.CanDisableRipple> & cub_lib_view_rootng_component_common.Constructor<cub_lib_view_rootng_component_common.HasTabIndex> & cub_lib_view_rootng_component_common.AbstractConstructor<cub_lib_view_rootng_component_common.HasTabIndex> & cub_lib_view_rootng_component_common.Constructor<cub_lib_view_rootng_component_common.CanDisable> & cub_lib_view_rootng_component_common.AbstractConstructor<cub_lib_view_rootng_component_common.CanDisable> & cub_lib_view_rootng_component_common.Constructor<cub_lib_view_rootng_component_common.CanUpdateErrorState> & cub_lib_view_rootng_component_common.AbstractConstructor<cub_lib_view_rootng_component_common.CanUpdateErrorState> & {
    new (_elementRef: ElementRef, _defaultErrorStateMatcher: ErrorStateMatcher, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, ngControl: NgControl): {
        /**
         * Emits whenever the component state changes and should cause the parent
         * form-field to update. Implemented as part of `CubFormFieldControl`.
         * @docs-private
         */
        readonly stateChanges: Subject<void>;
        _elementRef: ElementRef;
        _defaultErrorStateMatcher: ErrorStateMatcher;
        _parentForm: NgForm;
        _parentFormGroup: FormGroupDirective;
        /**
         * Form control bound to the component.
         * Implemented as part of `CubFormFieldControl`.
         * @docs-private
         */
        ngControl: NgControl;
    };
};
/**
 * The following are all the animations for the cub-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS CUB cub-select animation.
 * @docs-private
 */
declare const cubSelectAnimations: {
    readonly transformPanelWrap: AnimationTriggerMetadata;
    readonly transformPanel: AnimationTriggerMetadata;
};

/** Base class with all of the `CubSelect` functionality. */
declare abstract class _CubSelectBase<C> extends _CubSelectMixinBase implements AfterContentInit, OnChanges, OnDestroy, OnInit, DoCheck, ControlValueAccessor, CanDisable, HasTabIndex, CubFormFieldControl<any>, CanUpdateErrorState, CanDisableRipple {
    protected _viewportRuler: ViewportRuler;
    protected _changeDetectorRef: ChangeDetectorRef;
    protected _ngZone: NgZone;
    private _dir;
    protected _parentFormField: CubFormField;
    private _liveAnnouncer;
    private _defaultOptions?;
    /** 元件是使否將以選中的選項置中於選擇框中，預設為否。 */
    disableOptionCentering: boolean;
    /** All of the defined select options. */
    abstract options: QueryList<_CubOptionBase>;
    /** All of the defined groups of options. */
    abstract optionGroups: QueryList<CubOptionGroup>;
    /** User-supplied override of the trigger element. */
    abstract customTrigger: {};
    /**
     * This position config ensures that the top "start" corner of the overlay
     * is aligned with with the top "start" of the origin by default (overlapping
     * the trigger completely). If the panel cannot fit below the trigger, it
     * will fall back to a position above the trigger.
     */
    abstract _positions: ConnectedPosition[];
    /** A name for this control that can be used by `cub-form-field`. */
    controlType: string;
    /** ID for the DOM node containing the select's value. */
    _valueId: string;
    /** Deals with the selection logic. */
    _selectionModel: SelectionModel<CubOption>;
    /** Manages keyboard events for options in the panel. */
    _keyManager: ActiveDescendantKeyManager<CubOption>;
    /** Strategy that will be used to handle scrolling while the select panel is open. */
    _scrollStrategy: ScrollStrategy;
    _overlayPanelClass: string | string[];
    /** Combined stream of all of the child options' change events. */
    readonly optionSelectionChanges: Observable<CubOptionSelectionChange>;
    /** Emits when the panel element is finished transforming in. */
    readonly _panelDoneAnimatingStream: Subject<string>;
    /** Emits whenever the component is destroyed. */
    protected readonly _destroy: Subject<void>;
    /** Whether or not the overlay panel is open. */
    private _panelOpen;
    /** Unique id for this input. */
    private _uid;
    /** Current `aria-labelledby` value for the select trigger. */
    private _triggerAriaLabelledBy;
    /**
     * Keeps track of the previous form control assigned to the select.
     * Used to detect if it has changed.
     */
    private _previousControl;
    private _focused;
    private _placeholder;
    private _required;
    private _multiple;
    private _value;
    private _typeaheadDebounceInterval;
    private _id;
    /** Factory function used to create a scroll strategy for this select. */
    private _scrollStrategyFactory;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat(): boolean;
    /** Whether the select has a value. */
    get empty(): boolean;
    /** Whether or not the overlay panel is open. */
    get panelOpen(): boolean;
    /** The currently selected option. */
    get selected(): CubOption | CubOption[];
    /** The value displayed in the trigger. */
    get triggerValue(): string;
    /** Whether the select is focused. */
    get focused(): boolean;
    /** 元件控制何時顯示錯誤訊息的物件，預設為 undefined。 */
    errorStateMatcher: ErrorStateMatcher;
    /** 元件的標題（螢幕閱讀器讀取用），預設為 ''。 */
    ariaLabel: string;
    /** 元件在標題與欄位型別之後讀取的描述內容（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaDescribedBy: string;
    /** 元件優先於標題讀取的替代文字（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaLabelledby: string;
    /** 元件 Panel 的樣式類別，預設為 undefined。 */
    panelClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    /** 元件啟用多選時，用於進行排序下拉選單中值的函式，與 Array.prototype.sort 的使用邏輯相同，預設為 undefined。 */
    sortComparator: (a: CubOption, b: CubOption, options: CubOption[]) => number;
    /** 元件的佔位符，預設為 undefined。 */
    get placeholder(): string;
    set placeholder(value: string);
    /** 元件是否為必填，預設為否。 */
    get required(): boolean;
    set required(value: BooleanInput);
    /** 元件是否啟用選擇功能，預設為不啟用。 */
    get multiple(): boolean;
    set multiple(value: BooleanInput);
    /** 元件比較選項值和選定值的函式，第一個參數是選項中的值，第二個參數是選定的值，並且需要回傳一個布林值，預設為 (o1: any, o2: any) => o1 === o2。 */
    get compareWith(): (o1: any, o2: any) => boolean;
    set compareWith(fn: (o1: any, o2: any) => boolean);
    /** 元件的數值，預設為 undefined。 */
    get value(): any;
    set value(newValue: any);
    /** 元件在將焦點移至某個項目之前，最後一次按鍵後等待的時間（以毫秒為單位），預設為 undefined。 */
    get typeaheadDebounceInterval(): number;
    set typeaheadDebounceInterval(value: NumberInput);
    /** 元件 id，預設為 undefined。 */
    get id(): string;
    set id(value: string);
    /** 當開關下拉選單 Panel 時發出通知。 */
    readonly openedChange: EventEmitter<boolean>;
    /** 當更改了選定值時發出通知。 */
    readonly selectionChange: EventEmitter<C>;
    /** 當更改了元件數值時發出通知。 */
    readonly valueChange: EventEmitter<any>;
    /** 當開啟下拉選單 Panel 時發出通知。 */
    readonly _openedStream: Observable<void>;
    /** 當關閉下拉選單 Panel 時發出通知。 */
    readonly _closedStream: Observable<void>;
    /** Trigger that opens the select. */
    trigger: ElementRef;
    /** Panel containing the select options. */
    panel: ElementRef;
    /** Overlay pane containing the options. */
    protected _overlayDir: CubCdkConnectedOverlay;
    constructor(_viewportRuler: ViewportRuler, _changeDetectorRef: ChangeDetectorRef, _ngZone: NgZone, _defaultErrorStateMatcher: ErrorStateMatcher, elementRef: ElementRef, _dir: Directionality, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _parentFormField: CubFormField, ngControl: NgControl, tabIndex: string, scrollStrategyFactory: any, _liveAnnouncer: LiveAnnouncer, _defaultOptions?: CubSelectConfig | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /** Toggles the overlay panel open or closed. */
    toggle(): void;
    /** Opens the overlay panel. */
    open(): void;
    /** Closes the overlay panel and focuses the host element. */
    close(): void;
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value: any): void;
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn: () => {}): void;
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids: string[]): void;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    onContainerClick(): void;
    /** Focuses the select element. */
    focus(options?: FocusOptions): void;
    /** `View -> model callback called when value changes` */
    _onChange: (value: any) => void;
    /** `View -> model callback called when select has been touched` */
    _onTouched: () => void;
    _onFocus(): void;
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    _onBlur(): void;
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    _onAttached(): void;
    /** Whether the element is in RTL mode. */
    _isRtl(): boolean;
    /** Handles all keydown events on the select. */
    _handleKeydown(event: KeyboardEvent): void;
    /** Gets the aria-labelledby for the select panel. */
    _getPanelAriaLabelledby(): string | null;
    /** Determines the `aria-activedescendant` to be set on the host. */
    _getAriaActiveDescendant(): string | null;
    /** Scrolls a particular option into the view. */
    protected abstract _scrollOptionIntoView(index: number): void;
    /** Called when the panel has been opened and the overlay has settled on its final position. */
    protected abstract _positioningSettled(): void;
    /** Creates a change event object that should be emitted by the select. */
    protected abstract _getChangeEvent(value: any): C;
    /** Whether the panel is allowed to open. */
    protected _canOpen(): boolean;
    /** Called when the overlay panel is done animating. */
    protected _panelDoneAnimating(isOpen: boolean): void;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */
    private _compareWith;
    /** Handles keyboard events while the select is closed. */
    private _handleClosedKeydown;
    /** Handles keyboard events when the selected is open. */
    private _handleOpenKeydown;
    private _initializeSelection;
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    private _setSelectionByValue;
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    private _selectOptionByValue;
    /** Assigns a specific value to the select. Returns whether the value has changed. */
    private _assignValue;
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    private _initKeyManager;
    /** Drops current option subscriptions and IDs and resets from scratch. */
    private _resetOptions;
    /** Invoked when an option is clicked. */
    private _onSelect;
    /** Sorts the selected values in the selected based on their order in the panel. */
    private _sortValues;
    /** Emits change event to set the model value. */
    private _propagateChanges;
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */
    private _highlightCorrectOption;
    /** Gets the aria-labelledby of the select component trigger. */
    private _getTriggerAriaLabelledby;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubSelectBase<any>, [null, null, null, null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; self: true; }, { attribute: "tabindex"; }, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubSelectBase<any>, never, never, { "errorStateMatcher": { "alias": "errorStateMatcher"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaDescribedBy": { "alias": "aria-describedby"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "panelClass": { "alias": "panelClass"; "required": false; }; "sortComparator": { "alias": "sortComparator"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "value": { "alias": "value"; "required": false; }; "typeaheadDebounceInterval": { "alias": "typeaheadDebounceInterval"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, { "openedChange": "openedChange"; "selectionChange": "selectionChange"; "valueChange": "valueChange"; "_openedStream": "opened"; "_closedStream": "closed"; }, never, never, true, never>;
}

/** Change event object that is emitted when the select value has changed. */
declare class CubSelectChange {
    /** Reference to the select that emitted the change event. */
    source: _CubSelectAdvance;
    /** Current value of the select that emitted the event. */
    value: any;
    constructor(
    /** Reference to the select that emitted the change event. */
    source: _CubSelectAdvance, 
    /** Current value of the select that emitted the event. */
    value: any);
}
declare class _CubSelectAdvance extends _CubSelectBase<CubSelectChange> implements OnInit {
    /** The last measured value for the trigger's client bounding rect. */
    _triggerRect: ClientRect;
    /** The cached font-size of the trigger element. */
    _triggerFontSize: number;
    /** The value of the select panel's transform-origin property. */
    _transformOrigin: string;
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */
    _offsetY: number;
    _positions: ConnectedPosition[];
    /** The scroll position of the overlay panel, calculated to center the selected option. */
    private _scrollTop;
    options: QueryList<CubOption>;
    optionGroups: QueryList<CubOptionGroup>;
    customTrigger: CubSelectTrigger;
    ngOnInit(): void;
    open(): void;
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    _calculateOverlayScroll(selectedIndex: number, scrollBuffer: number, maxScroll: number): number;
    /** Scrolls the active option into view. */
    protected _scrollOptionIntoView(index: number): void;
    protected _positioningSettled(): void;
    protected _panelDoneAnimating(isOpen: boolean): void;
    protected _getChangeEvent(value: any): CubSelectChange;
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */
    private _calculateOverlayOffsetX;
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    private _calculateOverlayOffsetY;
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    private _checkOverlayWithinViewport;
    /** Adjusts the overlay panel up to fit in the viewport. */
    private _adjustPanelUp;
    /** Adjusts the overlay panel down to fit in the viewport. */
    private _adjustPanelDown;
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    private _calculateOverlayPosition;
    /** Sets the transform origin point based on the selected option. */
    private _getOriginBasedOnOption;
    /** Calculates the height of the select's options. */
    private _getItemHeight;
    /** Calculates the amount of items in the select. This includes options and group labels. */
    private _getItemCount;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubSelectAdvance, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubSelectAdvance, never, never, {}, {}, ["customTrigger", "options", "optionGroups"], never, true, never>;
}

declare class CubSelect extends _CubSelectAdvance implements OnInit, AfterContentInit, OnDestroy {
    private fb;
    private renderer;
    protected viewportRuler: ViewportRuler;
    protected changeDetectorRef: ChangeDetectorRef;
    protected ngZone: NgZone;
    private dir;
    protected parentFormField: CubFormField;
    private liveAnnouncer;
    private defaultOptions?;
    selectOptions: CubOptionItem[];
    noFilterResults: boolean;
    checkboxFocus: boolean;
    isSelectAll: boolean;
    filteredActiveOptionIndex: number;
    filteredItems: any;
    positions: ConnectedPosition[];
    searchForm: FormGroup;
    selectPanelObserver: any;
    isSelectAllKeydownActive: boolean;
    private unsubscribe$;
    get triggerValue(): string;
    get hasGroup(): boolean;
    get isOptionContainerScroll(): boolean;
    /** 元件數值，預設為 undefined。 */
    get value(): any;
    set value(newValue: any);
    /** 元件尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    /** 外觀樣式，預設為 'outline'。 */
    appearance: CubFormAppearance;
    /** 元件是否啟用篩選功能，預設為不啟用。 */
    showFilter: boolean;
    /** 元件關閉下拉選單後，是否清空篩選輸入框，在啟用篩選功能時使用，預設為啟用。 */
    resetFilterOnHide: boolean;
    /** 元件全選文字，預設為 '全選'。 */
    selectAllLabel: string;
    /** 元件下拉選單是否顯示請選擇文字，預設為 true。 */
    showOptionPlaceholder: boolean;
    /** 元件下拉選單請選擇文字，預設為 '請選擇'。 */
    optionPlaceholder: string;
    /** 元件篩選輸入框的佔位符文字，在啟用篩選功能時使用，預設為 '請輸入關鍵字查詢'。 */
    filterPlaceholder: string;
    /** 元件查無資料的提示文字，在啟用篩選功能時使用，預設為 '無資料'。 */
    emptyFilterMessage: string;
    /** 元件顯示選中選項的數量，在啟用多選功能時使用，預設為 3。 */
    maxSelectedLabels: number;
    /** 元件顯示選中選項文字，在啟用多選功能時使用，預設為 '已選擇 {0} 個項目'。 */
    selectedItemsLabel: string;
    /** 元件顯示全選文字，在啟用多選功能時使用，預設為 '全部'。 */
    selectedAllItemsLabel: string;
    /** 元件完成清單篩選時發出通知。 */
    filter: EventEmitter<any>;
    checkbox: CubCheckbox;
    inputElementRef: ElementRef;
    optionContainerElementRef: ElementRef;
    optionPlaceholderElementRef: ElementRef;
    optionGroupPlaceholderElementRef: ElementRef;
    optionPlaceholderElement: CubOption;
    optionGroupPlaceholderElement: CubOptionGroup;
    optionElementRefList: QueryList<ElementRef>;
    optionGroupElementRefList: QueryList<ElementRef>;
    optionElementList: QueryList<CubOption>;
    optionGroupElementList: QueryList<CubOptionGroup>;
    constructor(fb: FormBuilder, renderer: Renderer2, viewportRuler: ViewportRuler, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, defaultErrorStateMatcher: ErrorStateMatcher, elementRef: ElementRef, dir: Directionality, parentForm: NgForm, parentFormGroup: FormGroupDirective, parentFormField: CubFormField, ngControl: NgControl, tabIndex: string, scrollStrategyFactory: any, liveAnnouncer: LiveAnnouncer, defaultOptions?: CubSelectConfig | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    _handleKeydown(event: KeyboardEvent): void;
    getOptions(): void;
    calculateSelectPanelPosition(): void;
    onCheckboxFocusIn(): void;
    onCheckboxFocusOut(): void;
    clear(): void;
    updateSelectStatus(): void;
    selectPart(): boolean;
    selectAll(checked: boolean): void;
    getNonDisabledOptions(): any;
    onFilter(searchForm: any): void;
    displayOption(): void;
    resetActiveOption(): void;
    resetOptions(): void;
    handleSelectAllClick(): void;
    handleOpenKeydown(event: KeyboardEvent): void;
    handleClosedKeydown(event: KeyboardEvent): void;
    handleFilterKeydown(event: KeyboardEvent): void;
    handlePlaceholderkeydown(event: KeyboardEvent): void;
    protected _scrollOptionIntoView(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSelect, [null, null, null, null, null, null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; self: true; }, { attribute: "tabindex"; }, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubSelect, "cub-select", ["cubSelect"], { "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "showFilter": { "alias": "filter"; "required": false; }; "resetFilterOnHide": { "alias": "resetFilterOnHide"; "required": false; }; "selectAllLabel": { "alias": "selectAllLabel"; "required": false; }; "showOptionPlaceholder": { "alias": "showOptionPlaceholder"; "required": false; }; "optionPlaceholder": { "alias": "optionPlaceholder"; "required": false; }; "filterPlaceholder": { "alias": "filterPlaceholder"; "required": false; }; "emptyFilterMessage": { "alias": "emptyFilterMessage"; "required": false; }; "maxSelectedLabels": { "alias": "maxSelectedLabels"; "required": false; }; "selectedItemsLabel": { "alias": "selectedItemsLabel"; "required": false; }; "selectedAllItemsLabel": { "alias": "selectedAllItemsLabel"; "required": false; }; }, { "filter": "filter"; }, ["optionElementRefList", "optionGroupElementRefList", "optionElementList", "optionGroupElementList"], ["cub-select-trigger", "*"], true, never>;
}

declare class CubSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubSelectModule, never, [typeof i1.CubCdkScrollableModule, typeof cub_lib_view_rootng_component_common.CubCommonModule, typeof i3.CubOptionModule, typeof i4.CubFormFieldModule, typeof i5.CubLabelModule, typeof i6.CubInputGroupModule, typeof CubSelect, typeof CubSelectTrigger], [typeof i1.CubCdkScrollableModule, typeof cub_lib_view_rootng_component_common.CubCommonModule, typeof i3.CubOptionModule, typeof i4.CubFormFieldModule, typeof i5.CubLabelModule, typeof i6.CubInputGroupModule, typeof CubSelect, typeof CubSelectTrigger]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubSelectModule>;
}

export { CUB_SELECT_CONFIG, CUB_SELECT_SCROLL_STRATEGY, CUB_SELECT_SCROLL_STRATEGY_PROVIDER, CUB_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, CUB_SELECT_TRIGGER, CubSelect, CubSelectChange, CubSelectModule, CubSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, _CubSelectAdvance, _CubSelectBase, _CubSelectMixinBase, cubSelectAnimations, getCubSelectDynamicMultipleError, getCubSelectNonArrayValueError, getCubSelectNonFunctionValueError };
export type { CubSelectConfig };
