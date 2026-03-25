import * as i0 from '@angular/core';
import { OnInit, QueryList } from '@angular/core';
import * as i1 from 'cub-lib-view-rootng/component/common';
import { CubThemeColorScheme, CubSuffix, CubEnd } from 'cub-lib-view-rootng/component/common';
import * as i2 from 'cub-lib-view-rootng/component/loading';

declare class CubCardContent {
    private parentCard;
    get contentColorScheme(): CubThemeColorScheme;
    constructor(parentCard: CubCard | null);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubCardContent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubCardContent, "cub-card-content", never, {}, {}, never, ["*"], true, never>;
}

declare class CubCard implements OnInit {
    /** 元件標題背景顏色，預設值為 'light'。 */
    headerColorScheme: CubThemeColorScheme;
    /** 元件內容背景顏色，預設值為 'light'。 */
    contentColorScheme: CubThemeColorScheme;
    /** 元件是否可選取，預設值為 false。 */
    interactive: boolean;
    _contentStatic: CubCardContent;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubCard, "cub-card", never, { "headerColorScheme": { "alias": "headerColorScheme"; "required": false; }; "contentColorScheme": { "alias": "contentColorScheme"; "required": false; }; "interactive": { "alias": "interactive"; "required": false; }; }, {}, ["_contentStatic"], ["cub-card-header", "cub-card-content", "*"], true, never>;
}

declare class CubCardHeader implements OnInit {
    private parentCard;
    _headerSuffixChildren: QueryList<CubSuffix>;
    _headerEndChildren: QueryList<CubEnd>;
    get headerColorScheme(): CubThemeColorScheme;
    constructor(parentCard: CubCard | null);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubCardHeader, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubCardHeader, "cub-card-header", never, {}, {}, ["_headerSuffixChildren", "_headerEndChildren"], ["*", "[cubSuffix]", "[cubEnd]"], true, never>;
}

declare class CubCardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubCardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubCardModule, never, [typeof i1.CubCommonModule, typeof i2.CubLoadingModule, typeof CubCard, typeof CubCardContent, typeof CubCardHeader], [typeof i1.CubCommonModule, typeof i2.CubLoadingModule, typeof CubCard, typeof CubCardContent, typeof CubCardHeader]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubCardModule>;
}

export { CubCard, CubCardContent, CubCardHeader, CubCardModule };
