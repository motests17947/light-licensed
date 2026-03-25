import * as i0 from '@angular/core';
import { ElementRef, AfterViewInit, OnDestroy, QueryList, Renderer2, NgZone, OnInit } from '@angular/core';
import { FocusableOption, FocusMonitor, FocusOrigin } from 'cub-lib-view-rootng/cdk/a11y';
import * as cub_lib_view_rootng_component_common from 'cub-lib-view-rootng/component/common';
import { CanColor, CanDisable, CanDisableRipple, CubRipple, CubThemeSize, CubPrefix, CubSuffix, CubThemeColorScheme } from 'cub-lib-view-rootng/component/common';
import { CubLoadingColor } from 'cub-lib-view-rootng/component/loading';
import * as i2 from 'cub-lib-view-rootng/component/menu';

declare const _CubButtonMixinBase: cub_lib_view_rootng_component_common.Constructor<CanColor> & cub_lib_view_rootng_component_common.AbstractConstructor<CanColor> & cub_lib_view_rootng_component_common.Constructor<CanDisable> & cub_lib_view_rootng_component_common.AbstractConstructor<CanDisable> & cub_lib_view_rootng_component_common.Constructor<CanDisableRipple> & cub_lib_view_rootng_component_common.AbstractConstructor<CanDisableRipple> & {
    new (_elementRef: ElementRef): {
        _elementRef: ElementRef;
    };
};
declare abstract class _CubButtonBase extends _CubButtonMixinBase implements CanColor, CanDisable, CanDisableRipple, FocusableOption {
    elementRef: ElementRef;
    _focusMonitor: FocusMonitor;
    ripple: CubRipple;
    /** 是否為載入狀態，預設為否 */
    loading: boolean;
    /** 按鈕尺寸，預設為 medium */
    size: CubThemeSize;
    constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor);
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    _getHostElement(): any;
    _hasHostAttributes(...attributes: string[]): boolean;
    _monitorFocus(): void;
    _stopFocusMonitoring(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<_CubButtonBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_CubButtonBase, never, never, { "loading": { "alias": "loading"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}

type CubButtonAppearance = 'filled' | 'filled-outline' | 'outline' | 'text' | 'plain';
type CubHyperlinkAppearance = 'plain' | 'file' | 'link' | 'sup' | 'sub';

declare class CubHyperlink extends _CubButtonBase implements AfterViewInit, OnDestroy {
    private _renderer;
    _animationMode: string;
    private _ngZone?;
    _prefixChildren: QueryList<CubPrefix>;
    _suffixChildren: QueryList<CubSuffix>;
    /** 是否為禁用狀態。 */
    /** 主題顏色，預設為 'brand'。 */
    /** 外觀樣式，預設為 'plain' */
    appearance: CubHyperlinkAppearance;
    /** Tab 鍵的控制項索引值 */
    tabIndex: number;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, _renderer: Renderer2, _animationMode: string, _ngZone?: NgZone | undefined);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _haltDisabledEvents: (event: Event) => void;
    _KeyboardHaltDisabledEvents: (event: KeyboardEvent) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubHyperlink, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubHyperlink, "a[cub-hyperlink]", ["cubHyperlink"], { "disabled": { "alias": "disabled"; "required": false; }; "color": { "alias": "color"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; }, {}, ["_prefixChildren", "_suffixChildren"], ["[cubPrefix]", "*", "[cubSuffix]"], true, never>;
}

declare class CubButton extends _CubButtonBase implements AfterViewInit, OnDestroy {
    private _renderer;
    _animationMode: string;
    _prefixChildren: QueryList<CubPrefix>;
    _suffixChildren: QueryList<CubSuffix>;
    /** 是否為禁用狀態。 */
    /** 是否禁用漣漪效果。 */
    /** 主題顏色，預設為 'brand'。 */
    /** 外觀樣式，預設為 'text'。 */
    appearance: CubButtonAppearance;
    /** 是否滿版顯示，預設為否。  */
    block: boolean;
    /** 是否設置最小寬度，預設為否。  */
    withMinWidth: boolean;
    get loadingColor(): CubLoadingColor;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, _renderer: Renderer2, _animationMode: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubButton, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubButton, "button[cub-button]", ["cubButton"], { "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "color": { "alias": "color"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "block": { "alias": "block"; "required": false; }; "withMinWidth": { "alias": "withMinWidth"; "required": false; }; }, {}, ["_prefixChildren", "_suffixChildren"], ["[cubPrefix]", "*", "[cubSuffix]"], true, never>;
}

declare class CubIconButton extends _CubButtonBase implements AfterViewInit, OnDestroy {
    private _renderer;
    _animationMode: string;
    /** 是否為禁用狀態。 */
    /** 是否禁用漣漪效果。 */
    /** 主題顏色，預設為 'brand'。 */
    /** 外觀樣式，預設為 Text Button  */
    appearance: CubButtonAppearance;
    get loadingColor(): CubLoadingColor;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, _renderer: Renderer2, _animationMode: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubIconButton, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubIconButton, "button[cub-icon-button]", ["cubIconButton"], { "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "color": { "alias": "color"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CubFloatingActionButton extends _CubButtonBase implements AfterViewInit, OnDestroy {
    private _renderer;
    _animationMode: string;
    /** 是否為禁用狀態。 */
    /** 是否禁用漣漪效果。 */
    /** 外觀樣式，預設為 'dark'。 */
    colorScheme: CubThemeColorScheme;
    get loadingColor(): CubLoadingColor;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, _renderer: Renderer2, _animationMode: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFloatingActionButton, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubFloatingActionButton, "button[cub-floating-action-button]", ["cubFloatingActionButton"], { "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "colorScheme": { "alias": "colorScheme"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CubButtonGroup implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubButtonGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubButtonGroup, "cub-button-group", ["cubButtonGroup"], {}, {}, never, ["*"], true, never>;
}

declare class CubButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubButtonModule, never, [typeof cub_lib_view_rootng_component_common.CubCommonModule, typeof i2.CubMenuModule, typeof CubButton, typeof CubIconButton, typeof CubFloatingActionButton, typeof CubHyperlink, typeof CubButtonGroup], [typeof cub_lib_view_rootng_component_common.CubCommonModule, typeof i2.CubMenuModule, typeof CubButton, typeof CubIconButton, typeof CubFloatingActionButton, typeof CubHyperlink, typeof CubButtonGroup]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubButtonModule>;
}

export { CubButton, CubButtonGroup, CubButtonModule, CubFloatingActionButton, CubHyperlink, CubIconButton };
export type { CubButtonAppearance, CubHyperlinkAppearance };
