<h1 align="center">Playwright Studio 🎭</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=sumanthtps.playwright-test-code-snippets"><img src="https://img.shields.io/visual-studio-marketplace/v/sumanthtps.playwright-test-code-snippets?label=version&color=blue" alt="Version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=sumanthtps.playwright-test-code-snippets"><img src="https://img.shields.io/visual-studio-marketplace/i/sumanthtps.playwright-test-code-snippets?label=installs&color=brightgreen" alt="Installs"></a>
  <a href="https://github.com/sumanthtps/New-Playwright-snippets/actions"><img src="https://github.com/sumanthtps/New-Playwright-snippets/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/sumanthtps/New-Playwright-snippets/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgray.svg" alt="License"></a>
</p>

<p align="center">
  <strong>338 Playwright snippets</strong> + <strong>integrated test runner</strong> with CodeLens Run / Debug / Inspect buttons, Codegen, Trace Viewer, and HTML Report — all inside VS Code.
</p>

> Supports **TypeScript**, **JavaScript**, **TSX**, and **JSX**.

---

## Features

### 1. CodeLens Test Runner

Inline buttons appear above every `test()` and `describe()` block in your spec files — no configuration needed.

```
▶ Run All   ⬡ Debug All   ⬡ Inspect        ← top of file
▶ Run   ⬡ Debug   ⬡ Inspect               ← each test()
▶ Run Suite   ⬡ Debug Suite               ← each describe()
```

| Button | What it does |
|---|---|
| **▶ Run** | Runs the test in the integrated terminal |
| **⬡ Debug** | Launches VS Code debugger with Playwright debug mode |
| **⬡ Inspect** | Opens Playwright Inspector (`PWDEBUG=1`) |

### 2. Commands

All commands are available via `Ctrl+Shift+P`:

| Command | Description |
|---|---|
| `Playwright: Run Test` | Run a specific test |
| `Playwright: Run All Tests in File` | Run every test in the active file |
| `Playwright: Debug Test` | Debug a specific test |
| `Playwright: Debug All Tests in File` | Debug all tests in the active file |
| `Playwright: Inspect Test` | Open Playwright Inspector for a test |
| `Playwright: Run Test at Cursor` | Run the test nearest to the cursor |
| `Playwright: Open Codegen` | Launch `playwright codegen` with an optional URL |
| `Playwright: Show Trace Viewer` | Pick a `.zip` trace file and open the viewer |
| `Playwright: Show HTML Report` | Run `playwright show-report` |

Right-click in the **editor** for `Run Test at Cursor` and `Open Codegen`.
Right-click a file in the **Explorer** for `Run All Tests in File` and `Debug All Tests in File`.

### 3. Snippets

338 snippets covering the full Playwright 1.58 API. Type any prefix (e.g. `p-`) in a `.ts`, `.js`, `.tsx`, or `.jsx` file and press `Tab`.

---

## Requirements

- Visual Studio Code 1.80.0 or higher
- Playwright installed in your project (`npm i -D @playwright/test`)

---

## Installation

1. Open VS Code → **Extensions** (`Ctrl+Shift+X`)
2. Search for **"Playwright Studio"**
3. Click **Install**

Or via command line:

```bash
code --install-extension sumanthtps.playwright-test-code-snippets
```

---

## Configuration

All settings are under `playwrightSnippets.*` in VS Code settings:

| Setting | Default | Description |
|---|---|---|
| `playwrightSnippets.workingDirectory` | `""` | Working directory for tests (relative to workspace root). Defaults to workspace root. |
| `playwrightSnippets.testCommand` | `"npx playwright test"` | Base command used to run tests. |
| `playwrightSnippets.reporter` | `""` | Reporter to use (e.g. `list`, `dot`, `html`). Leave empty to use `playwright.config.ts` default. |
| `playwrightSnippets.env` | `{}` | Extra environment variables passed to every test run. |

**Example `.vscode/settings.json`:**

```json
{
  "playwrightSnippets.workingDirectory": "e2e",
  "playwrightSnippets.testCommand": "npx playwright test",
  "playwrightSnippets.reporter": "list",
  "playwrightSnippets.env": {
    "BASE_URL": "https://staging.example.com"
  }
}
```

---

## Snippets Reference

### Prefix Families

