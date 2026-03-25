import * as i0 from '@angular/core';
import { AfterContentInit, QueryList, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import * as i1 from 'cub-lib-view-rootng/component/common';
import { CubSuffix, CubEnd, CubThemeSize } from 'cub-lib-view-rootng/component/common';

type CubLabelAlignment = 'left' | 'right';
type CubLabelWidthMode = 'fill' | 'auto' | 'fixed';

declare class CubLabel implements AfterContentInit {
    private renderer;
    private elementRef;
    private _changeDetectorRef;
    labelContent: string;
    readonly _labelId: string;
    private _widthMode;
    private _customWidth;
    _labelSuffixChildren: QueryList<CubSuffix>;
    _labelEndChildren: QueryList<CubEnd>;
    label: ElementRef;
    /**
     是否啟用必填狀態，預設為否。
     */
    required: boolean;
    /**
     元件尺寸，預設為 'medium'。
     */
    size: CubThemeSize;
    /**
     元件文字對齊，預設為 'left'。
     */
    alignment: CubLabelAlignment;
    /**
     元件寬度設定，預設為 'fill'。
     */
    get widthMode(): CubLabelWidthMode;
    set widthMode(value: CubLabelWidthMode);
    /**
     元件寬度，當 widthMode 設定為 'fixed' 才有效果，預設為 ''。
     */
    get customWidth(): string;
    set customWidth(value: string);
    constructor(renderer: Renderer2, elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    observeContent(event: any): void;
    trim(element: any): void;
    setCustomWidth(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubLabel, "cub-label", never, { "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "alignment": { "alias": "alignment"; "required": false; }; "widthMode": { "alias": "widthMode"; "required": false; }; "customWidth": { "alias": "customWidth"; "required": false; }; }, {}, ["_labelSuffixChildren", "_labelEndChildren"], ["*", "[cubSuffix]", "[cubEnd]"], true, never>;
}

declare class CubLabelModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubLabelModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubLabelModule, never, [typeof i1.CubCommonModule, typeof CubLabel], [typeof i1.CubCommonModule, typeof CubLabel]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubLabelModule>;
}

export { CubLabel, CubLabelModule };
export type { CubLabelAlignment, CubLabelWidthMode };
