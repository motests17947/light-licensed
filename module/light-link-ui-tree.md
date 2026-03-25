# light-link 畫面 Cub 元件樹狀結構

```
/
└─ MainLayout
    ├─ /todo
    │   └─ AppTodoPage
    │       └─ CubTabGroup
    │           ├─ CubTab「案件追蹤」
    │           │   └─ AppCaseTracking
    │           │       └─ CubTable
    │           │           ├─ cubTemplate(header/body/emptymessage)
    │           │           └─ CubButton（表格內按鈕）
    │           └─ CubTab「代辦事項」
    │               └─ AppTodoList
    ├─ /search
    │   └─ AppSearchPage
    │       └─ CubTabGroup
    │           ├─ CubTab「全部」
    │           └─ CubTab「生效中」
    ├─ /create
    │   └─ AppCreatePage
    │       ├─ Step1
    │       │   ├─ CubCard（申請資料）
    │       │   │   └─ CubLabel
    │       │   └─ CubCard（連線內容）
    │       │       └─ CubFormField
    │       │           ├─ CubLabel
    │       │           ├─ CubSelect
    │       │           │   └─ CubOption
    │       │           ├─ CubInput
    │       │           ├─ CubRadioGroup
    │       │           │   └─ CubRadio
    │       │           └─ CubButton
    │       ├─ Step2
    │       │   └─ CubCard
    │       │       └─ CubStepper
    │       │           └─ CubStep
    │       │               └─ CubInput (textarea)
    │       │           └─ CubButton
    │       └─ Step3
    │           ├─ CubCard（連線內容/申請資料）
    │           └─ CubCard（傳遞流程）
    │               └─ CubStepper
    │                   └─ CubStep
    │                       └─ CubInput (textarea)
    └─ /switch
        └─ AppSwitchPage
            └─ CubCard
                └─ CubSelect
                    └─ CubOption
```