| Prefix | Category |
|---|---|
| `p-import` | Imports |
| `p-t*` | Test structure |
| `p-b-*` | Browser |
| `p-bc-*` | BrowserContext |
| `p-loc-*` | Locator |
| `p-get-*` | Locator getBy |
| `p-e-*` / `p-et*` | Assertions |
| `p-wf*` | Wait actions |
| `p-on-*` | Page events |
| `p-route-*` | Network routing |
| `p-clock-*` | Clock / time |
| `p-trace-*` | Tracing |
| `p-video-*` | Video recording |
| `p-api-*` | API requests |
| `p-net-*` | Network inspection |
| `p-ws-*` | WebSocket |
| `p-download-*` | Downloads |

---

### Imports

| Prefix | Description |
|---|---|
| `p-import` | `import { test, expect }` |
| `p-import-api` | `import { test, expect, request }` |
| `p-i-pw` | `require('playwright')` |
| `p-i-chromium` | `require` Chromium |
| `p-i-firefox` | `require` Firefox |
| `p-i-webkit` | `require` WebKit |
| `p-i-devices` | `require` devices |

---

### Test Structure

| Prefix | Description |
|---|---|
| `p-td` | `test.describe()` |
| `p-t` | `test()` |
| `p-ts` | `test.step()` |
| `p-ts-timeout` | `test.step()` with timeout (v1.50+) |
| `p-ts-skip` | `test.step.skip()` (v1.50+) |
| `p-tbe` | `test.beforeEach()` |
| `p-tae` | `test.afterEach()` |
| `p-tba` | `test.beforeAll()` |
| `p-taa` | `test.afterAll()` |
| `p-tuse` | `test.use()` |
| `p-tonly` | `test.only()` |
| `p-tskip` | `test.skip()` |
| `p-tskipc` | `test.skip()` conditional |
| `p-tfail` | `test.fail()` |
| `p-tfail-only` | `test.fail.only()` (v1.49+) |
| `p-tfixme` | `test.fixme()` |
| `p-tslow` | `test.slow()` |
| `p-t-timeout` | `test.setTimeout()` |
| `p-tinfo` | `test.info()` |
| `p-textend` | `test.extend()` — custom fixtures |
| `p-tdo` | `test.describe.only()` |
| `p-tdp` | `test.describe.parallel()` |
| `p-tds` | `test.describe.serial()` |
| `p-td-config` | `test.describe.configure()` |

---

### Browser

| Prefix | Description |
|---|---|
| `p-b-newContext` | `browser.newContext()` |
| `p-b-newPage` | `browser.newPage()` |
| `p-b-contexts` | `browser.contexts()` |
| `p-b-close` | `browser.close()` |
| `p-b-isConnected` | `browser.isConnected()` |
| `p-b-version` | `browser.version()` |
| `p-b-type` | `browser.browserType().name()` |
| `p-b-on-disconnected` | `browser.on('disconnected')` |
| `p-b-tracing-start` | `browser.startTracing()` |
| `p-b-tracing-stop` | `browser.stopTracing()` |
| `p-l-chromium` | Launch Chromium |
| `p-ls-chromium` | Launch Chromium Server |
| `p-connect-chromium` | Connect to Chromium |
| `p-l-firefox` | Launch Firefox |
| `p-ls-firefox` | Launch Firefox Server |
| `p-connect-firefox` | Connect to Firefox |
| `p-l-webkit` | Launch WebKit |
| `p-ls-webkit` | Launch WebKit Server |
| `p-connect-webkit` | Connect to WebKit |
| `p-bs-close` | `browserServer.close()` |
| `p-bs-kill` | `browserServer.kill()` |
| `p-bs-on-close` | `browserServer.on('close')` |

---

### BrowserContext

| Prefix | Description |
|---|---|
| `p-context-newPage` | `context.newPage()` |
| `p-context-pages` | `context.pages()` |
| `p-bc-close` | `context.close()` |
| `p-bc-cookies` | `context.cookies()` |
| `p-bc-addcookies` | `context.addCookies()` |
| `p-bc-clrcookies` | `context.clearCookies()` |
| `p-bc-storage` | `context.storageState()` — save auth |
| `p-bc-auth` | `newContext({ storageState })` — reuse auth |
| `p-bc-route` | `context.route()` |
| `p-bc-routehar` | `context.routeFromHAR()` |
| `p-bc-ws-route` | `context.routeWebSocket()` (v1.48+) |
| `p-bc-unroute` | `context.unroute()` |
| `p-bc-unroute-all` | `context.unrouteAll()` |
| `p-bc-gperm` | `context.grantPermissions()` |
| `p-bc-clrperm` | `context.clearPermissions()` |
| `p-bc-setgeo` | `context.setGeolocation()` |
| `p-bc-offline` | `context.setOffline()` |
| `p-bc-sethdrs` | `context.setExtraHTTPHeaders()` |
| `p-bc-ais` | `context.addInitScript()` |
| `p-bc-expfn` | `context.exposeFunction()` |
| `p-bc-expbind` | `context.exposeBinding()` |
| `p-bc-sdto` | `context.setDefaultTimeout()` |
| `p-bc-sdnto` | `context.setDefaultNavigationTimeout()` |
| `p-bc-wfe` | `context.waitForEvent()` |
| `p-bc-cdp` | `context.newCDPSession()` (Chromium) |
| `p-bc-on-close` | `context.on('close')` |
| `p-bc-on-page` | `context.on('page')` |
| `p-bc-on-weberror` | `context.on('weberror')` |

