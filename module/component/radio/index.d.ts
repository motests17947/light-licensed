import * as cub_lib_view_rootng_component_common from 'cub-lib-view-rootng/component/common';
import { CanDisableRipple, HasTabIndex, CubRipple, CubThemeSize, CubFlexOrientation } from 'cub-lib-view-rootng/component/common';
import * as i0 from '@angular/core';
import { ElementRef, OnInit, AfterViewInit, DoCheck, OnDestroy, ChangeDetectorRef, AfterContentInit, QueryList, EventEmitter, InjectionToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BooleanInput } from 'cub-lib-view-rootng/cdk/coercion';
import { FocusMonitor, FocusOrigin } from 'cub-lib-view-rootng/cdk/a11y';
import { UniqueSelectionDispatcher } from 'cub-lib-view-rootng/cdk/collections';
import * as i1 from 'cub-lib-view-rootng/component/form-field';
import * as i2 from 'cub-lib-view-rootng/component/label';
import * as i3 from 'cub-lib-view-rootng/component/input';

declare class CubRadioChange {
    source: _CubRadioBase;
    value: any;
    constructor(source: _CubRadioBase, value: any);
}
declare const CUB_RADIO: InjectionToken<_CubRadioBase>;
declare const CUB_RADIO_GROUP: InjectionToken<_CubRadioGroupBase<_CubRadioBase>>;
declare const CUB_RADIO_CONTROL_VALUE_ACCESSOR: any;
declare const CUB_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any;
declare abstract class _CubRadioGroupBase<T extends _CubRadioBase> implements AfterContentInit, ControlValueAccessor {
    private _changeDetector;
    abstract _radios: QueryList<T>;
    private _isInitialized;
    private _name;
    private _labelPosition;
    private _value;
    private _selected;
    private _disabled;
    private _required;
    /** 元件名稱，用於表單提交，預設為 undefined。 */
    get name(): string;
    set name(value: string);
    /** 元件標籤位置，預設值為 'after'。 */
    get labelPosition(): 'before' | 'after';
    set labelPosition(v: "before" | "after");
    /** 元件輸入的的當前值，預設為 undefined。 */
    get value(): any;
    set value(newValue: any);
    /**
     * 元件的選中項目。
     * 此屬性用於設定或取得目前被選中的項目列表。
     * 預設值為 []。
     */
    get selected(): T | null;
    set selected(selected: T | null);
    /** 元件是否禁用，預設為 false。 */
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    /** 元件是否為必填，預設為 false。 */
    get required(): boolean;
    set required(value: BooleanInput);
    /** 當元件值發生變化時觸發的事件。傳遞一個 `CubCheckboxChange` 物件，包含元件的來源和選中狀態。 */
    readonly change: EventEmitter<CubRadioChange>;
    constructor(_changeDetector: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onTouched: () => any;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    markRadiosTouched(): void;
    markRadiosForCheck(): void;
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent(): void;
    _controlValueAccessorChangeFn: (value: any) => void;
    private _checkSelectedRadio;
    private _updateRadioNames;
    private _updateSelectedRadioFromValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubRadioGroupBase<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubRadioGroupBase<any>, never, never, { "name": { "alias": "name"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "value": { "alias": "value"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, { "change": "change"; }, never, never, true, never>;
}
declare abstract class CubRadioBase {
    _elementRef: ElementRef;
    abstract disabled: boolean;
    constructor(_elementRef: ElementRef);
}
declare const _CubRadioMixinBase: cub_lib_view_rootng_component_common.Constructor<CanDisableRipple> & cub_lib_view_rootng_component_common.AbstractConstructor<CanDisableRipple> & cub_lib_view_rootng_component_common.Constructor<HasTabIndex> & cub_lib_view_rootng_component_common.AbstractConstructor<HasTabIndex> & typeof CubRadioBase;
declare abstract class _CubRadioBase extends _CubRadioMixinBase implements OnInit, AfterViewInit, DoCheck, OnDestroy, CanDisableRipple, HasTabIndex, ControlValueAccessor {
    protected _changeDetector: ChangeDetectorRef;
    private _focusMonitor;
    private _radioDispatcher;
    radioGroup: _CubRadioGroupBase<_CubRadioBase>;
    private _uniqueId;
    private _checked;
    private _value;
    private _labelPosition;
    private _disabled;
    private _required;
    private _previousTabIndex;
    get inputId(): string;
    /** 元件唯一識別符，預設為 undefined。 */
    id: string;
    /** 元件名稱，用於表單提交，預設為 ''。 */
    name: string;
    /** 元件標題（螢幕閱讀器讀取用），預設為 ''。 */
    ariaLabel: string;
    /** 優先於標題讀取的替代文字（螢幕閱讀器讀取用），預設為 null。 */
    ariaLabelledby: string;
    /** 在標題與欄位型別之後提供額外的描述資訊（螢幕閱讀器讀取用），預設為 ''。 */
    ariaDescribedby: string;
    /** 元件是否被選中，預設為 false。 */
    get checked(): boolean;
    set checked(value: BooleanInput);
    /** 元件輸入的當前值，預設為 undefined。 */
    get value(): any;
    set value(value: any);
    /** 元件標籤位置，預設值為 'after'。 */
    get labelPosition(): 'before' | 'after';
    set labelPosition(value: "before" | "after");
    /** 元件是否禁用，預設為 false。 */
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    /** 元件是否為必填，預設為 false。 */
    get required(): boolean;
    set required(value: BooleanInput);
    /** 當元件值發生變化時觸發的事件。傳遞一個 `CubRadioChange` 物件，包含元件的來源和選中狀態。 */
    readonly change: EventEmitter<CubRadioChange>;
    _inputElement: ElementRef<HTMLInputElement>;
    _labelElement: ElementRef<HTMLInputElement>;
    ripple: CubRipple;
    constructor(radioGroup: _CubRadioGroupBase<_CubRadioBase>, elementRef: ElementRef, _changeDetector: ChangeDetectorRef, _focusMonitor: FocusMonitor, _radioDispatcher: UniqueSelectionDispatcher, tabIndex?: string);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onChanged: Function;
    onTouched: Function;
    _isRippleDisabled(): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(isDisabled: boolean): void;
    focus(options?: FocusOptions, origin?: FocusOrigin): void;
    markForCheck(): void;
    onInputClick(event: Event): void;
    onInputInteraction(event: Event): void;
    protected _setDisabled(value: boolean): void;
    private _removeUniqueSelectionListener;
    /** Dispatch change event with current value. */
    private _emitChangeEvent;
    private _updateTabIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubRadioBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubRadioBase, never, never, { "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "ariaDescribedby": { "alias": "aria-describedby"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "value": { "alias": "value"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, { "change": "change"; }, never, never, true, never>;
}
declare class CubRadioGroup extends _CubRadioGroupBase<CubRadio> {
    /** 群組排列方向，預設為 'horizontal'。 */
    orientation: CubFlexOrientation;
    _radios: QueryList<CubRadio>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRadioGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubRadioGroup, "cub-radio-group", ["cubRadioGroup"], { "orientation": { "alias": "orientation"; "required": false; }; }, {}, ["_radios"], never, true, never>;
}
declare class CubRadio extends _CubRadioBase {
    _noopAnimations: boolean;
    /** 尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    constructor(radioGroup: CubRadioGroup, elementRef: ElementRef, changeDetector: ChangeDetectorRef, focusMonitor: FocusMonitor, radioDispatcher: UniqueSelectionDispatcher, _animationMode?: string, tabIndex?: string);
    /**
     * 處理標籤上的鍵盤事件。
     * 當使用者按下空白鍵時，會切換選取狀態，與顯示 Ripple 漣漪。
     */
    _onLabelKeydown(event: Event, rippleRef: CubRipple): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRadio, [{ optional: true; }, null, null, null, null, { optional: true; }, { attribute: "tabindex"; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubRadio, "cub-radio", ["cubRadio"], { "disableRipple": { "alias": "disableRipple"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CubRadioModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRadioModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubRadioModule, never, [typeof i1.CubFormFieldModule, typeof i2.CubLabelModule, typeof i3.CubInputModule, typeof CubRadio, typeof CubRadioGroup], [typeof i1.CubFormFieldModule, typeof i2.CubLabelModule, typeof i3.CubInputModule, typeof CubRadio, typeof CubRadioGroup]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubRadioModule>;
}

export { CUB_RADIO, CUB_RADIO_CONTROL_VALUE_ACCESSOR, CUB_RADIO_GROUP, CUB_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, CubRadio, CubRadioChange, CubRadioGroup, CubRadioModule, _CubRadioBase, _CubRadioGroupBase };
