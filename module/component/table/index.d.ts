import * as i0 from '@angular/core';
import { OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy, TemplateRef, EventEmitter, ElementRef, QueryList, ChangeDetectorRef, NgZone, SimpleChanges, Renderer2 } from '@angular/core';
import * as rxjs from 'rxjs';
import { Subject, Subscription } from 'rxjs';
import * as i1 from 'cub-lib-view-rootng/component/common';
import { CubFilterService, CubThemeSize, CubTemplate, TranslationConfig } from 'cub-lib-view-rootng/component/common';

type CubTableScrollerToType = 'to-start' | 'to-end' | undefined;
type CubTableScrollerOrientationType = 'vertical' | 'horizontal' | 'both';

interface CubTableScrollerOptions {
    id?: string | undefined;
    style?: any;
    styleClass?: string | undefined;
    tabindex?: number | undefined;
    items?: any[];
    itemSize?: any;
    scrollHeight?: string | undefined;
    scrollWidth?: string | undefined;
    orientation?: CubTableScrollerOrientationType;
    step?: number | undefined;
    delay?: number | undefined;
    resizeDelay?: number | undefined;
    appendOnly?: boolean;
    inline?: boolean;
    lazy?: boolean;
    disabled?: boolean;
    loaderDisabled?: boolean;
    columns?: any[] | undefined;
    showSpacer?: boolean;
    showLoader?: boolean;
    numToleratedItems?: any;
    loading?: boolean;
    autoSize?: boolean;
    trackBy?: any;
    lazyLoad?: Function | undefined;
    scroll?: Function | undefined;
    scrollIndexChange?: Function | undefined;
}