---

### Page — Navigation & Interaction

| Prefix | Description |
|---|---|
| `p-goto` | `page.goto()` |
| `p-reload` | `page.reload()` |
| `p-goBack` | `page.goBack()` |
| `p-goFwd` | `page.goForward()` |
| `p-setcontent` | `page.setContent()` |
| `p-url` | `page.url()` |
| `p-title` | `page.title()` |
| `p-content` | `page.content()` |
| `p-pause` | `page.pause()` — debug |
| `p-iclosed` | `page.isClosed()` |
| `p-ctx` | `page.context()` |
| `p-opener` | `page.opener()` |
| `p-close` | `page.close()` |
| `p-bringToFront` | `page.bringToFront()` |

### Page — Locating Elements

| Prefix | Description |
|---|---|
| `p-locator` | `page.locator()` |
| `p-fl` | `page.frameLocator()` |
| `p-frames` | `page.frames()` |
| `p-frame` | `page.frame()` |
| `p-mainframe` | `page.mainFrame()` |
| `p-get-txt` | `page.getByText()` |
| `p-get-r` | `page.getByRole()` |
| `p-get-l` | `page.getByLabel()` |
| `p-get-ti` | `page.getByTestId()` |
| `p-get-p` | `page.getByPlaceholder()` |
| `p-get-atxt` | `page.getByAltText()` |
| `p-get-title` | `page.getByTitle()` |
| `p-$` | `page.$()` |
| `p-$$` | `page.$$()` |
| `p-$eval` | `page.$eval()` |
| `p-$$eval` | `page.$$eval()` |

### Page — Actions

| Prefix | Description |
|---|---|
| `p-clk` | `page.click()` |
| `p-dbclk` | `page.dblclick()` |
| `p-clki` | `page.nth().click()` |
| `p-fill` | `page.fill()` |
| `p-type` | `page.type()` |
| `p-chk` | `page.check()` |
| `p-uchk` | `page.uncheck()` |
| `p-hover` | `page.hover()` |
| `p-focus` | `page.focus()` |
| `p-press` | `page.press()` |
| `p-so` | `page.selectOption()` |
| `p-sif` | `page.setInputFiles()` |
| `p-dnd` | `page.dragAndDrop()` |
| `p-svp` | `page.setViewportSize()` |
| `p-emedia` | `page.emulateMedia()` |

### Page — State & Evaluation

| Prefix | Description |
|---|---|
| `p-isv` | `page.isVisible()` |
| `p-ish` | `page.isHidden()` |
| `p-isc` | `page.isChecked()` |
| `p-isen` | `page.isEnabled()` |
| `p-isd` | `page.isDisabled()` |
| `p-ised` | `page.isEditable()` |
| `p-getattr` | `page.getAttribute()` |
| `p-itxt` | `page.innerText()` |
| `p-count` | `page.count()` |
| `p-eval` | `page.evaluate()` |
| `p-evalh` | `page.evaluateHandle()` |
| `p-ais` | `page.addInitScript()` |
| `p-addscript` | `page.addScriptTag()` |
| `p-addstyle` | `page.addStyleTag()` |
| `p-expfn` | `page.exposeFunction()` |
| `p-expbind` | `page.exposeBinding()` |
| `p-sdto` | `page.setDefaultTimeout()` |
| `p-sethdrs` | `page.setExtraHTTPHeaders()` |
| `p-reqgc` | `page.requestGC()` (v1.48+) |

### Page — Capture & Output

| Prefix | Description |
|---|---|
| `p-screenshot-full` | Full page screenshot |
| `p-screenshot-element` | Element screenshot |
| `p-pdf` | `page.pdf()` |

### Page — Debug & Inspection (v1.56+)

