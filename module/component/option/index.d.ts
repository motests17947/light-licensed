import * as i0 from '@angular/core';
import { InjectionToken, AfterViewChecked, OnDestroy, EventEmitter, ElementRef, ChangeDetectorRef, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { BooleanInput } from 'cub-lib-view-rootng/cdk/coercion';
import { FocusableOption, FocusOrigin } from 'cub-lib-view-rootng/cdk/a11y';
import * as cub_lib_view_rootng_component_common from 'cub-lib-view-rootng/component/common';
import { CanDisable, CubThemeSize } from 'cub-lib-view-rootng/component/common';

/**
 * Describes a parent component that manages a list of options.
 * Contains properties that the options can inherit.
 * @docs-private
 */
interface CubOptionParent {
    disableRipple?: boolean;
    multiple?: boolean;
    inertGroups?: boolean;
}
interface CubOptionItem {
    label?: string;
    value?: string;
    disabled?: boolean;
    items?: CubOptionItem[];
    [propName: string]: any;
}

/** Event object emitted by CubOption when selected or deselected. */
declare class CubOptionSelectionChange<T = any> {
    /** Reference to the option that emitted the event. */
    source: _CubOptionBase<T>;
    /** Whether the change in the option's value was a result of a user action. */
    isUserInput: boolean;
    constructor(
    /** Reference to the option that emitted the event. */
    source: _CubOptionBase<T>, 
    /** Whether the change in the option's value was a result of a user action. */
    isUserInput?: boolean);
}

/** @docs-private */
declare const _CubOptionGroupMixinBase: cub_lib_view_rootng_component_common.Constructor<cub_lib_view_rootng_component_common.CanDisable> & cub_lib_view_rootng_component_common.AbstractConstructor<cub_lib_view_rootng_component_common.CanDisable> & {
    new (): {};
};
/**
 * Injection token used to provide the parent component to options.
 */
declare const CUB_OPTION_PARENT: InjectionToken<CubOptionParent>;

declare class _CubOptionGroupBase extends _CubOptionGroupMixinBase implements CanDisable {
    /** Unique id for the underlying label. */
    _labelId: string;
    /** Whether the group is in inert a11y mode. */
    _inert: boolean;
    /** 元件標題，預設為 ''。 */
    label: string;
    /** 元件尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    constructor(parent?: CubOptionParent);
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubOptionGroupBase, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubOptionGroupBase, never, never, { "label": { "alias": "label"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}

declare class _CubOptionBase<T = any> implements FocusableOption, AfterViewChecked, OnDestroy {
    private _element;
    private _changeDetectorRef;
    private _parent;
    readonly group: _CubOptionGroupBase;
    isKeydownActive: boolean;
    /** Emits when the state of the option changes and any parents have to be notified. */
    readonly _stateChanges: Subject<void>;
    private _selected;
    private _active;
    private _disabled;
    private _mostRecentViewValue;
    /** Whether the wrapping component is in multiple selection mode. */
    get multiple(): boolean | undefined;
    /** Whether or not the option is currently selected. */
    get selected(): boolean;
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */
    get active(): boolean;
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */
    get viewValue(): string;
    /** Whether ripples for the option are disabled. */
    get disableRipple(): boolean;
    /** 元件數值，預設為 undefined。 */
    value: T;
    /** 元件 id，預設為 'cub-option-0'。 */
    id: string;
    /** 元件尺寸，預設為 'medium'。 */
    size: CubThemeSize;
    /** 元件是否禁用，預設為 false。 */
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    /** 當更改了選定值時發出通知。 */
    readonly selectionChange: EventEmitter<CubOptionSelectionChange<T>>;
    constructor(_element: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef, _parent: CubOptionParent, group: _CubOptionGroupBase);
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    /** Selects the option. */
    select(): void;
    /** Deselects the option. */
    deselect(): void;
    /** Sets focus onto this option. */
    focus(_origin?: FocusOrigin, options?: FocusOptions): void;
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles(): void;
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles(): void;
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel(): string;
    /** Ensures the option is selected when activated from the keyboard. */
    _handleKeydown(event: KeyboardEvent): void;
    _handleClick(event: Event): void;
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    _selectViaInteraction(): void;
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     */
    _getAriaSelected(): boolean | null;
    /** Returns the correct tabindex for the option depending on disabled state. */
    _getTabIndex(): string;
    /** Gets the host DOM element. */
    _getHostElement(): HTMLElement;
    /** Emits the selection change event. */
    private _emitSelectionChangeEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubOptionBase<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubOptionBase<any>, never, never, { "value": { "alias": "value"; "required": false; }; "id": { "alias": "id"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

/**
 * Injection token that can be used to reference instances of `CubOptionGroup`. It serves as
 * alternative token to the actual `CubOptionGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
declare const CUB_OPTION_GROUP: InjectionToken<CubOptionGroup>;
/**
 * Component that is used to group instances of `cub-option`.
 */
declare class CubOptionGroup extends _CubOptionGroupBase {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubOptionGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubOptionGroup, "cub-option-group", ["cubOptionGroup"], { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*", "cub-option, ng-container"], true, never>;
}

/**
 * Single option inside of a `<cub-select>` element.
 */
declare class CubOption<T = any> extends _CubOptionBase<T> {
    constructor(element: ElementRef<HTMLElement>, changeDetectorRef: ChangeDetectorRef, parent: CubOptionParent, group: CubOptionGroup);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubOption<any>, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubOption<any>, "cub-option", ["cubOption"], {}, {}, never, ["*"], true, never>;
}

/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
declare function _countGroupLabelsBeforeOption(optionIndex: number, options: QueryList<CubOption>, optionGroups: QueryList<CubOptionGroup>): number;
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
declare function _getOptionScrollPosition(optionOffset: number, optionHeight: number, currentScrollPosition: number, panelHeight: number): number;

declare class CubOptionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubOptionModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubOptionModule, never, [typeof CubOption, typeof CubOptionGroup], [typeof CubOption, typeof CubOptionGroup]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubOptionModule>;
}

export { CUB_OPTION_GROUP, CUB_OPTION_PARENT, CubOption, CubOptionGroup, CubOptionModule, CubOptionSelectionChange, _CubOptionBase, _CubOptionGroupBase, _CubOptionGroupMixinBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition };
export type { CubOptionItem, CubOptionParent };
