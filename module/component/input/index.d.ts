import * as cub_lib_view_rootng_component_common from 'cub-lib-view-rootng/component/common';
import { CanUpdateErrorState, ErrorStateMatcher, CubThemeSize, CubFormAppearance } from 'cub-lib-view-rootng/component/common';
import * as i0 from '@angular/core';
import { OnInit, EventEmitter, InjectionToken, OnChanges, OnDestroy, AfterViewInit, DoCheck, ElementRef, ComponentRef, ViewContainerRef, Renderer2, NgZone, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { NgForm, FormGroupDirective, NgControl, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { Platform } from 'cub-lib-view-rootng/cdk/platform';
import { BooleanInput } from 'cub-lib-view-rootng/cdk/coercion';
import * as i1 from 'cub-lib-view-rootng/cdk/text-field';
import { AutofillMonitor } from 'cub-lib-view-rootng/cdk/text-field';
import * as i3 from 'cub-lib-view-rootng/component/form-field';
import { CubFormFieldControl, CubFormField } from 'cub-lib-view-rootng/component/form-field';
import * as i4 from 'cub-lib-view-rootng/component/label';
import * as i5 from 'cub-lib-view-rootng/component/input-group';

declare class CubInputClearButton implements OnInit {
    value: any;
    size: any;
    disabled: boolean;
    showClear: boolean;
    valueChange: EventEmitter<any>;
    ngOnInit(): void;
    clearValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubInputClearButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubInputClearButton, "cub-input-clear-button", never, {}, {}, never, never, true, never>;
}

declare const CUB_INPUT_VALUE_ACCESSOR: InjectionToken<{
    value: any;
}>;
declare const _CubInputBase: cub_lib_view_rootng_component_common.Constructor<CanUpdateErrorState> & cub_lib_view_rootng_component_common.AbstractConstructor<CanUpdateErrorState> & {
    new (_defaultErrorStateMatcher: ErrorStateMatcher, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, ngControl: NgControl): {
        /**
         * Emits whenever the component state changes and should cause the parent
         * form field to update. Implemented as part of `CubFormFieldControl`.
         * @docs-private
         */
        readonly stateChanges: Subject<void>;
        _defaultErrorStateMatcher: ErrorStateMatcher;
        _parentForm: NgForm;
        _parentFormGroup: FormGroupDirective;
        /**
         * Form control bound to the component.
         * Implemented as part of `MatFormFieldControl`.
         * @docs-private
         */
        ngControl: NgControl;
    };
};
declare class CubInput extends _CubInputBase implements CubFormFieldControl<any>, OnChanges, OnDestroy, AfterViewInit, DoCheck, CanUpdateErrorState, OnInit {
    protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
    protected _platform: Platform;
    private _autofillMonitor;
    private viewContainerRef;
    private renderer;
    private _formField?;
    cubInputClearButton: ComponentRef<CubInputClearButton> | null;
    inputContainer: any;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    focused: boolean;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    controlType: string;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    autofilled: boolean;
    /** Whether the component is being rendered on the server. */
    readonly _isServer: boolean;
    /** Whether the component is a native html select. */
    readonly _isNativeSelect: boolean;
    /** Whether the component is a textarea. */
    readonly _isTextarea: boolean;
    /** Whether the input is inside of a form field. */
    readonly _isInFormField: boolean;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    readonly stateChanges: Subject<void>;
    protected _required: boolean | undefined;
    protected _type: string;
    protected _disabled: boolean;
    protected _id: string;
    protected _uid: string;
    protected _previousNativeValue: any;
    protected _neverEmptyInputTypes: string[];
    private _previousPlaceholder;
    private destroy$;
    private _rows;
    private _showClear;
    private _inputValueAccessor;
    private _readonly;
    /**
     * Implemented as part of CubFormFieldControl.
     * @docs-private
     */
    get empty(): boolean;
    /** 元件尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    /** 外觀樣式，預設為 'outline'。 */
    appearance: CubFormAppearance;
    /** 設定 textarea 的 rows 屬性，預設為 3。 */
    get rows(): any;
    set rows(value: any);
    /** 輸入框的 title 屬性，預設為 ''。 */
    title: string;
    /** 設定輸入框的 autocomplete 屬性，用於禁用瀏覽器的自動填充功能，預設為 'off'。 */
    autocomplete: string;
    /** 元件是否禁用，預設為 false。 */
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    /** 元件唯一識別符，預設為 undefined。 */
    get id(): string;
    set id(value: string);
    /** 佔位符，元件沒有值的提示文字，預設為 undefined。 */
    placeholder: string;
    /** 是否啟用清除功能，預設 false。 */
    get showClear(): boolean;
    set showClear(value: boolean);
    /** 元件的行內樣式，預設為 undefined。 */
    style: any;
    /** 套用到元件的 CSS 類別名稱，預設為 undefined。 */
    class: string;
    /** 元件名稱，用於表單提交，預設為 undefined。 */
    name: string;
    /** 元件是否為必填，預設為 false。 */
    get required(): boolean;
    set required(value: BooleanInput);
    /** 元件輸入的類型，預設為 'text'。 */
    get type(): string;
    set type(value: string);
    /** 用於控制何時顯示錯誤訊息的物件，預設為 undefined。 */
    errorStateMatcher: ErrorStateMatcher;
    /** 在標題與欄位型別之後提供額外的描述資訊（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaDescribedBy: string;
    /** 元件輸入的當前值，預設為 undefined。 */
    get value(): string;
    set value(value: any);
    /** 元件是否為唯讀狀態，預設為 false。 */
    get readonly(): boolean;
    set readonly(value: BooleanInput);
    /**
     當清除資料時發出通知。
     */
    clear: EventEmitter<void>;
    constructor(_elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, _platform: Platform, ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _defaultErrorStateMatcher: ErrorStateMatcher, inputValueAccessor: any, _autofillMonitor: AutofillMonitor, viewContainerRef: ViewContainerRef, renderer: Renderer2, ngZone: NgZone, _formField?: CubFormField | undefined);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Focuses the input. */
    focus(options?: FocusOptions): void;
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
    /** Whether the form control is a native select that is displayed inline. */
    _isInlineSelect(): boolean;
    /** Callback for the cases where the focused state of the input changes. */
    _focusChanged(isFocused: boolean): void;
    _onInput(): void;
    /** Does some manual dirty checking on the native input `value` property. */
    protected _dirtyCheckNativeValue(): void;
    /** Checks whether the input type is one of the types that are never empty. */
    protected _isNeverEmpty(): boolean;
    /** Checks whether the input is invalid based on the native validation. */
    protected _isBadInput(): boolean;
    /** Does some manual dirty checking on the native input `placeholder` attribute. */
    private _dirtyCheckPlaceholder;
    /** 建立 InputClearButton 區域，目前供 Clear 放置。 */
    private _setupInputClearButton;
    /** 移除 InputClearButton 區域 */
    private _removeInputClearButton;
    private _setupInputContainer;
    /** 處理當多個 class 傳入 */
    private _processClasses;
    /** 設置 Textarea 的 rows 屬性 */
    private _setTextareaRows;
    private _iOSKeyupListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubInput, [null, null, { optional: true; self: true; }, { optional: true; }, { optional: true; }, null, { optional: true; self: true; }, null, null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubInput, "input[cubInput], textarea[cubInput], select[cubNativeControl],      input[cubNativeControl], textarea[cubNativeControl]", ["cubInput"], { "size": { "alias": "size"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "title": { "alias": "title"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "id": { "alias": "id"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "style": { "alias": "style"; "required": false; }; "class": { "alias": "class"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "type": { "alias": "type"; "required": false; }; "errorStateMatcher": { "alias": "errorStateMatcher"; "required": false; }; "ariaDescribedBy": { "alias": "aria-describedby"; "required": false; }; "value": { "alias": "value"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "clear": "clear"; }, never, never, true, never>;
}

declare const CUB_INPUT_MASK_VALUE_ACCESSOR: any;
declare class CubInputMask implements OnInit, ControlValueAccessor {
    private elementRef;
    private changeDetectorRef;
    inputElement: HTMLInputElement;
    value: any;
    regexTests: any[];
    partialPosition: any;
    firstNonMaskPosition: number;
    lastRequiredNonMaskPosition: any;
    length: number;
    previousValue: string;
    buffer: any;
    defaultBuffer: string;
    focusText: string;
    caretTimeoutId: any;
    androidChrome: boolean;
    patterns: {
        [character: string]: string;
    };
    _mask: string;
    _filled: boolean;
    _focused: boolean;
    /**
     * 輸入遮罩格式，必填，預設值為 undefined。
     */
    get mask(): string;
    set mask(value: string);
    /** 是否禁用元件，預設值為 false。 */
    disabled: boolean;
    /** 是否唯讀，預設值為 false。 */
    readonly: boolean;
    /** 遮罩預設字元，預設值為 '_'。 */
    slotChar: string;
    /** 自動清除不合法輸入，預設值為 false。 */
    autoClear: boolean;
    /** 輸出值是否去除遮罩字元，預設值為 false。 */
    unmask: boolean;
    /** 輸入值變更時觸發 */
    inputChange: EventEmitter<any>;
    /** 鍵盤按下時觸發 */
    keydownChange: EventEmitter<any>;
    /** 元件獲得焦點時觸發 */
    focused: EventEmitter<any>;
    /** 元件失去焦點時觸發 */
    blurred: EventEmitter<any>;
    /** 遮罩輸入完成時觸發 */
    completed: EventEmitter<any>;
    constructor(elementRef: ElementRef<HTMLInputElement>, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    onChanged: Function;
    onTouched: Function;
    initMask(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(value: boolean): void;
    caret(first?: number, last?: number): any;
    isCompleted(): boolean;
    getPlaceholder(index: number): string;
    seekNext(position: number): number;
    seekPrev(position: number): number;
    shiftLeft(start: number, end: number): void;
    shiftRight(position: any): void;
    handleAndroidInput(event: any): void;
    onInputBlur(event: any): void;
    onInputKeydown(event: any): void;
    onInputKeypress(event: any): void;
    clearBuffer(start: number, end: number): void;
    writeBuffer(): void;
    checkValue(allow?: boolean): number;
    onInputFocus(event: any): void;
    onInputChange(event: any): void;
    onInputPaste(event: any): void;
    getUnmaskedValue(): string;
    updateModel(event: any): void;
    updateFilledState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubInputMask, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubInputMask, "input[cubInputMask]", never, { "mask": { "alias": "cubInputMask"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "slotChar": { "alias": "slotChar"; "required": false; }; "autoClear": { "alias": "autoClear"; "required": false; }; "unmask": { "alias": "unmask"; "required": false; }; }, { "inputChange": "inputChange"; "keydownChange": "keydownChange"; "focused": "focused"; "blurred": "blurred"; "completed": "completed"; }, never, never, true, never>;
}

type CubInputNumberOperation = 'insert' | 'range-insert' | 'spin' | 'delete-single' | 'delete-back-single' | 'delete-range';
interface CubInputNumberDecimalCharIndex {
    decimalCharIndex: number;
    decimalCharIndexWithoutPrefix: number;
}
interface CubInputNumberCharIndex {
    decimalCharIndex: number;
    minusCharIndex: number;
    suffixCharIndex: number;
    currencyCharIndex: number;
}

declare const CUB_INPUT_NUMBER_VALUE_ACCESSOR: any;
declare class CubInputNumber implements OnInit, OnChanges, ControlValueAccessor {
    private elementRef;
    private changeDetectorRef;
    inputElement: HTMLInputElement;
    value: any;
    initialized: boolean;
    groupChar: string;
    prefixChar: string;
    suffixChar: string;
    isSpecialChar: boolean;
    timer: any;
    lastValue: string;
    numberFormat: any;
    _numeral: any;
    _decimal: any;
    _group: any;
    _minusSign: any;
    _currency: any;
    _prefix: any;
    _suffix: any;
    _index: any;
    _disabled: boolean;
    _focused: boolean;
    get filled(): boolean;
    /** 最大可輸入字元數，預設值為 undefined。 */
    maxLength: number | undefined;
    /** 最小值，預設值為 undefined。 */
    min: number | undefined;
    /** 最大值，預設值為 undefined。 */
    max: number | undefined;
    /** 是否唯讀，預設值為 false。 */
    readonly: boolean;
    /** 每次遞增/遞減的步長，預設值為 1。 */
    step: number;
    /** 輸入模式，預設值為 'decimal'。 */
    mode: 'decimal' | 'currency';
    /** 是否格式化顯示，預設值為 true。 */
    format: boolean;
    /** 是否允許空值，預設值為 true。 */
    allowEmpty: boolean;
    /** 顯示於數值前的字串，預設值為 ''。 */
    prefix: string;
    /** 顯示於數值後的字串，預設值為 ''。 */
    suffix: string;
    /** 地區設定（如 zh-TW），預設值為 undefined。 */
    locale: string | undefined;
    /** 地區比對方式，預設值為 undefined。 */
    localeMatcher: any;
    /** 貨幣代碼（如 TWD, USD），預設值為 undefined。 */
    currency: string | undefined;
    /** 貨幣顯示方式（如 symbol, code, name），預設值為 undefined。 */
    currencyDisplay: string | undefined | any;
    /** 是否使用千分位分隔，預設值為 true。 */
    useGrouping: boolean;
    /** 最小小數位數，預設值為 undefined。 */
    minFractionDigits: number | undefined;
    /** 最大小數位數，預設值為 undefined。 */
    maxFractionDigits: number | undefined;
    /** 控制元件是否禁用，預設值為 false。 */
    get disabled(): boolean;
    set disabled(disabled: boolean);
    /** 輸入值變更時觸發，回傳 { originalEvent, value, formattedValue } */
    inputChange: EventEmitter<any>;
    /** 鍵盤按下時觸發 */
    keydownChange: EventEmitter<any>;
    /** 元件獲得焦點時觸發 */
    focused: EventEmitter<any>;
    /** 元件失去焦點時觸發 */
    blurred: EventEmitter<any>;
    constructor(elementRef: ElementRef<HTMLInputElement>, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(simpleChange: SimpleChanges): void;
    onChanged: Function;
    onTouched: Function;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    getOptions(): Intl.NumberFormatOptions;
    constructParser(): void;
    updateConstructParser(): void;
    escapeRegExp(text: string): string;
    getDecimalExpression(): RegExp;
    getGroupingExpression(): RegExp;
    getMinusSignExpression(): RegExp;
    getCurrencyExpression(): RegExp;
    getPrefixExpression(): RegExp;
    getSuffixExpression(): RegExp;
    formatValue(value: any): string;
    parseValue(text: string): any;
    repeat(event: any, interval: number, dir: number): void;
    spin(event: any, dir: number): void;
    onInputChange(event: any): void;
    onInputKeydown(event: any): void;
    onInputKeypress(event: any): void;
    onInputPaste(event: any): void;
    allowMinusSign(): boolean;
    isMinusSign(char: string): boolean;
    isDecimalSign(char: string): boolean;
    isDecimalMode(): boolean;
    getDecimalCharIndexes(value: any): CubInputNumberDecimalCharIndex;
    getCharIndexes(value: any): CubInputNumberCharIndex;
    insert(event: any, text: string, sign?: {
        isDecimalSign: boolean;
        isMinusSign: boolean;
    }): void;
    insertText(value: any, text: string, start: number, end: number): any;
    deleteRange(value: any, start: number, end: number): any;
    initCursor(): number;
    onInputClick(): void;
    isNumeralChar(char: string): boolean;
    resetRegex(): void;
    updateValue(event: any, valueString: any, insertedValueString: any, operation: CubInputNumberOperation): void;
    handleOnInput(event: any, currentValue: any, newValue: any): void;
    isValueChanged(currentValue: any, newValue: any): boolean;
    validateValue(value: any): any;
    updateInput(value: any, insertedValueString: any, operation: CubInputNumberOperation, valueString: any): void;
    concatValues(value: any, nextValue: any): string;
    getDecimalLength(value: any): number;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    formattedValue(): string;
    updateModel(event: FocusEvent, value: any): void;
    setDisabledState(disabled: boolean): void;
    clearTimer(): void;
    getFormatter(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubInputNumber, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubInputNumber, "input[cubInputNumber]", never, { "maxLength": { "alias": "maxLength"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "step": { "alias": "step"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "format": { "alias": "format"; "required": false; }; "allowEmpty": { "alias": "allowEmpty"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "localeMatcher": { "alias": "localeMatcher"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "currencyDisplay": { "alias": "currencyDisplay"; "required": false; }; "useGrouping": { "alias": "useGrouping"; "required": false; }; "minFractionDigits": { "alias": "minFractionDigits"; "required": false; }; "maxFractionDigits": { "alias": "maxFractionDigits"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "inputChange": "inputChange"; "keydownChange": "keydownChange"; "focused": "focused"; "blurred": "blurred"; }, never, never, true, never>;
}

declare class CubInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubInputModule, never, [typeof i1.CubCdkTextFieldModule, typeof cub_lib_view_rootng_component_common.CubCommonModule, typeof i3.CubFormFieldModule, typeof i4.CubLabelModule, typeof i5.CubInputGroupModule, typeof CubInput, typeof CubInputMask, typeof CubInputNumber], [typeof i1.CubCdkTextFieldModule, typeof cub_lib_view_rootng_component_common.CubCommonModule, typeof i3.CubFormFieldModule, typeof i4.CubLabelModule, typeof i5.CubInputGroupModule, typeof CubInput, typeof CubInputMask, typeof CubInputNumber]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubInputModule>;
}

export { CUB_INPUT_MASK_VALUE_ACCESSOR, CUB_INPUT_NUMBER_VALUE_ACCESSOR, CUB_INPUT_VALUE_ACCESSOR, CubInput, CubInputMask, CubInputModule, CubInputNumber };
export type { CubInputNumberCharIndex, CubInputNumberDecimalCharIndex, CubInputNumberOperation };