| Prefix | Description |
|---|---|
| `p-console-msgs` | `page.consoleMessages()` |
| `p-page-errors` | `page.pageErrors()` |
| `p-page-reqs` | `page.requests()` |

### Page — Routing

| Prefix | Description |
|---|---|
| `p-route` | `page.route()` |
| `p-routehar` | `page.routeFromHAR()` |
| `p-unroute` | `page.unrouteAll()` |
| `p-unroute-url` | `page.unroute()` — specific URL |
| `p-ws-route` | `page.routeWebSocket()` (v1.48+) |
| `p-alh` | `page.addLocatorHandler()` — overlay handler |
| `p-rlh` | `page.removeLocatorHandler()` |
| `p-ral` | `page.removeAllListeners()` |

---

### Locator Methods

| Prefix | Description |
|---|---|
| `p-loc-all` | `locator.all()` |
| `p-loc-ait` | `locator.allInnerTexts()` |
| `p-loc-atc` | `locator.allTextContents()` |
| `p-loc-and` | `locator.and()` — AND match |
| `p-loc-or` | `locator.or()` — OR match |
| `p-loc-first` | `locator.first()` |
| `p-loc-last` | `locator.last()` |
| `p-loc-nth` | `locator.nth()` |
| `p-loc-sub` | `locator.locator()` — sub-locator |
| `p-loc-clear` | `locator.clear()` |
| `p-loc-blur` | `locator.blur()` |
| `p-loc-tap` | `locator.tap()` |
| `p-loc-press` | `locator.press()` |
| `p-loc-pseq` | `locator.pressSequentially()` |
| `p-loc-drag` | `locator.dragTo()` |
| `p-loc-stxt` | `locator.selectText()` |
| `p-loc-sc` | `locator.setChecked()` |
| `p-loc-siv` | `locator.scrollIntoViewIfNeeded()` |
| `p-loc-bbox` | `locator.boundingBox()` |
| `p-loc-ival` | `locator.inputValue()` |
| `p-loc-ihtml` | `locator.innerHTML()` |
| `p-loc-tc` | `locator.textContent()` |
| `p-loc-wf` | `locator.waitFor()` — with state |
| `p-loc-eval` | `locator.evaluate()` |
| `p-loc-evalall` | `locator.evaluateAll()` |
| `p-loc-de` | `locator.dispatchEvent()` |
| `p-loc-cf` | `locator.contentFrame()` |
| `p-loc-filter-vis` | `locator.filter({ visible: true })` (v1.51+) |
| `p-locator-filter` | `locator.filter()` — text/not |
| `p-loc-describe` | `locator.describe()` (v1.53+) |
| `p-loc-hl` | `locator.highlight()` — debug |
| `p-loc-aria` | `locator.ariaSnapshot()` |
| `p-loc-ss` | `locator.screenshot()` |

---

### Wait Actions

| Prefix | Description |
|---|---|
| `p-wf` | `locator.waitFor()` |
| `p-loc-wf` | `locator.waitFor({ state })` |
| `p-wfs` | `page.waitForSelector()` |
| `p-wfls` | `page.waitForLoadState()` |
| `p-wft` | `page.waitForTimeout()` |
| `p-wfe` | `page.waitForEvent()` |
| `p-wff` | `page.waitForFunction()` |
| `p-wfn` | `page.waitForNavigation()` |
| `p-wfreq` | `page.waitForRequest()` |
| `p-wfres` | `page.waitForResponse()` |
| `p-wfurl` | `page.waitForURL()` |

---

### Page Events

| Prefix | Description |
|---|---|
| `p-on-close` | `page.on('close')` |
| `p-on-console` | `page.on('console')` |
| `p-on-crash` | `page.on('crash')` |
| `p-on-dialog` | `page.on('dialog')` |
| `p-on-domcontentloaded` | `page.on('domcontentloaded')` |
| `p-on-download` | `page.on('download')` |
| `p-on-filechooser` | `page.on('filechooser')` |
| `p-on-frameattached` | `page.on('frameattached')` |
| `p-on-framedetached` | `page.on('framedetached')` |
| `p-on-framenavigated` | `page.on('framenavigated')` |
| `p-on-load` | `page.on('load')` |
| `p-on-pageerror` | `page.on('pageerror')` |
| `p-on-popup` | `page.on('popup')` |
| `p-on-request` | `page.on('request')` |
| `p-on-requestfailed` | `page.on('requestfailed')` |
| `p-on-requestfinished` | `page.on('requestfinished')` |
| `p-on-response` | `page.on('response')` |
| `p-on-websocket` | `page.on('websocket')` |
| `p-on-worker` | `page.on('worker')` |

