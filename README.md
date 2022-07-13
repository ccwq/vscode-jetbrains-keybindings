# INSTALL
``ext install ccwq.window-webstorm-keybindins``

# ABOUT

The purpose of this plugin is twofold

1. Habits used in code / Habits of webstorm software

2. Get used to using windows on the Mac version

Base on [isudox/vscode-jetbrains-keybindings](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings)

Thanks!

---
该插件的目的有两个

1. 在vscode中使用idea/webstorm系软件的快捷键习惯

2. 在mac上使用windows版本按键的习惯

# 内容
<!-- generate-start-->
|  <div style="width:60px">按键</div>  | 命令  | 描述  | 条件 |
| ---- | ------- | ------- | ---- |
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> a|workbench.action.showCommands|Find Action|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> tab|workbench.action.quickOpenNavigateNext|Switch between tabs and tool window|inQuickOpen|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> n|workbench.action.quickOpen|Go to file|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f4|workbench.action.closeActiveEditor|Close active editor tab|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> s|workbench.action.openGlobalSettings|Open Settings dialog|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> a|editor.action.selectAll|Cut current line to clipboard|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> x|editor.action.clipboardCutAction|Cut current line to clipboard|!terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> c|editor.action.clipboardCopyAction|Copy current line to clipboard|!terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> v|editor.action.clipboardPasteAction|Paste|!terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> d|editor.action.copyLinesDownAction|Duplicate Line or Selection|editorTextFocus && !editorReadonly|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> delete|editor.action.clipboardCutAction|Delete Line|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> enter|lineBreakInsert|Smart line split|editorTextFocus && !editorReadonly|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> up|editor.action.moveLinesUpAction|Move Line Up|editorTextFocus && !editorReadonly|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> down|editor.action.moveLinesDownAction|Move Line Down|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> y|editor.action.deleteLines|Delete line at caret|editorTextFocus && !editorReadonly|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> enter|editor.action.insertLineAfter|Start New Line|editorTextFocus && !editorReadonly|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> cmd<span style="color:#ff989c;padding:0 0.125em">+</span> enter|editor.action.insertLineBefore|Start New Line Before current|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> -|editor.fold|Collapse|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> s|workbench.action.files.saveAll|Save all|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> =|editor.unfold|Expand|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> y|workbench.action.sync|Synchronize|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> -|editor.foldAll|Collapse All|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad_subtract|editor.foldAll|Collapse all|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> =|editor.unfoldAll|Expand All|editorFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> a|editor.action.blockComment|undefined|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> /|editor.action.commentLine|Comment with Line Comment|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad_divide|editor.action.commentLine|Comment with Line Comment|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> /|editor.action.blockComment|Comment With Block Comment|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad_divide|editor.action.blockComment|Comment With Block Comment|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> j|editor.action.selectHighlights|Select All Occurrences|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> w|editor.action.smartSelect.grow|Extend Selection|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> w|editor.action.smartSelect.shrink|Shrink Selection|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f|actions.find|Find|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f|workbench.view.search|Find in Path...|!searchViewletVisible|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> r|editor.action.startFindReplaceAction|Replace|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> r|workbench.action.replaceInFiles|Replace in path|-|
|f3|editor.action.nextMatchFindAction|Find Next|editorFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f3|editor.action.previousMatchFindAction|Find Previous|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> j|editor.action.selectAllMatches|Select Next Occurrences|editorFocus && findWidgetVisible|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> j|cursorUndo|Unselect Occurrence|editorTextFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> j|editor.action.addSelectionToNextFindMatch|Add Selection for Next Occurrence|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> /|editor.action.triggerSuggest|undefined|editorHasCompletionItemProvider && editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> space|editor.action.triggerSuggest|Basic Code Completion|editorHasCompletionItemProvider && editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> p|editor.action.triggerParameterHints|Parameter info (within method call arguments)|editorHasSignatureHelpProvider && editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> l|editor.action.formatDocument|Reformat Code|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> l|editor.action.formatDocument|Reformat code|editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> l|editor.action.formatSelection|Reformat selected code|editorHasDocumentFormattingProvider && editorHasSelection && editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> b|editor.action.goToDeclaration|Go to Declaration|editorHasDefinitionProvider && editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> b|editor.action.goToImplementation|Go to Implementation(s)|editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> i|editor.action.previewDeclaration|Open Quick Definition Lookup|editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> enter|editor.action.quickFix|Show intention actions and quick-fixes|editorHasCodeActionsProvider && editorTextFocus && !editorReadonly|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f7|editor.action.referenceSearch.trigger|Find Usages|editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f9|workbench.action.tasks.build|Build Project|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f10|workbench.action.tasks.runTask|Select Configuration and Run|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f9|workbench.view.debug|Select Configuration and Debug|-|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f9|workbench.action.debug.run|Debug|!inDebugMode && !terminalFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f6|editor.action.rename|Rename Symbol|editorHasRenameProvider && editorTextFocus && !editorReadonly|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f6|renameFile|Rename File|explorerViewletVisible && filesExplorerFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> n|workbench.action.showAllSymbols|Go to Symbol|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> g|workbench.action.gotoLine|Go to Line|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> n|workbench.action.quickOpen|Go to File|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> j|editor.action.joinLines|Smart line join|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> e|workbench.action.openRecent|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> z|undo|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> z|redo|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> backspace|editsHistory.moveCursorToPreviousEdit|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> al<span style="color:#ff989c;padding:0 0.125em">+</span> backspace|editsHistory.moveCursorToNextEdit|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \|editor.action.jumpToBracket|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> k|git.pullFrom|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f12|workbench.action.gotoSymbol|File Structure Popup|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> n|workbench.action.showAllSymbols|Go to Symbol|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> left|workbench.action.previousEditor|Go to previous editor tab|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> right|workbench.action.nextEditor|Go to next editor tab|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> left|workbench.action.terminal.focusPrevious|Select previous tab (Terminal)|terminalFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> up|workbench.action.terminal.focusPrevious|Select previous tab (Terminal)|terminalFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> right|workbench.action.terminal.focusNext|Select next tab (Terminal)|terminalFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> down|workbench.action.terminal.focusNext|Select next tab (Terminal)|terminalFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> escape|workbench.actions.view.problems|Hide active or last active window (Problems)|problemFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> escape|workbench.action.toggleSidebarVisibility|Hide active or last active window (Sidebar)|!editorFocus && !terminalFocus && !problemFocus && !inDebugRepl|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f12|workbench.action.terminal.focus|Opens and focuses corresponding tool window (Terminal)|!terminalFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f12|workbench.action.terminal.toggleTerminal|Close corresponding tool window (Terminal)|terminalFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> escape|workbench.action.terminal.toggleTerminal|Hide active or last active window (Terminal)|terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> left|workbench.action.navigateBack|Navigate Back|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> right|workbench.action.navigateForward|Navigate Forward|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f4|workbench.action.closeActiveEditor|Close Active Editor Tab|-|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> tab|workbench.action.focusPreviousGroup|Goto previous splitter|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> tab|workbench.action.focusNextGroup|Goto next splitter|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> insert|workbench.action.files.newUntitledFile|Generate code...|!editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f8|editor.debug.action.toggleBreakpoint|Toggle Breakpoint|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f8|workbench.view.debug|View breakpoints|-|
|f9|workbench.action.debug.continue|Resume Program|inDebugMode|
|f7|workbench.action.debug.stepInto|Step Into|inDebugMode|
|f7|workbench.action.compareEditor.nextChange|Next difference|textCompareEditorVisible|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f7|workbench.action.compareEditor.previousChange|Previous difference|textCompareEditorVisible|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f8|workbench.action.debug.stepOut|Step Out|inDebugMode|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f8|workbench.debug.action.toggleRepl|Evaluate Expression...|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f8|editor.debug.action.selectionToRepl|Evaluate expression (selection)|editorTextFocus && editorHasSelection|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f9|editor.debug.action.runToCursor|Run to Cursor|inDebugMode|
|f9|workbench.action.debug.continue|Resume program|inDebugMode|
|f8|workbench.action.debug.stepOver|Step Over|inDebugMode|
|cmd<span style="color:#ff989c;padding:0 0.125em">+</span> f2|workbench.action.debug.stop|undefined|inDebugMode|
|cmd<span style="color:#ff989c;padding:0 0.125em">+</span> k&nbsp;&nbsp;&nbsp;cmd<span style="color:#ff989c;padding:0 0.125em">+</span> i|editor.debug.action.showDebugHover|undefined|editorTextFocus && inDebugMode|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> q|editor.action.showHover|Quick Documentation|editorTextFocus|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> escape|workbench.action.terminal.toggleTerminal|Hide Active or last Active indow (Terminal)|-|
|cmd<span style="color:#ff989c;padding:0 0.125em">+</span> c|workbench.action.terminal.copySelection|undefined|terminalFocus && terminalTextSelected|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> enter|acceptSelectedSuggestion|Complete Current Statement|editorFocus && suggestWidgetVisible|
|<span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> enter|editor.action.insertLineAfter|Start new line|editorTextFocus && !editorReadonly && !suggestWidgetVisible|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> f1|workbench.action.showErrorsWarnings|Error Description|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> backspace|deleteWordLeft|Delete to word start|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> delete|deleteWordRight|Delete to word end|editorTextFocus && !editorReadonly|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad_add|editor.unfold|Expand code block|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> -|editor.fold|Collapse code block|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad_subtract|editor.fold|Collapse code block|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad_add|editor.unfoldAll|Expand All|editorFocus|
|f2|-editor.action.rename|undefined|editorHasRenameProvider && editorTextFocus && !editorReadonly|
|f4|editor.action.goToDeclaration|Edit source|editorHasDefinitionProvider && editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> up|editor.action.dirtydiff.previous|Previous Change|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> down|editor.action.dirtydiff.next|Next Change|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> k&nbsp;&nbsp;&nbsp;<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> k|git.commitAll|Commit to V|!inDebugMode && !terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> k|git.pushTo|Push to VCS|!inDebugMode && !terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> k|git.sync|Update Project from VCS和远程仓库同步|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> m|editor.action.codeAction|Extract Method|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> v|editor.action.codeAction|Extract Variable|editorTextFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> t|editor.action.refactor|Refactor this (selected expressions or statements)|editorHasCodeActionsProvider && editorTextFocus && !editorReadonly|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad0|workbench.actions.view.problems|Activate Messages window (Problems)|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad1|workbench.view.explorer|Open corresponding tool window (Explorer)|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad0|workbench.actions.view.problems|Activate Messages window (Problems)|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad3|workbench.view.search|Open corresponding tool window (Search)|-|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad5|workbench.view.debug|Open corresponding tool window (Debug)|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad5|workbench.action.toggleSidebarVisibility|Close corresponding tool window (Debug)|!editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> 9|workbench.view.scm|Open corresponding tool window (Git)|editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> 9|workbench.action.toggleSidebarVisibility|Close corresponding tool window (Git)|!editorFocus|
|<span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> numpad9|workbench.view.git|Open corresponding tool window (Git)|editorFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> f|workbench.action.toggleFullScreen|Toggle full screen mode|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> s|workbench.action.openGlobalSettings|Open Preferences...|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`|workbench.action.terminal.toggleTerminal|Opens and focuses corresponding tool window (Terminal)|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;g|workbench.view.scm|显示git|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;escape|workbench.action.terminal.kill|停止当前的终端实例·|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;\`|npm-script.run|限制可执行的npm scrips|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;e|workbench.view.explorer|显示文件管理|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;x|workbench.view.extensions|切换到扩展|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> \`&nbsp;&nbsp;&nbsp;d|workbench.view.debug|debug|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> s|workbench.action.openGlobalSettings|Open Settings dialog|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#9fade5>alt</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> s|workbench.action.tasks.configureTaskRunner|Open Project Structure dialog|-|
|enter|list.select|Open Highlighted File (Explorer)|explorerViewletVisible && filesExplorerFocus && !explorerResourceIsFolder|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> f12|workbench.action.maximizeEditor|undefined|-|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> right|cursorWordEndRight|undefined|!terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> right|cursorWordEndRightSelect|undefined|!terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> left|cursorWordLeft|undefined|!terminalFocus|
|<span style=color:#74ebd6>ctrl</span><span style="color:#ff989c;padding:0 0.125em">+</span> <span style=color:#8ccbde>shift</span><span style="color:#ff989c;padding:0 0.125em">+</span> left|cursorWordLeftSelect|undefined|-|
<!-- generate-end -->