declare class CubScroller implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy {
    private cd;
    private zone;
    d_loading: boolean;
    d_numToleratedItems: any;
    contentEl: any;
    contentTemplate: TemplateRef<any>;
    itemTemplateRef: TemplateRef<any>;
    loaderTemplateRef: TemplateRef<any>;
    loaderIconTemplateRef: TemplateRef<any>;
    first: any;
    last: any;
    page: number;
    numItemsInViewport: any;
    lastScrollPos: any;
    lazyLoadState: any;
    loaderArr: any[];
    spacerStyle: any;
    contentStyle: any;
    scrollTimeout: any;
    resizeTimeout: any;
    initialized: boolean;
    windowResizeListener: any;
    defaultWidth: number;
    defaultHeight: number;
    _id: string;
    _style: any;
    _styleClass: string;
    _tabindex: number;
    _items: any[];
    _itemSize: any;
    _scrollHeight: any;
    _scrollWidth: string;
    _orientation: string;
    _inline: boolean;
    _step: number;
    _delay: number;
    _resizeDelay: number;
    _appendOnly: boolean;
    _lazy: boolean;
    _disabled: boolean;
    _loaderDisabled: boolean;
    _columns: any[];
    _showSpacer: boolean;
    _showLoader: boolean;
    _numToleratedItems: any;
    _loading: boolean;
    _autoSize: boolean;
    _trackBy: any;
    _options: CubTableScrollerOptions;
    get vertical(): boolean;
    get horizontal(): boolean;
    get both(): boolean;
    get loadedItems(): any[];
    get loadedRows(): any[];
    get loadedColumns(): any;
    get isPageChanged(): boolean;
    /** 元件唯一識別符，預設為 undefined。 */
    get id(): string;
    set id(value: string);
    /** 元件的行內樣式，預設為 undefined。 */
    get style(): any;
    set style(value: any);
    /** 元件的類別樣式，預設為 undefined。 */
    get styleClass(): string;
    set styleClass(value: string);
    /** 元件的鍵盤導航順序，預設為 undefined。 */
    get tabindex(): number;
    set tabindex(value: number);
    /** 要顯示的物件陣列，預設為 undefined。 */
    get items(): any[];
    set items(value: any[]);
    /** 根據方向調整項目的高度/寬度，預設為 0。 */
    get itemSize(): any;
    set itemSize(value: any);
    /** 滾動的視窗高度，預設為 undefined。 */
    get scrollHeight(): any;
    set scrollHeight(value: any);
    /** 滾動的視窗寬度，預設為 undefined。 */
    get scrollWidth(): string;
    set scrollWidth(value: string);
    /** 滾動條的顯示方向，有效值為 'vertical'（垂直）、'horizontal'（水平）與 'both'（兩者），預設為 'vertical'。 */
    get orientation(): string;
    set orientation(value: string);
    /** 是否以行內元素顯示，預設為 false。 */
    get inline(): boolean;
    set inline(value: boolean);
    /** 在延遲載入模式下，每次載入多少個項目，預設為 0。 */
    get step(): number;
    set step(value: number);
    /** 滾動後到載入新資料前的延遲時間，預設為 0。 */
    get delay(): number;
    set delay(value: number);
    /** 視窗調整大小完成後的延遲時間，預設為 10。 */
    get resizeDelay(): number;
    set resizeDelay(value: number);
    /** 是否將每個載入的項目附加到頂部，而不從 DOM 中移除任何項目，預設為 false。 */
    get appendOnly(): boolean;
    set appendOnly(value: boolean);
    /** 是否啟用延遲載入功能，預設為 false。 */
    get lazy(): boolean;
    set lazy(value: boolean);
    /** 是否為禁用狀態，預設為 false。 */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** 是否自訂讀取動畫，而不使用預設的讀取動畫，預設為 false。 */
    get loaderDisabled(): boolean;
    set loaderDisabled(value: boolean);
    /** 動態欄位的物件陣列資料，預設為 undefined。 */
    get columns(): any[];
    set columns(value: any[]);
    /** 是否自訂間隔器，而不使用預設的間隔器，預設為 true。 */
    get showSpacer(): boolean;
    set showSpacer(value: boolean);
    /** 是否顯示讀取動畫，預設為 false。 */
    get showLoader(): boolean;
    set showLoader(value: boolean);
    /** 決定在視窗外要新增多少額外元素。根據上下滾動，會以此數字的倍數形式新增額外項目。預設值是視窗中顯示項目數量的一半。 */
    get numToleratedItems(): number;
    set numToleratedItems(value: number);
    /** 是否為載入狀態，預設為 undefined。 */
    get loading(): boolean;
    set loading(value: boolean);
    /** 是否動態改變可滾動容器的高度或寬度，預設為 false。 */
    get autoSize(): boolean;
    set autoSize(value: boolean);
    /** 透過 ngForTrackBy 來檢查元素的唯一識別符，預設為 undefined。 */
    get trackBy(): any;
    set trackBy(value: any);
    /** 滾動器項目設定，預設為 undefined。 */
    get options(): CubTableScrollerOptions;
    set options(value: CubTableScrollerOptions);
    /** 在延遲載入模式下載入新資料時調用的通知事件。 */
    lazyLoad: EventEmitter<any>;
    /** 當滾動位置改變時調用的通知事件。 */
    scroll: EventEmitter<any>;
    /** 當滾動位置和視窗中項目範圍改變時調用的通知事件。 */
    scrollIndexChange: EventEmitter<any>;
    elementViewChild: ElementRef;
    contentViewChild: ElementRef;
    templates: QueryList<any>;
    constructor(cd: ChangeDetectorRef, zone: NgZone);
    ngOnInit(): void;
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    viewInit(): void;
    init(): void;
    setContentEl(el?: HTMLElement): void;
    setInitialState(): void;
    getElementRef(): ElementRef<any>;
    getPageByFirst(): number;
    scrollTo(options: ScrollToOptions): void;
    scrollToIndex(index: any, behavior?: ScrollBehavior): void;
    scrollInView(index: any, to: CubTableScrollerToType, behavior?: ScrollBehavior): void;
    getRenderedRange(): {
        first: any;
        last: any;
        viewport: {
            first: any;
            last: any;
        };
    };
    calculateNumItems(): {
        numItemsInViewport: any;
        numToleratedItems: any;
    };
    calculateOptions(): void;
    calculateAutoSize(): void;
    getLast(last?: number, isCols?: boolean): number;
    getContentPosition(): {
        left: number;
        right: number;
        top: number;
        bottom: number;
        x: number;
        y: number;
    };
    setSize(): void;
    setSpacerSize(): void;
    setContentPosition(pos: any): void;
    onScrollPositionChange(event: any): {
        first: number | {
            rows: number;
            cols: number;
        };
        last: any;
        isRangeChanged: boolean;
        scrollPos: any;
    };
    onScrollChange(event: any): void;
    onContainerScroll(event: any): void;
    bindResizeListener(): void;
    unbindResizeListener(): void;
    onWindowResize(): void;
    handleEvents(name: any, params: any): any;
    getContentOptions(): {
        contentStyleClass: string;
        items: any[];
        getItemOptions: (index: any) => {
            index: any;
            count: number;
            first: boolean;
            last: boolean;
            even: boolean;
            odd: boolean;
        };
        loading: boolean;
        getLoaderOptions: (index: any, options?: any) => any;
        itemSize: any;
        rows: any[];
        columns: any;
        spacerStyle: any;
        contentStyle: any;
        vertical: boolean;
        horizontal: boolean;
        both: boolean;
    };
    getOptions(renderedIndex: any): {
        index: any;
        count: number;
        first: boolean;
        last: boolean;
        even: boolean;
        odd: boolean;
    };
    getLoaderOptions(index: any, extOptions: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubScroller, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubScroller, "cub-scroller", never, { "id": { "alias": "id"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemSize": { "alias": "itemSize"; "required": false; }; "scrollHeight": { "alias": "scrollHeight"; "required": false; }; "scrollWidth": { "alias": "scrollWidth"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "inline": { "alias": "inline"; "required": false; }; "step": { "alias": "step"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "resizeDelay": { "alias": "resizeDelay"; "required": false; }; "appendOnly": { "alias": "appendOnly"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loaderDisabled": { "alias": "loaderDisabled"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "showSpacer": { "alias": "showSpacer"; "required": false; }; "showLoader": { "alias": "showLoader"; "required": false; }; "numToleratedItems": { "alias": "numToleratedItems"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "autoSize": { "alias": "autoSize"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "lazyLoad": "lazyLoad"; "scroll": "scroll"; "scrollIndexChange": "scrollIndexChange"; }, ["templates"], ["*"], true, never>;
}

interface CubTableBlockableUI {
    getBlockableElement(): HTMLElement;
}
interface CubTableFilterOption {
    label: any;
    value: any;
}
interface CubTableFilterMetadata {
    value?: any;
    matchMode?: string;
    operator?: string;
}
interface CubTableSortMeta {
    field: string;
    order: number;
}
interface CubTableState {
    first?: number;
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: CubTableSortMeta[];
    filters?: {
        [s: string]: CubTableFilterMetadata[];
    };
    columnWidths?: string;
    tableWidth?: string;
    wrapperWidth?: string;
    selection?: any;
    columnOrder?: string[];
    expandedRowKeys?: {
        [s: string]: boolean;
    };
}

declare class CubTableService {
    sortSource: Subject<CubTableSortMeta | CubTableSortMeta[]>;
    selectionSource: Subject<unknown>;
    contextMenuSource: Subject<any>;
    valueSource: Subject<any>;
    totalRecordsSource: Subject<any>;
    columnsSource: Subject<unknown>;
    resetSource: Subject<unknown>;
    disabledCancelCheck: Subject<unknown>;
    frozenTriggerCheck: Subject<unknown>;
    sortSource$: rxjs.Observable<CubTableSortMeta | CubTableSortMeta[]>;
    selectionSource$: rxjs.Observable<unknown>;
    contextMenuSource$: rxjs.Observable<any>;
    valueSource$: rxjs.Observable<any>;
    totalRecordsSource$: rxjs.Observable<any>;
    columnsSource$: rxjs.Observable<unknown>;
    resetSource$: rxjs.Observable<unknown>;
    disabledCancelCheck$: rxjs.Observable<unknown>;
    frozenTriggerCheck$: rxjs.Observable<unknown>;
    onSort(sortMeta: CubTableSortMeta | CubTableSortMeta[]): void;
    onSelectionChange(): void;
    onResetChange(): void;
    onContextMenu(data: any): void;
    onValueChange(value: any): void;
    onTotalRecordsChange(value: number): void;
    onColumnsChange(columns: any[]): void;
    onDisabledCancelCheck(): void;
    onFrozenTriggerCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CubTableService>;
}

type CubTableAppearance = 'default' | 'bordered';

declare class CubTable implements OnInit, AfterViewInit, AfterContentInit, OnChanges, OnDestroy, CubTableBlockableUI {
    elementRef: ElementRef;
    zone: NgZone;
    tableService: CubTableService;
    changeDetectorRef: ChangeDetectorRef;
    filterService: CubFilterService;
    frozenColumns: any[];
    /** 凍結欄位的物件陣列資料，預設為 undefined。*/
    frozenValue: any[];
    frozenWidth: string;
    selectionMode: string;
    contextMenu: any;
    resizableColumns: boolean;
    columnResizeMode: string;
    reorderableColumns: boolean;
    showLoader: boolean;
    rowHover: boolean;
    showInitialSortBadge: boolean;
    exportFunction: any;
    exportHeader: string;
    stateKey: string;
    stateStorage: string;
    editMode: string;
    groupRowsBy: any;
    groupRowsByOrder: number;
    contextMenuSelection: any;
    contextMenuSelectionMode: string;
    metaKeySelection: boolean;
    rowSelectable: any;
    compareSelectionBy: string;
    csvSeparator: string;
    exportFilename: string;
    filters: {
        [s: string]: CubTableFilterMetadata[];
    };
    globalFilterFields: string[];
    filterDelay: number;
    filterLocale: string;
    editingRowKeys: {
        [s: string]: boolean;
    };
    scrollDirection: string;
    rowGroupMode: string;
    virtualScroll: boolean;
    virtualScrollDelay: number;
    virtualScrollItemSize: number;
    virtualScrollOptions: CubTableScrollerOptions;
    filteredValue: any;
    headerTemplateRef: TemplateRef<any>;
    headerGroupedTemplateRef: TemplateRef<any>;
    bodyTemplateRef: TemplateRef<any>;
    loadingBodyTemplateRef: TemplateRef<any>;
    captionTemplateRef: TemplateRef<any>;
    frozenRowsTemplateRef: TemplateRef<any>;
    footerTemplateRef: TemplateRef<any>;
    footerGroupedTemplateRef: TemplateRef<any>;
    summaryTemplateRef: TemplateRef<any>;
    colGroupTemplateRef: TemplateRef<any>;
    expandedRowTemplateRef: TemplateRef<any>;
    groupHeaderTemplateRef: TemplateRef<any>;
    groupFooterTemplateRef: TemplateRef<any>;
    rowspanTemplateRef: TemplateRef<any>;
    frozenExpandedRowTemplateRef: TemplateRef<any>;
    frozenHeaderTemplateRef: TemplateRef<any>;
    frozenBodyTemplateRef: TemplateRef<any>;
    frozenFooterTemplateRef: TemplateRef<any>;
    frozenColGroupTemplateRef: TemplateRef<any>;
    emptyMessageTemplateRef: TemplateRef<any>;
    selectionKeys: any;
    lastResizerHelperX: number;
    reorderIconWidth: number;
    reorderIconHeight: number;
    draggedColumn: any;
    draggedRowIndex: number;
    droppedRowIndex: number;
    rowDragging: boolean;
    dropPosition: number;
    editingCell: Element;
    editingCellData: any;
    editingCellField: any;
    editingCellRowIndex: number;
    selfClick: boolean;
    documentEditListener: any;
    preventSelectionSetterPropagation: boolean;
    anchorRowIndex: number | null;
    rangeRowIndex: number;
    filterTimeout: any;
    initialized: boolean;
    rowTouched: boolean;
    restoringSort: boolean;
    restoringFilter: boolean;
    stateRestored: boolean;
    columnOrderStateRestored: boolean;
    columnWidthsState: string;
    tableWidthState: string;
    overlaySubscription: Subscription;
    resizeColumnElement: any;
    columnResizing: boolean;
    rowGroupHeaderStyleObject: any;
    id: string;
    styleElement: any;
    responsiveStyleElement: any;
    dragScrollMouseDown: boolean;
    dragScrollStartX: any;
    dragScrollLeft: any;
    disabledRowList: any[];
    _value: any[];
    _columns: any[];
    _totalRecords: number;
    _pageSize: number;
    _first: number;
    _sortField: string;
    _sortOrder: number;
    _multiSortMeta: CubTableSortMeta[];
    _selection: any;
    _selectAll: boolean | null;
    get processedData(): any;
    get selectionContent(): string;
    get filterContent(): string;
    /** 外觀樣式，預設為 'default'。 */
    appearance: CubTableAppearance;
    /** 元件尺寸，預設為 medium */
    size: CubThemeSize;
    /** 元件的行內樣式，預設為 undefined。 */
    style: any;
    /** 元件的類別樣式，預設為 undefined。 */
    styleClass: string;
    /** 表格區塊的行內樣式，預設為 undefined。 */
    tableStyle: any;
    /** 表格區塊的類別樣式，預設為 undefined。 */
    tableStyleClass: string;
    /** 表格的物件陣列資料，預設為 []。 */
    get value(): any[];
    set value(value: any[]);
    /** 動態欄位的物件陣列資料，預設為 undefined。 */
    get columns(): any[];
    set columns(cols: any[]);
    /** 是否開啟分頁器功能，預設為 false。 */
    paginator: boolean;
    /** 分頁類型：前端分頁 or 後端分頁，當使用 paginator 接口時才使用 */
    paginatorType: 'clientSide' | 'serverSide';
    /** 分頁器顯示總筆數，預設為 0。 */
    /** 僅當 paginatorType 設定為 'serverSide' 時可用。 */
    paginatorTotalRecords: number;
    /** 當總頁數為一頁時是否顯示分頁器，預設為 true。 */
    alwaysShowPaginator: boolean;
    /** 頁數資訊的模板，預設為 '{first} - {last} / {totalRecords}'。 */
    pageRangeTemplate: string;
    /** 跳至指定頁數的模板，預設為 '跳至' */
    jumpToTemplate: string;
    /** 是否顯示頁數資訊，預設為 true。 */
    showPageRange: boolean;
    /** 是否顯示往第一頁與往最後一頁的按鈕，預設為 true。 */
    showFirstLastButton: boolean;
    /** 是否自動計算頁數連結的顯示個數，預設為 true。 */
    pageLinkAutoSize: boolean;
    /** 頁數連結的顯示個數，預設為 5。 */
    pageLinkSize: number;
    /** 總筆數，預設為 0。 */
    get totalRecords(): number;
    set totalRecords(value: number);
    /** 每頁顯示筆數，預設為 10。 */
    get pageSize(): number;
    set pageSize(value: number);
    /** 每頁顯示筆數選項，預設為 [10, 20, 30, 50, 100] */
    pageSizeOptions: any[];
    /** 是否隱藏每頁筆數的下拉選單，預設為 false。 */
    hidePageSize: boolean;
    /** 當前頁數的索引值，預設為 0。 */
    pageIndex: number;
    /** 當前頁數的第一筆資料的索引值，預設為 0。 */
    get first(): number;
    set first(value: number);
    /** 當未排序的欄位透過操作進行排序時所使用的預設排序順序，預設為 1。*/
    defaultSortOrder: number;
    /** 排序模式，針對單一欄位或多欄位進行排序，預設為 'single'。*/
    sortMode: string;
    /** 排序時，是否將分頁器的當前頁數重設為第一頁，預設為 true。 */
    /** 僅當 sortMode 設定為 'single' 時可用。 */
    resetPageOnSort: boolean;
    /** 是否啟用自定義排序，需搭配 sortFunction 使用，預設為 undefined。*/
    customSort: boolean;
    /** 進行排序的欄位名稱，預設為 undefined。*/
    get sortField(): string;
    set sortField(value: string);
    /** 排序順序，1 表示升冪排序，-1 表示降冪排序，預設為 1。*/
    get sortOrder(): number;
    set sortOrder(value: number);
    /** 以多重排序模式對資料進行排序，預設為 undefined。*/
    get multiSortMeta(): CubTableSortMeta[];
    set multiSortMeta(value: CubTableSortMeta[]);
    /** 是否顯示讀取動畫表示資料載入中，預設為 undefined。*/
    loading: boolean;
    /** 是否啟用延遲載入功能，預設為 false。 */
    lazy: boolean;
    /** 是否在元件初始化階段啟用延遲載入功能，預設為 false。 */
    lazyLoadOnInit: boolean;
    /** 表格的響應式排版方式，'scroll' 為卷軸滾動，'stack' 為堆疊顯示，預設為 'scroll'。 */
    /** 當設定為 'stack' 時，使用具有「cub-column-title」的類別樣式元素來顯示欄位標題。 */
    responsiveLayout: string;
    /** 是否啟用捲動功能，預設為 undefined。*/
    scrollable: boolean;
    /** 表格滾動的視窗高度，以固定像素（px）為單位，或用 'flex' 表示動態大小，預設為 undefined。*/
    scrollHeight: string;
    /** 唯一識別用的屬性值，預設為 undefined。僅於「選取」、「資料列展開」、「編輯」功能時可用。*/
    dataKey: string;
    /** 是否只選擇目前頁面的資料列，預設為 true。 */
    /** 僅當 paginatorType 設定為 'clientSide' 時可用。
     * 'clientSide' 模式下預設選取全部資料，將 selectionPageOnly 設定為 true 時改為選取當前頁面資料。
     * 'serverSide' 模式下僅會選取當前頁面資料。 */
    selectionPageOnly: boolean;
    /** 選取項目的模板，預設為 '欄位設定' */
    selectionTemplate: string;
    /** 選取清除按鈕的模板，預設為 '欄位設定' */
    selectionButtonTemplate: string;
    /** 在單選模式下或多選模式下所選擇的資料列，預設為 undefined。 */
    get selection(): any;
    set selection(value: any);
    /** 是否選擇所有資料，預設為 null。*/
    get selectAll(): boolean | null;
    set selectAll(value: boolean | null);
    /** 選取項目的模板，預設為 '欄位設定' */
    filterTemplate: string;
    /** 選取清除按鈕的模板，預設為 '欄位設定' */
    filterButtonTemplate: string;
    /** 是否顯示欄位切換的按鈕，預設為 false。 */
    showColumnToggle: boolean;
    /** 欄位切換按鈕的模板，預設為 '欄位設定' */
    columnToggleButtonTemplate: string;
    /** 資料列展開的顯示模式，有效值為 'single' 與 'multiple'，預設為 'multiple'。 */
    rowExpandMode: string;
    /** 預設展開的資料列鍵值，需搭配 dataKey 使用，預設為 {}。 */
    expandedRowKeys: {
        [s: string]: boolean;
    };
    /** 是否開啟拖曳捲動，預設為 false。 */
    dragToScroll: boolean;
    /** 當頁面第一筆索引值變更時調用的通知事件。 */
    firstChange: EventEmitter<number>;
    /** 當每頁顯示筆數變更時調用的通知事件。 */
    pageSizeChange: EventEmitter<number>;
    /** 當分頁變更時調用的通知事件。 */
    pageChange: EventEmitter<any>;
    /** 實作自訂排序的函式。 */
    sortFunction: EventEmitter<any>;
    /** 當排序變更時調用的通知事件。 */
    sort: EventEmitter<any>;
    /** 在延遲載入模式下，進行分頁、排序或篩選時調用的通知事件。 */
    lazyLoad: EventEmitter<any>;
    /** 當資料全部選取時調用的通知事件。 */
    selectAllChange: EventEmitter<any>;
    /** 當選取內容改變時調用的通知事件。 */
    selectionChange: EventEmitter<any>;
    /** 當 Header Checkbox 狀態改變時調用的通知事件。 */
    headerCheckboxChange: EventEmitter<any>;
    /** 當資料被篩選時調用的通知事件。 */
    filter: EventEmitter<any>;
    columnToggle: EventEmitter<any>;
    /** 當有資料列展開時調用的通知事件。 */
    rowExpand: EventEmitter<any>;
    /** 當有資料列收合時調用的通知事件。 */
    rowCollapse: EventEmitter<any>;
    /** 當調整資料列大小時調用的通知事件。 */
    columnResize: EventEmitter<any>;
    /** 當欄位重新排序時調用的通知事件。 */
    columnReorder: EventEmitter<any>;
    /** 當資料列重新排序時調用的通知事件。 */
    rowReorder: EventEmitter<any>;
    containerViewChild: ElementRef;
    resizeHelperViewChild: ElementRef;
    reorderIndicatorUpViewChild: ElementRef;
    reorderIndicatorDownViewChild: ElementRef;
    wrapperViewChild: ElementRef;
    tableViewChild: ElementRef;
    tableHeaderViewChild: ElementRef;
    tableFooterViewChild: ElementRef;
    scroller: CubScroller;
    previewTableViewChild: ElementRef;
    templates: QueryList<CubTemplate>;
    constructor(elementRef: ElementRef, zone: NgZone, tableService: CubTableService, changeDetectorRef: ChangeDetectorRef, filterService: CubFilterService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(simpleChange: SimpleChanges): void;
    ngOnDestroy(): void;
    rowTrackBy: any;
    dataToRender(data: any): any;
    updateSelectionKeys(): void;
    onPageChange(event: any): void;
    onSort(event: any): void;
    hasFilter(): boolean;
    getBlockableElement(): HTMLElement;
    getStorage(): Storage;
    getGroupRowsMeta(): {
        field: any;
        order: number;
    };
    getSortMeta(field: string): CubTableSortMeta | null;
    isSorted(field: string): boolean | "" | null;
    handleRowClick(event: any): void;
    handleRowTouchEnd(event: any): void;
    handleRowRightClick(event: any): void;
    _filter(): void;
    createLazyLoadMetadata(): any;
    destroyResponsiveStyle(): void;
    destroyStyleElement(): void;
    createStyleElement(): void;
    compareValuesOnSort(value1: any, value2: any, order: any): number;
    executeLocalFilter(field: string, rowData: any, filterMeta: CubTableFilterMetadata): boolean;
    multisortField(data1: any, data2: any, multiSortMeta: any, index: any): any;
    isStateful(): boolean;
    saveState(): void;
    saveColumnWidths(state: any): void;
    saveColumnOrder(state: any): void;
    clearState(): void;
    restoreColumnWidths(): void;
    selectRange(event: MouseEvent, rowIndex: number): void;
    setResizeTableWidth(width: string): void;
    sortSingle(): void;
    sortMultiple(): void;
    restoreColumnOrder(): void;
    findColumnByKey(key: any): any;
    clearSelectionRange(event: MouseEvent): void;
    findIndexInSelection(rowData: any): number;
    equals(data1: any, data2: any): boolean;
    restoreState(): void;
    isRowExpanded(rowData: any): boolean;
    isRowEditing(rowData: any): boolean;
    isSingleSelectionMode(): boolean;
    isMultipleSelectionMode(): boolean;
    isSelected(rowData: any): boolean;
    deleteSelectionWhenCheckboxDisabled(rowData: any): void;
    isRowSelectable(data: any, index: any): boolean;
    toggleRowWithRadio(event: any, rowData: any): void;
    clearSelectionWhenCheckboxDisabled(rowData: any): void;
    toggleRowWithCheckbox(event: any, rowData: any): void;
    toggleRowsWithCheckbox(event: Event, check: boolean): void;
    onFilter(value: any, field: string, matchMode: string): void;
    filterGlobal(value: any, matchMode: any): void;
    isFilterBlank(filter: any): boolean;
    getExportHeader(column: any): any;
    clear(): void;
    reset(): void;
    resetSort(): void;
    resetFilter(): void;
    exportCSV(options?: any): void;
    onLazyItemLoad(event: any): void;
    resetScrollTop(): void;
    scrollToVirtualIndex(index: number): void;
    scrollTo(options: any): void;
    updateEditingCell(cell: any, data: any, field: any, index: any): void;
    isEditingCellValid(): boolean;
    bindDocumentEditListener(): void;
    unbindDocumentEditListener(): void;
    initRowEdit(rowData: any): void;
    saveRowEdit(rowData: any, rowElement: HTMLTableRowElement): void;
    cancelRowEdit(rowData: any): void;
    toggleRow(rowData: any, event?: Event): void;
    onColumnResizeBegin(event: any): void;
    onColumnResize(event: any): void;
    onColumnResizeEnd(): void;
    resizeTableCells(newColumnWidth: any, nextColumnWidth: any): void;
    onColumnDragStart(event: any, columnElement: any): void;
    onColumnDragEnter(event: any, dropHeader: any): void;
    onColumnDragLeave(event: any): void;
    onColumnDrop(event: any, dropColumn: any): void;
    onRowDragStart(event: any, index: any): void;
    onRowDragOver(event: any, index: any, rowElement: any): void;
    onRowDragLeave(event: any, rowElement: any): void;
    onRowDragEnd(event: any): void;
    onRowDrop(event: any, rowElement: any): void;
    isEmpty(): boolean;
    startDraggingScroll(event: any, flag: any, element: any): void;
    stopDraggingScroll(event: any, flag: any): void;
    dragScrollEvent(event: any, element: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTable, "cub-table", never, { "appearance": { "alias": "appearance"; "required": false; }; "size": { "alias": "size"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "tableStyle": { "alias": "tableStyle"; "required": false; }; "tableStyleClass": { "alias": "tableStyleClass"; "required": false; }; "value": { "alias": "value"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "paginator": { "alias": "paginator"; "required": false; }; "paginatorType": { "alias": "paginatorType"; "required": false; }; "paginatorTotalRecords": { "alias": "paginatorTotalRecords"; "required": false; }; "alwaysShowPaginator": { "alias": "alwaysShowPaginator"; "required": false; }; "pageRangeTemplate": { "alias": "pageRangeTemplate"; "required": false; }; "jumpToTemplate": { "alias": "jumpToTemplate"; "required": false; }; "showPageRange": { "alias": "showPageRange"; "required": false; }; "showFirstLastButton": { "alias": "showFirstLastButton"; "required": false; }; "pageLinkAutoSize": { "alias": "pageLinkAutoSize"; "required": false; }; "pageLinkSize": { "alias": "pageLinkSize"; "required": false; }; "totalRecords": { "alias": "totalRecords"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "hidePageSize": { "alias": "hidePageSize"; "required": false; }; "pageIndex": { "alias": "pageIndex"; "required": false; }; "first": { "alias": "first"; "required": false; }; "defaultSortOrder": { "alias": "defaultSortOrder"; "required": false; }; "sortMode": { "alias": "sortMode"; "required": false; }; "resetPageOnSort": { "alias": "resetPageOnSort"; "required": false; }; "customSort": { "alias": "customSort"; "required": false; }; "sortField": { "alias": "sortField"; "required": false; }; "sortOrder": { "alias": "sortOrder"; "required": false; }; "multiSortMeta": { "alias": "multiSortMeta"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "lazyLoadOnInit": { "alias": "lazyLoadOnInit"; "required": false; }; "responsiveLayout": { "alias": "responsiveLayout"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "scrollHeight": { "alias": "scrollHeight"; "required": false; }; "dataKey": { "alias": "dataKey"; "required": false; }; "selectionPageOnly": { "alias": "selectionPageOnly"; "required": false; }; "selectionTemplate": { "alias": "selectionTemplate"; "required": false; }; "selectionButtonTemplate": { "alias": "selectionButtonTemplate"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; "selectAll": { "alias": "selectAll"; "required": false; }; "filterTemplate": { "alias": "filterTemplate"; "required": false; }; "filterButtonTemplate": { "alias": "filterButtonTemplate"; "required": false; }; "showColumnToggle": { "alias": "showColumnToggle"; "required": false; }; "columnToggleButtonTemplate": { "alias": "columnToggleButtonTemplate"; "required": false; }; "rowExpandMode": { "alias": "rowExpandMode"; "required": false; }; "expandedRowKeys": { "alias": "expandedRowKeys"; "required": false; }; "dragToScroll": { "alias": "dragToScroll"; "required": false; }; }, { "firstChange": "firstChange"; "pageSizeChange": "pageSizeChange"; "pageChange": "pageChange"; "sortFunction": "sortFunction"; "sort": "sort"; "lazyLoad": "lazyLoad"; "selectAllChange": "selectAllChange"; "selectionChange": "selectionChange"; "headerCheckboxChange": "headerCheckboxChange"; "filter": "filter"; "columnToggle": "columnToggle"; "rowExpand": "rowExpand"; "rowCollapse": "rowCollapse"; "columnResize": "columnResize"; "columnReorder": "columnReorder"; "rowReorder": "rowReorder"; }, ["templates"], never, true, never>;
}
/** 獨立 Tbody 元件檔案編譯會產生 Cycle Import 錯誤，暫時不獨立檔案 */
declare class CubTableBody implements AfterViewInit, OnChanges, OnDestroy {
    cubTable: CubTable;
    tableService: CubTableService;
    changeDetectorRef: ChangeDetectorRef;
    elementRef: ElementRef;
    subscription: Subscription;
    _value: any[];
    /** 顯示動態欄位的物件陣列資料，預設為 undefined。 */
    columns: any[];
    /** 表格內容區塊的模板，預設為 undefined。 */
    template: TemplateRef<any>;
    /** 表格的物件陣列資料，預設為 undefined。 */
    get value(): any[];
    set value(value: any[]);
    /** 是否啟用欄位凍結功能，預設為 false。 */
    frozen: boolean;
    /** 是否凍結資料列，預設為 false。 */
    frozenRows: boolean;
    /** 滾動器項目設定，預設為 undefined。 */
    scrollerOptions: CubTableScrollerOptions;
    constructor(cubTable: CubTable, tableService: CubTableService, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    shouldRenderRowGroupHeader(value: any, rowData: any, index: any): boolean;
    shouldRenderRowGroupFooter(value: any, rowData: any, index: any): boolean;
    shouldRenderRowspan(value: any, rowData: any, index: any): boolean;
    calculateRowGroupSize(value: any, rowData: any, index: any): number | null;
    updateFrozenRowStickyPosition(): void;
    updateFrozenRowGroupHeaderStickyPosition(): void;
    getScrollerOption(option: any, options?: any): any;
    getRowIndex(rowIndex: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTableBody, "[cubTableBody]", never, { "columns": { "alias": "cubTableBody"; "required": false; }; "template": { "alias": "cubTableBodyTemplate"; "required": false; }; "value": { "alias": "value"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "frozenRows": { "alias": "frozenRows"; "required": false; }; "scrollerOptions": { "alias": "scrollerOptions"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTableSortIcon implements OnInit, OnDestroy {
    cubTable: CubTable;
    changeDetectorRef: ChangeDetectorRef;
    subscription: Subscription;
    sortOrder: number;
    /** 排序的欄位名稱，預設為 undefined。 */
    field: string;
    constructor(cubTable: CubTable, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    updateSortState(): void;
    getMultiSortMetaIndex(): number;
    getBadgeValue(): number;
    isMultiSorted(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableSortIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTableSortIcon, "cub-table-sort-icon", never, { "field": { "alias": "field"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTableFilterIcon implements OnInit, AfterContentInit, OnDestroy {
    cubTable: CubTable;
    elementRef: ElementRef;
    config: TranslationConfig;
    renderer: Renderer2;
    /** 篩選的顯示模式，有效值為 'dropdown'（複合選單） 與 'popover'（彈出面板），預設為 'dropdown'。 */
    display: 'dropdown' | 'popover';
    showAddButton: boolean;
    showClearButton: boolean;
    showApplyButton: boolean;
    matchModeOptions: any[];
    maxConstraints: number;
    filterValue: any[];
    overlaySubscription: Subscription;
    headerTemplateRef: TemplateRef<any>;
    filterTemplateRef: TemplateRef<any>;
    footerTemplateRef: TemplateRef<any>;
    operatorOptions: any[];
    overlayVisible: boolean;
    overlay: HTMLElement;
    scrollHandler: any;
    documentClickListener: any;
    documentResizeListener: any;
    matchModes: any[];
    translationSubscription: Subscription;
    resetSubscription: Subscription;
    selfClick: boolean;
    overlayEventListener: any;
    get fieldConstraints(): CubTableFilterMetadata[] | null;
    get showRemoveIcon(): boolean;
    get isShowAddConstraint(): boolean | null;
    get applyButtonLabel(): string;
    get clearButtonLabel(): string;
    get addRuleButtonLabel(): string;
    get removeRuleButtonLabel(): string;
    get noFilterLabel(): string;
    /** 篩選的欄位名稱，預設為 undefined。 */
    field: string;
    /** 篩選的比對模式，預設為 undefined。 */
    matchMode: string;
    /** 篩選的運算方式，有效值為 'and' 與 'or'，預設為 'or'。 */
    operator: string;
    /** 篩選的欄位類型，有效值為 'text'、'numeric'、'date' 與 'boolean'，預設為 'text'。 */
    type: string;
    /** 篩選的選項清單，預設為 []。 */
    options: CubTableFilterOption[];
    /** 自訂篩選回調函式，用於實作自訂篩選邏輯（如後端篩選），預設為 undefined。 */
    /** 當設定此函式時，將使用自訂邏輯取代預設的 table 篩選功能。 */
    filterCallback?: (value: any[], field: string) => void;
    /** 佔位符，欄位沒有值的提示文字，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    placeholder: string;
    /** 設定小數點後，最小數值長度，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    minFractionDigits: number;
    /** 設定小數點後，最大數值長度，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    maxFractionDigits: number;
    /** 數值的前綴文字，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    prefix: string;
    /** 數值的後綴文字，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    suffix: string;
    /** 顯示的本地語言代碼，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    locale: string;
    /** 語言代碼的匹配算法，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    localeMatcher: string;
    /** 在貨幣格式中使用的貨幣代碼，可參考 ISO 4217 貨幣代碼進行設定，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    currency: string;
    /** 貨幣的顯示格式，有效值為 'symbol'（使用本地的貨幣符號）、'narrowSymbol'（使用窄格式的貨幣符號）、'code'（使用 ISO 貨幣代碼）與 'name'（使用本地的貨幣名稱），預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    currencyDisplay: string;
    /** 是否顯示數值分割符號，預設為 true。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    /** 此為 Intl.NumberFormat() 函式使用的相關參數。 */
    useGrouping: boolean;
    icon: ElementRef;
    templates: QueryList<CubTemplate>;
    constructor(cubTable: CubTable, elementRef: ElementRef, config: TranslationConfig, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    generateMatchModeOptions(): void;
    generateOperatorOptions(): void;
    initFieldFilterConstraint(): void;
    onDropdownChange(value: any[]): void;
    onMenuMatchModeChange(value: any, filterMeta: CubTableFilterMetadata): void;
    onRowMatchModeChange(matchMode: string): void;
    onRowMatchModeKeyDown(event: KeyboardEvent): void;
    onRowClearItemClick(): void;
    isRowMatchModeSelected(matchMode: string): boolean;
    addConstraint(): void;
    removeConstraint(filterMeta: CubTableFilterMetadata): void;
    onOperatorChange(value: any): void;
    toggleMenu(): void;
    onToggleButtonKeyDown(event: KeyboardEvent): void;
    onEscape(): void;
    findNextItem(item: HTMLLIElement): any;
    findPrevItem(item: HTMLLIElement): any;
    onContentClick(): void;
    getDefaultMatchMode(): string;
    getDefaultOperator(): any;
    hasRowFilter(): boolean;
    hasFilter(): boolean;
    isOutsideClicked(event: any): boolean;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    hide(): void;
    clearFilter(): void;
    applyFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableFilterIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTableFilterIcon, "cub-table-filter-icon", never, { "field": { "alias": "field"; "required": false; }; "matchMode": { "alias": "matchMode"; "required": false; }; "operator": { "alias": "operator"; "required": false; }; "type": { "alias": "type"; "required": false; }; "options": { "alias": "options"; "required": false; }; "filterCallback": { "alias": "filterCallback"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "minFractionDigits": { "alias": "minFractionDigits"; "required": false; }; "maxFractionDigits": { "alias": "maxFractionDigits"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "localeMatcher": { "alias": "localeMatcher"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "currencyDisplay": { "alias": "currencyDisplay"; "required": false; }; "useGrouping": { "alias": "useGrouping"; "required": false; }; }, {}, ["templates"], never, true, never>;
}

declare class CubColumnFilterFormElement implements OnInit {
    cubTable: CubTable;
    filterCallback: Function;
    field: string;
    /** 篩選的欄位類型，有效值為 'text'、'numeric'、'date' 與 'boolean'，預設為 undefined。 */
    type: string;
    /** 篩選內容的詳細資料物件，包括欄位與篩選方法，預設為 undefined。 */
    filterConstraint: any;
    filterTemplateRef: TemplateRef<any>;
    /** 佔位符，欄位沒有值的提示文字，預設為 undefined。 */
    placeholder: string;
    /** 小數點最小位數，可能值為 0 到 20，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    minFractionDigits: number;
    /** 小數點最大位數，可能值為 0 到 20，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    maxFractionDigits: number;
    /** 數值的前綴文字，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    prefix: string;
    /** 數值的後綴文字，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    suffix: string;
    /** 顯示的本地語言代碼，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    locale: string;
    /** 語言代碼的匹配算法，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    localeMatcher: string;
    /** 在貨幣格式中使用的貨幣代碼，可參考 ISO 4217 貨幣代碼進行設定，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    currency: string;
    /** 貨幣的顯示格式，有效值為 'symbol'、'narrowSymbol'、'code' 與 'name'，預設為 undefined。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    currencyDisplay: string;
    /** 是否顯示數值分割符號，預設為 true。 */
    /** 僅當 type 設定為 'numeric' 時可用。 */
    useGrouping: boolean;
    constructor(cubTable: CubTable);
    ngOnInit(): void;
    onModelChange(value: any): void;
    onTextInputEnterKeyDown(event: KeyboardEvent): void;
    onNumericInputKeyDown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubColumnFilterFormElement, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubColumnFilterFormElement, "cub-column-filter-form-element", never, { "field": { "alias": "field"; "required": false; }; "type": { "alias": "type"; "required": false; }; "filterConstraint": { "alias": "filterConstraint"; "required": false; }; "filterTemplateRef": { "alias": "filterTemplateRef"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "minFractionDigits": { "alias": "minFractionDigits"; "required": false; }; "maxFractionDigits": { "alias": "maxFractionDigits"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "localeMatcher": { "alias": "localeMatcher"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "currencyDisplay": { "alias": "currencyDisplay"; "required": false; }; "useGrouping": { "alias": "useGrouping"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTableRadio implements OnInit, OnDestroy {
    cubTable: CubTable;
    tableService: CubTableService;
    changeDetectorRef: ChangeDetectorRef;
    private elementRef;
    private renderer;
    checked: boolean;
    subscription: Subscription;
    /** 元件是否禁用，預設為 undefined。 */
    disabled: boolean;
    /** 元件的當前值，預設為 undefined。 */
    value: any;
    /** 元件的索引值，預設為 undefined。 */
    index: number;
    /** 元件的輸入框唯一識別符，預設為 undefined。 */
    inputId: string;
    /** 元件名稱，用於表單提交，預設為 undefined。 */
    name: string;
    /** 元件標題（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaLabel: string;
    constructor(cubTable: CubTable, tableService: CubTableService, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    updateTrSelectedState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTableRadio, "cub-table-radio", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "index": { "alias": "index"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTableCheckbox implements OnInit, OnDestroy {
    cubTable: CubTable;
    tableService: CubTableService;
    changeDetectorRef: ChangeDetectorRef;
    private elementRef;
    private renderer;
    checked: boolean;
    subscription: Subscription;
    /** 元件是否禁用，預設為 undefined。 */
    disabled: boolean;
    /** 元件的當前值，預設為 undefined。 */
    value: any;
    /** 元件的索引值，預設為 undefined。 */
    index: number;
    /** 元件的輸入框唯一識別符，預設為 undefined。 */
    inputId: string;
    /** 元件名稱，用於表單提交，預設為 undefined。 */
    name: string;
    /** 元件是否為必填，預設為 undefined。 */
    required: boolean;
    /** 元件標題（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaLabel: string;
    constructor(cubTable: CubTable, tableService: CubTableService, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    updateTrSelectedState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTableCheckbox, "cub-table-checkbox", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "index": { "alias": "index"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTableHeaderCheckbox implements OnInit, OnDestroy {
    cubTable: CubTable;
    tableService: CubTableService;
    changeDetectorRef: ChangeDetectorRef;
    checked: boolean;
    indeterminate: boolean;
    selectionChangeSubscription: Subscription;
    valueChangeSubscription: Subscription;
    /** 元件是否禁用，預設為 undefined。 */
    disabled: boolean;
    /** 元件的輸入框唯一識別符，預設為 undefined。 */
    inputId: string;
    /** 元件名稱，用於表單提交，預設為 undefined。 */
    name: string;
    /** 元件標題（螢幕閱讀器讀取用），預設為 undefined。 */
    ariaLabel: string;
    constructor(cubTable: CubTable, tableService: CubTableService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    isDisabled(): boolean;
    updateCheckedState(): boolean;
    updateIndeterminateState(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableHeaderCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CubTableHeaderCheckbox, "cub-table-header-checkbox", never, { "disabled": { "alias": "disabled"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubRowGroupHeader {
    cubTable: CubTable;
    get getFrozenRowGroupHeaderStickyPosition(): any;
    constructor(cubTable: CubTable);
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRowGroupHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubRowGroupHeader, "[cubRowGroupHeader]", never, {}, {}, never, never, true, never>;
}

declare class CubFrozenColumn implements AfterViewInit, OnDestroy {
    private _renderer;
    private elementRef;
    private cubTable;
    _frozen: boolean;
    afterViewInitFlag: boolean;
    borderFixing: boolean;
    /** 是否固定欄位，預設為 true。 */
    get frozen(): boolean;
    set frozen(val: boolean);
    /** 固定欄位的位置，有效值為 'left' 與 'right'，預設為 'left'。 */
    alignFrozen: string;
    constructor(_renderer: Renderer2, elementRef: ElementRef, cubTable: CubTable);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _resizeCallback(entry: any): void;
    updateStickyPosition(): void;
    getAllNextElementSiblingWidth(element: any): any[] | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubFrozenColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubFrozenColumn, "[cubFrozenColumn]", never, { "frozen": { "alias": "frozen"; "required": false; }; "alignFrozen": { "alias": "alignFrozen"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubSortableColumn implements OnInit, OnDestroy {
    cubTable: CubTable;
    sorted: any;
    sortOrder: string;
    subscription: Subscription;
    /** 排序的欄位名稱，預設為 undefined。 */
    field: string;
    /** 是否禁用欄位排序功能，預設為 undefined。 */
    disabled: boolean;
    onClick(event: MouseEvent): void;
    onEnterKey(event: MouseEvent): void;
    constructor(cubTable: CubTable);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateSortState(): void;
    isEnabled(): boolean;
    isFilterElement(element: HTMLElement): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSortableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSortableColumn, "[cubSortableColumn]", never, { "field": { "alias": "cubSortableColumn"; "required": false; }; "disabled": { "alias": "cubSortableColumnDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubSelectableRow implements OnInit, OnDestroy {
    cubTable: CubTable;
    tableService: CubTableService;
    selected: boolean;
    subscription: Subscription;
    /** 資料列的數據值，預設為 undefined。 */
    data: any;
    /** 資料列的索引值，預設為 undefined。 */
    index: number;
    /** 是否禁用選取資料列，預設為 undefined。 */
    disabled: boolean;
    onClick(event: Event): void;
    onTouchEnd(event: Event): void;
    onArrowDownKeyDown(event: KeyboardEvent): void;
    onArrowUpKeyDown(event: KeyboardEvent): void;
    onEnterKeyDown(event: KeyboardEvent): void;
    onPageDownKeyDown(): void;
    onSpaceKeydown(): void;
    constructor(cubTable: CubTable, tableService: CubTableService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    findNextSelectableRow(row: HTMLTableRowElement): HTMLTableRowElement | null;
    findPrevSelectableRow(row: HTMLTableRowElement): HTMLTableRowElement | null;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSelectableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSelectableRow, "[cubSelectableRow]", never, { "data": { "alias": "cubSelectableRow"; "required": false; }; "index": { "alias": "cubSelectableRowIndex"; "required": false; }; "disabled": { "alias": "cubSelectableRowDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubSelectableRowDoubleClick implements OnInit, OnDestroy {
    cubTable: CubTable;
    tableService: CubTableService;
    selected: boolean;
    subscription: Subscription;
    /** 資料列的數據值，預設為 undefined。 */
    data: any;
    /** 資料列的索引值，預設為 undefined。 */
    index: number;
    /** 是否禁用連續點擊來選取資料列，預設為 undefined。 */
    disabled: boolean;
    onClick(event: Event): void;
    constructor(cubTable: CubTable, tableService: CubTableService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubSelectableRowDoubleClick, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubSelectableRowDoubleClick, "[cubSelectableRowDoubleClick]", never, { "data": { "alias": "cubSelectableRowDblClick"; "required": false; }; "index": { "alias": "cubSelectableRowIndex"; "required": false; }; "disabled": { "alias": "cubSelectableRowDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubRowToggler implements AfterViewInit {
    cubTable: CubTable;
    private elementRef;
    private renderer;
    /** 資料列的數據值，預設為 undefined。 */
    data: any;
    /** 是否展開資料列的擴充內容，預設為 undefined。 */
    expanded: boolean;
    /** 是否禁用資料列的擴充內容顯示切換，預設為 undefined。 */
    disabled: boolean;
    constructor(cubTable: CubTable, elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    toggleRow(event: Event): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubRowToggler, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubRowToggler, "[cubRowToggler]", never, { "data": { "alias": "cubRowToggler"; "required": false; }; "expanded": { "alias": "cubRowTogglerExpanded"; "required": false; }; "disabled": { "alias": "cubRowTogglerDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubResizableColumn implements AfterViewInit, OnDestroy {
    cubTable: CubTable;
    elementRef: ElementRef;
    zone: NgZone;
    resizer: HTMLSpanElement;
    resizerMouseDownListener: any;
    documentMouseMoveListener: any;
    documentMouseUpListener: any;
    /** 是否禁用拖曳直欄來調整欄位大小，預設為 undefined。 */
    disabled: boolean;
    constructor(cubTable: CubTable, elementRef: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    bindDocumentEvents(): void;
    unbindDocumentEvents(): void;
    onMouseDown(event: MouseEvent): void;
    onDocumentMouseMove(event: MouseEvent): void;
    onDocumentMouseUp(event: MouseEvent): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubResizableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubResizableColumn, "[cubResizableColumn]", never, { "disabled": { "alias": "cubResizableColumnDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubReorderableColumn implements AfterViewInit, OnDestroy {
    cubTable: CubTable;
    elementRef: ElementRef;
    zone: NgZone;
    dragStartListener: any;
    dragOverListener: any;
    dragEnterListener: any;
    dragLeaveListener: any;
    mouseDownListener: any;
    /** 是否禁用拖曳直欄進行重新排序，預設為 undefined。 */
    disabled: boolean;
    onDrop(event: any): void;
    constructor(cubTable: CubTable, elementRef: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    bindEvents(): void;
    unbindEvents(): void;
    onMouseDown(event: any): void;
    onDragStart(event: any): void;
    onDragOver(event: any): void;
    onDragEnter(event: any): void;
    onDragLeave(event: any): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubReorderableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubReorderableColumn, "[cubReorderableColumn]", never, { "disabled": { "alias": "cubReorderableColumnDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubDraggableRowHandle {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CubDraggableRowHandle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubDraggableRowHandle, "[cubDraggableRowHandle]", never, {}, {}, never, never, true, never>;
}

declare class CubDraggableRow implements AfterViewInit, OnDestroy {
    cubTable: CubTable;
    elementRef: ElementRef;
    zone: NgZone;
    mouseDownListener: any;
    dragStartListener: any;
    dragEndListener: any;
    dragOverListener: any;
    dragLeaveListener: any;
    dropListener: any;
    /** 資料列的索引值，預設為 undefined。 */
    index: number;
    /** 是否禁用拖曳橫列進行重新排序，預設為 undefined。 */
    disabled: boolean;
    onDrop(event: any): void;
    constructor(cubTable: CubTable, elementRef: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    bindEvents(): void;
    unbindEvents(): void;
    onMouseDown(event: any): void;
    onDragStart(event: any): void;
    onDragEnd(event: any): void;
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubDraggableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubDraggableRow, "[cubDraggableRow]", never, { "index": { "alias": "cubDraggableRow"; "required": false; }; "disabled": { "alias": "cubDraggableRowDisabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class CubTableFrozenFixer implements AfterViewInit, OnDestroy {
    private elementRef;
    private _renderer;
    cubTable: CubTable;
    targetTable: any;
    subscription: Subscription;
    constructor(elementRef: ElementRef, _renderer: Renderer2, cubTable: CubTable);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    fixTheadAlignLeft(theadList: any): void;
    fixTbodyAlignLeft(tbodyList: any): void;
    createTrListOnlyLeftFrozenTh(theadList: any): any[];
    createTrListOnlyLeftFrozenTd(tbodyList: any): any[];
    fixTheadAlignRight(theadList: any): void;
    fixTbodyAlignRight(tbodyList: any): void;
    createTrListOnlyRightFrozenTh(theadList: any): any[];
    createTrListOnlyRightFrozenTd(tbodyList: any): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableFrozenFixer, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CubTableFrozenFixer, "[cubTableFrozenFixer]", never, {}, {}, never, never, true, never>;
}

declare class FilterOperator {
    static readonly AND = "and";
    static readonly OR = "or";
}

declare class CubTableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CubTableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CubTableModule, never, [typeof i1.CubCommonModule, typeof CubTable, typeof CubTableBody, typeof CubTableSortIcon, typeof CubTableFilterIcon, typeof CubColumnFilterFormElement, typeof CubScroller, typeof CubTableRadio, typeof CubTableCheckbox, typeof CubTableHeaderCheckbox, typeof CubRowGroupHeader, typeof CubFrozenColumn, typeof CubSortableColumn, typeof CubSelectableRow, typeof CubSelectableRowDoubleClick, typeof CubRowToggler, typeof CubResizableColumn, typeof CubReorderableColumn, typeof CubDraggableRow, typeof CubDraggableRowHandle, typeof CubTableFrozenFixer], [typeof i1.CubCommonModule, typeof CubTable, typeof CubTableBody, typeof CubTableSortIcon, typeof CubTableFilterIcon, typeof CubColumnFilterFormElement, typeof CubScroller, typeof CubTableRadio, typeof CubTableCheckbox, typeof CubTableHeaderCheckbox, typeof CubRowGroupHeader, typeof CubFrozenColumn, typeof CubSortableColumn, typeof CubSelectableRow, typeof CubSelectableRowDoubleClick, typeof CubRowToggler, typeof CubResizableColumn, typeof CubReorderableColumn, typeof CubDraggableRow, typeof CubDraggableRowHandle, typeof CubTableFrozenFixer]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CubTableModule>;
}

export { CubColumnFilterFormElement, CubDraggableRow, CubDraggableRowHandle, CubFrozenColumn, CubReorderableColumn, CubResizableColumn, CubRowGroupHeader, CubRowToggler, CubScroller, CubSelectableRow, CubSelectableRowDoubleClick, CubSortableColumn, CubTable, CubTableBody, CubTableCheckbox, CubTableFilterIcon, CubTableFrozenFixer, CubTableHeaderCheckbox, CubTableModule, CubTableRadio, CubTableService, CubTableSortIcon, FilterOperator };
export type { CubTableAppearance, CubTableBlockableUI, CubTableFilterMetadata, CubTableFilterOption, CubTableScrollerOptions, CubTableScrollerOrientationType, CubTableScrollerToType, CubTableSortMeta, CubTableState };