---

### Assertions

#### State Assertions

| Prefix | Description |
|---|---|
| `p-etbv` | `toBeVisible()` |
| `p-etbh` | `toBeHidden()` |
| `p-etbe` | `toBeEnabled()` |
| `p-etbd` | `toBeDisabled()` |
| `p-etbc` | `toBeChecked()` |
| `p-e-attached` | `toBeAttached()` |
| `p-e-empty` | `toBeEmpty()` |
| `p-e-focused` | `toBeFocused()` |
| `p-e-viewport` | `toBeInViewport()` |
| `p-e-editable` | `toBeEditable()` |
| `p-e-ok` | `toBeOK()` — response status |

#### Content Assertions

| Prefix | Description |
|---|---|
| `p-etb` | `expect().toBe()` |
| `p-ethtxt` | `toHaveText()` |
| `p-etctxt` | `toContainText()` |
| `p-etht` | `toHaveTitle()` |
| `p-ethURL` | `toHaveURL()` |
| `p-ethattr` | `toHaveAttribute()` |
| `p-ethc` | `toHaveCount()` |
| `p-ethss` | `toHaveScreenshot()` |
| `p-e-val` | `toHaveValue()` |
| `p-e-vals` | `toHaveValues()` — multi-select |
| `p-e-class` | `toHaveClass()` |
| `p-e-contclass` | `toContainClass()` (v1.52+) |
| `p-e-css` | `toHaveCSS()` |
| `p-e-id` | `toHaveId()` |
| `p-e-jsprop` | `toHaveJSProperty()` |
| `p-e-role` | `toHaveRole()` |

#### Accessibility Assertions

| Prefix | Description |
|---|---|
| `p-e-accname` | `toHaveAccessibleName()` |
| `p-e-accdesc` | `toHaveAccessibleDescription()` |
| `p-e-accerrm` | `toHaveAccessibleErrorMessage()` (v1.50+) |
| `p-e-aria` | `toMatchAriaSnapshot()` (v1.49+) |

#### Advanced Assertions

| Prefix | Description |
|---|---|
| `p-config-expect` | `expect.configure()` — soft/timeout |
| `p-e-poll` | `expect.poll()` — polling |
| `p-e-pass` | `expect.toPass()` — retry block |
| `p-soft-assert` | Soft assertions block pattern |

---

### Network Routing

| Prefix | Description |
|---|---|
| `p-route-fulfill` | `route.fulfill()` — mock response |
| `p-route-abort` | `route.abort()` — block request |
| `p-route-continue` | `route.continue()` — pass through with edits |
| `p-route-fallback` | `route.fallback()` — next handler |
| `p-route-fetch` | `route.fetch()` — fetch + modify |
| `p-route-modify` | Intercept and modify JSON response pattern |
| `p-net-req` | Inspect request (method, url, headers, body) |
| `p-net-res` | Inspect response (status, url, json) |
| `p-net-assert` | Wait for and assert an API response |

---

### WebSocket Routing

| Prefix | Description |
|---|---|
| `p-ws-route` | `page.routeWebSocket()` (v1.48+) |
| `p-bc-ws-route` | `context.routeWebSocket()` (v1.48+) |
| `p-ws-mock` | Full WebSocket mock pattern |
| `p-on-websocket` | `page.on('websocket')` |

---

### Clock API (v1.45+)

| Prefix | Description |
|---|---|
| `p-clock-install` | `page.clock.install()` — fake clock |
| `p-clock-fixed` | `page.clock.setFixedTime()` |
| `p-clock-systime` | `page.clock.setSystemTime()` |
| `p-clock-ff` | `page.clock.fastForward()` |
| `p-clock-run` | `page.clock.runFor()` |
| `p-clock-pause` | `page.clock.pauseAt()` |
| `p-clock-resume` | `page.clock.resume()` |

---

### Tracing

| Prefix | Description |
|---|---|
| `p-trace-start` | `context.tracing.start()` |
| `p-trace-stop` | `context.tracing.stop()` |
| `p-trace-chunk` | `context.tracing.startChunk()` |
| `p-trace-stopchunk` | `context.tracing.stopChunk()` |
| `p-trace-group` | `context.tracing.group()` + `groupEnd()` |
| `p-trace-full` | Full tracing setup (beforeAll/afterAll) |

---

### Video Recording

