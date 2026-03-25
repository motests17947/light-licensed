import * as i0 from '@angular/core';
import { AfterViewInit, ComponentRef, ElementRef, Renderer2, ViewContainerRef, InjectionToken, AfterContentInit, AfterContentChecked, OnDestroy, QueryList, ChangeDetectorRef } from '@angular/core';
import { NgControl, AbstractControlDirective } from '@angular/forms';
import * as i1 from 'cub-lib-view-rootng/component/common';
import { CubThemeStatus, CubFlexOrientation, CubThemeSize } from 'cub-lib-view-rootng/component/common';
import * as i2 from 'cub-lib-view-rootng/component/label';
import { CubLabel } from 'cub-lib-view-rootng/component/label';
import { Observable } from 'rxjs';
import { AnimationTriggerMetadata } from '@angular/animations';

declare abstract class CubFormFieldControl<T> {
    /** The value of the control. */
    value: T | null;
    /**
     * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
     * needs to run change detection.
     */
    readonly stateChanges: Observable<void>;
    /** The element ID for this control. */
    readonly id: string;
    /** The placeholder for this control. */
    readonly placeholder: string;
    /** Gets the AbstractControlDirective for this control. */
    readonly ngControl: NgControl | AbstractControlDirective | null;
    /** Whether the control is focused. */
    readonly focused: boolean;
    /** Whether the control is empty. */
    readonly empty: boolean;
    /** Whether the control is required. */
    readonly required: boolean;
    /** Whether the control is disabled. */
    readonly disabled: boolean;
    /** Whether the control is in an error state. */
    readonly errorState: boolean;
    /**
     * An optional name for the control type that can be used to distinguish `cub-form-field` elements
     * based on their control type. The form field will add a class,
     * `cub-form-field-type-{{controlType}}` to its root element.
     */
    readonly controlType?: string;
    /**
     * Whether the input is currently in an autofilled state. If property is not present on the
     * control it is assumed to be false.
     */
    readonly autofilled?: boolean;
    /**
     * Value of `aria-describedby` that should be merged with the described-by ids
     * which are set by the form-field.
     */
    readonly ariaDescribedBy?: string;
    /** Sets the list of element IDs that currently describe this control. */
    abstract setDescribedByIds(ids: string[]): void;
    /** Handles a click on the control's container. */
    abstract onContainerClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFormFieldControl<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubFormFieldControl<any>, never, never, {}, {}, never, never, true, never>;
}

declare class CubMessageIcon {
    /**
     元件狀態，預設為 'neutral'。
     */
    status: CubThemeStatus;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubMessageIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubMessageIcon, "cub-message-icon", never, { "status": { "alias": "status"; "required": false; }; }, {}, never, never, true, never>;
}

type CubHintStatus = 'neutral' | 'custom';

declare const CUB_HINT: InjectionToken<CubHint>;
declare class CubHint implements AfterViewInit {
    private elementRef;
    private renderer;
    private viewContainerRef;
    cubMessageIcon: ComponentRef<CubMessageIcon> | null;
    parentContainer: any;
    private _status;
    /**
     元件 id，預設為 'cub-form-field-hint-0'。
     */
    id: string;
    /**
     元件狀態，預設為 'neutral'。
     */
    get status(): CubHintStatus;
    set status(value: CubHintStatus);
    constructor(elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    private _setMessageIcon;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubHint, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubHint, "cub-hint", never, { "id": { "alias": "id"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, never, true, never>;
}

declare const CUB_ERROR: InjectionToken<CubError>;
declare class CubError implements AfterViewInit {
    private elementRef;
    private renderer;
    private viewContainerRef;
    cubMessageIcon: ComponentRef<CubMessageIcon>;
    private status;
    /**
     元件 id，預設為 'cub-form-field-error-0'。
     */
    id: string;
    constructor(ariaLive: string, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubError, [{ attribute: "aria-live"; }, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubError, "cub-error", never, { "id": { "alias": "id"; "required": false; }; }, {}, never, never, true, never>;
}

declare const CUB_SUCCESS: InjectionToken<CubSuccess>;
declare class CubSuccess implements AfterViewInit {
    private elementRef;
    private renderer;
    private viewContainerRef;
    cubMessageIcon: ComponentRef<CubMessageIcon>;
    private status;
    /**
     元件 id，預設為 'cub-form-field-success-0'。
     */
    id: string;
    constructor(ariaLive: string, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSuccess, [{ attribute: "aria-live"; }, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSuccess, "cub-success", never, { "id": { "alias": "id"; "required": false; }; }, {}, never, never, true, never>;
}

declare const CUB_FORM_FIELD: InjectionToken<CubFormField>;
declare class CubFormField implements AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
    _elementRef: ElementRef;
    private _changeDetectorRef;
    _subscriptAnimationState: string;
    readonly _hintLabelId: string;
    private readonly _destroyed;
    private _explicitFormFieldControl;
    get _control(): CubFormFieldControl<any>;
    set _control(value: CubFormFieldControl<any>);
    get _label(): CubLabel;
    /**
     是否啟用錯誤狀態，預設為否。
     */
    invalid: boolean | boolean[];
    /**
     元件方向，預設為 'vertical'。
     */
    orientation: CubFlexOrientation;
    /**
       元件尺寸，預設為 'medium'。
       */
    size: CubThemeSize;
    _controlNonStatic: CubFormFieldControl<any>;
    _controlStatic: CubFormFieldControl<any>;
    _labelChildNonStatic: CubLabel;
    _labelChildStatic: CubLabel;
    _successChildren: QueryList<CubSuccess>;
    _errorChildren: QueryList<CubError>;
    _hintChildren: QueryList<CubHint>;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _shouldForward(prop: keyof AbstractControlDirective): boolean;
    protected _validateControlChild(): void;
    private _processHints;
    private _syncDescribedByIds;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubFormField, "cub-form-field", ["cubFormField"], { "invalid": { "alias": "invalid"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, ["_controlNonStatic", "_controlStatic", "_labelChildNonStatic", "_labelChildStatic", "_successChildren", "_errorChildren", "_hintChildren"], ["cub-label", "*", "cub-hint", "cub-error", "cub-success"], true, never>;
}

declare const cubFormFieldAnimations: {
    readonly transitionMessages: AnimationTriggerMetadata;
};

declare function getCubFormFieldPlaceholderConflictError(): Error;
declare function getCubFormFieldDuplicatedHintError(align: string): Error;
declare function getCubFormFieldMissingControlError(): Error;

declare class CubFormFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFormFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubFormFieldModule, never, [typeof i1.CubCommonModule, typeof i2.CubLabelModule, typeof CubFormField, typeof CubHint, typeof CubError, typeof CubSuccess], [typeof i1.CubCommonModule, typeof i2.CubLabelModule, typeof CubFormField, typeof CubHint, typeof CubError, typeof CubSuccess]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubFormFieldModule>;
}

export { CUB_ERROR, CUB_FORM_FIELD, CUB_HINT, CUB_SUCCESS, CubError, CubFormField, CubFormFieldControl, CubFormFieldModule, CubHint, CubSuccess, cubFormFieldAnimations, getCubFormFieldDuplicatedHintError, getCubFormFieldMissingControlError, getCubFormFieldPlaceholderConflictError };
export type { CubHintStatus };