| Prefix | Description |
|---|---|
| `p-video-ctx` | `newContext({ recordVideo })` |
| `p-video-path` | `page.video().path()` |
| `p-video-save` | `page.video().saveAs()` |

---

### Downloads & File Chooser

| Prefix | Description |
|---|---|
| `p-on-download` | `page.on('download')` handler |
| `p-download-full` | Wait + save download pattern |
| `p-download-path` | `download.path()` |
| `p-download-save` | `download.saveAs()` |
| `p-download-name` | `download.suggestedFilename()` |
| `p-on-filechooser` | `page.on('filechooser')` handler |
| `p-filechooser-full` | Wait + set files pattern |

---

### API Testing

| Prefix | Description |
|---|---|
| `p-api-ctx` | `request.newContext()` |
| `p-api-get` | `request.get()` |
| `p-api-post` | `request.post()` |
| `p-api-put` | `request.put()` |
| `p-api-patch` | `request.patch()` |
| `p-api-del` | `request.delete()` |
| `p-api-head` | `request.head()` |
| `p-api-fetch` | `request.fetch()` — custom method |
| `p-api-storage` | `request.storageState()` |
| `p-api-dispose` | `request.dispose()` |
| `p-req-get` | `page.request.get()` — shares auth |
| `p-req-post` | `page.request.post()` — shares auth |

---

### Keyboard, Mouse & Touch

| Prefix | Description |
|---|---|
| `p-keyboard-press` | `page.keyboard.press()` |
| `p-keyboard-down` | `page.keyboard.down()` |
| `p-keyboard-up` | `page.keyboard.up()` |
| `p-keyboard-type` | `page.keyboard.type()` |
| `p-keyboard-insertText` | `page.keyboard.insertText()` |
| `p-mouse-clk` | `page.mouse.click()` |
| `p-mouse-dbclk` | `page.mouse.dblclick()` |
| `p-mouse-down` | `page.mouse.down()` |
| `p-mouse-move` | `page.mouse.move()` |
| `p-mouse-up` | `page.mouse.up()` |
| `p-mouse-wheel` | `page.mouse.wheel()` |
| `p-touch-tap` | `page.touchscreen.tap()` |

---

### iFrame Handling

| Prefix | Description |
|---|---|
| `p-fl` | `page.frameLocator()` |
| `p-fl-loc` | `frameLocator.locator()` |
| `p-fl-role` | `frameLocator.getByRole()` |
| `p-fl-nested` | Nested `frameLocator` chain |
| `p-loc-cf` | `locator.contentFrame()` |

---

### Dialog Handling

| Prefix | Description |
|---|---|
| `p-on-dialog` | `page.on('dialog')` |
| `p-dialog-accept` | Accept dialog pattern |
| `p-dialog-dismiss` | Dismiss dialog pattern |

---

### Workers & Accessibility

| Prefix | Description |
|---|---|
| `p-on-worker` | `page.on('worker')` |
| `p-worker-eval` | `worker.evaluate()` |
| `p-worker-url` | `worker.url()` |
| `p-acc-snap` | `page.accessibility.snapshot()` |

---

### Page Object Model (POM)

| Prefix | Description |
|---|---|
| `p-pam` | `public async method()` |
| `m-pom` | POM class template |
| `m-pome` | POM class with extended class |

---

### Complete Patterns & Templates

| Prefix | Description |
|---|---|
| `p-sample` | Basic Playwright test |
| `p-testBlock` | Complete test block with describe |
| `p-newPage` | Handle new tab / popup page |
| `p-newPopup` | Handle popup window |
| `p-dragdrop-sample` | Drag and drop with mouse |
| `p-saveHAR` | Record HAR file |
| `p-auth-setup` | Global auth setup with `storageState` |
| `p-route-modify` | Intercept and modify API response |
| `p-soft-assert` | Soft assertions block |
| `p-trace-full` | Full tracing setup |
| `p-ws-mock` | Mock WebSocket responses |
| `p-download-full` | Wait and save file download |
| `p-filechooser-full` | Wait and handle file chooser |
| `p-tls-cert` | TLS client certificate setup (v1.46+) |
| `p-mobile` | Mobile device emulation |
| `p-config` | Full `playwright.config.ts` template |

---

## Repository

[github.com/sumanthtps/New-Playwright-snippets](https://github.com/sumanthtps/New-Playwright-snippets)

Issues / feature requests: [open an issue](https://github.com/sumanthtps/New-Playwright-snippets/issues)

## License

MIT © Sumanth T P
