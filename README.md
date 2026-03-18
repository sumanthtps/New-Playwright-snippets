<h1 align="center">Playwright Snippets 2026🎭</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=sumanthtps.playwright-test-code-snippets"><img src="https://vsmarketplacebadges.dev/version-short/sumanthtps.playwright-test-code-snippets.svg" alt="Marketplace"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=sumanthtps.playwright-test-code-snippets"><img src="https://travis-ci.com/nitayneeman/vscode-playwright-snippets.svg?token=vHfpxFNvotCsScqrpvMs&branch=main" alt="Build"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=sumanthtps.playwright-test-code-snippets"><img src="https://vsmarketplacebadges.dev/installs/sumanthtps.playwright-test-code-snippets.svg" alt="Installs"></a>
  <a href="https://github.com/SUMANTHTPs/New-Playwright-snippets/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgray.svg" alt="License"></a>
</p>

**Note**

- This snippet adheres to the Page object model
- `Typescript` or `Javascript` languages are intended for use with this extension.

## Getting Started

This Visual Studio Code extension adds predefined useful code snippets for 🎭 [Playwright](https://github.com/microsoft/playwright).

### Used tools

- [playwright](https://playwright.dev/) - Playwright is a Node.js library to automate tests cases for various browsers.
- [@playwright/test](https://playwright.dev/docs/api/class-test) - Playwright Test provides a test function to declare tests and expect function to write assertions.
- [playwright-core](https://www.npmjs.com/package/playwright-core) - This package contains the no-browser flavor of Playwright.

## Requirements

- Visual Studio Code (VS Code) version 1.80.0 or higher.

## Installation

1. Open **Visual Studio Code**.
2. Go to **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window or using the keyboard shortcut `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac).
3. Search for "Playwright Snippets 2026" in the Extensions view search box.
4. Click on the **Install** button to install the extension.
5. Reload Visual Studio Code to enable the extension.

## Usage

1. Open a **JavaScript** or **TypeScript** file in Visual Studio Code.
2. Start typing one of the predefined snippets (e.g., `p-`) to trigger the code snippet suggestion.
3. Select the desired snippet from the suggestions list, or press `Tab` to insert the snippet directly.
4. Replace placeholders (if any) with your custom test code.

### Snippets List

#### Test block

| Snippet  | Content           |
| -------- | ----------------- |
| `p-td`   | test.describe()   |
| `p-t`    | test()            |
| `p-ts`   | test.step()       |
| `p-tbe`  | test.beforeEach() |
| `p-tae`  | test.afterEach()  |
| `p-tba`  | test.beforeAll()  |
| `p-taa`  | test.afterAll()   |
| `p-tuse` | test.use()        |

#### Imports

| Snippet        | Content           |
| -------------- | ----------------- |
| `p-i-pw`       | Playwright module |
| `p-i-chromium` | Import Chromium   |
| `p-i-firefox`  | Import Firefox    |
| `p-i-webkit`   | Import Webkit     |
| `p-i-devices`  | Import devices    |

#### Browser actions

| Snippet                | Content                    |
| ---------------------- | -------------------------- |
| `p-browser-newContext` | browser.newContext()       |
| `p-browser-newPage`    | browser.newPage()          |
| `p-connect-chromium`   | Connect Chromium           |
| `p-l-chromium`         | Launch Chromium            |
| `p-ls-chromium`        | Launch Chromium Server     |
| `p-connect-firefox`    | Connect Firefox            |
| `p-l-firefox`          | Launch Firefox             |
| `p-ls-firefox`         | Launch Firefox Server      |
| `p-connect-webkit`     | Connect Webkit             |
| `p-l-webkit`           | Launch Webkit              |
| `p-ls-webkit`          | Launch Webkit Server       |
| `p-b-contexts`         | browser.contexts           |
| `p-b-close`            | browser.close              |
| `p-b-isConnected`      | browser.isConnected        |
| `p-b-version`          | browser.version            |
| `p-b-on-disconnected`  | browser.on('disconnected') |
| `p-bs-close`           | browserServer.close        |
| `p-bs-kill`            | browserServer.kill         |
| `p-bs-on-close`        | browserServer.on('close')  |

#### Context actions

| Snippet             | Content                    |
| ------------------- | -------------------------- |
| `p-context-newPage` | context.newPage()          |
| `p-context-pages`   | context.pages()            |
| `p-bc-close`        | browserContext.close       |
| `p-bc-cookies`      | browserContext.cookies     |
| `p-bc-route`        | browserContext.route       |
| `p-bc-unroute`      | browserContext.unroute     |
| `p-bc-on-close`     | browserContext.on('close') |
| `p-bc-on-page`      | browserContext.on('page')  |

#### Page actions

| Snippet                 | Content                   |
| ----------------------- | ------------------------- |
| `p-goto`                | page.goto()               |
| `p-clk`                 | page.click()              |
| `p-dbclk`               | page.dblclick()           |
| `p-clki`                | page.nth().click()        |
| `p-chk`                 | page.check()              |
| `p-uchk`                | page.uncheck()            |
| `p-hover`               | page.hover()              |
| `p-press`               | page.press() with options |
| `p-sif`                 | page.setInputFiles()      |
| `p-screenshot-full`     | Full page screenshot      |
| `p-screenshot-element`  | Element screenshot        |
|                         |                           |
| `p-title`               | page.title()              |
| `p-url`                 | page.url()                |
|                         |                           |
| `p-fill`                | page.fill()               |
| `p-type`                | page.type()               |
| `p-so`                  | page.selectOption()       |
|                         |                           |
| `p-isv`                 | page.isVisible()          |
| `p-ish`                 | page.isHidden()           |
| `p-isc`                 | page.isChecked()          |
| `p-isen`                | page.isEnabled()          |
| `p-isd`                 | page.isDisabled()         |
| `p-ised`                | page.isEditable()         |
|                         |                           |
| `p-getattr`             | page.getAttribute()       |
| `p-itxt`                | page.innerText()          |
| `p-count`               | page.count()              |
| `p-focus`               | page.focus()              |
| `p-goBack`              | page.goBack()             |
| `p-goFwd`               | page.goForward()          |
| `p-bringToFront`        | page.bringToFront         |
| `p-close`               | page.close                |
| `p-content`             | page.content              |
| `p-pdf`                 | page.pdf                  |
| `p-keyboard-press`      | page.keyboard.press       |
| `p-keyboard-insertText` | page.keyboard.insertText  |
| `p-keyboard-up`         | page.keyboard.up          |
| `p-mouse-clk`           | page.mouse.click          |
| `p-mouse-dbclk`         | page.mouse.dblclick       |
| `p-mouse-down`          | page.mouse.down           |
| `p-mouse-move`          | page.mouse.move           |
| `p-mouse-up`            | page.mouse.up             |

#### Page.on snippets

| Snippet                 | Content                     |
| ----------------------- | --------------------------- |
| `p-on-close`            | page.on('close')            |
| `p-on-console`          | page.on('console')          |
| `p-on-crash`            | page.on('crash')            |
| `p-on-dialog`           | page.on('dialog')           |
| `p-on-domcontentloaded` | page.on('domcontentloaded') |
| `p-on-frameattached`    | page.on('frameattached')    |
| `p-on-framedetached`    | page.on('framedetached')    |
| `p-on-framenavigated`   | page.on('framenavigated')   |
| `p-on-load`             | page.on('load')             |
| `p-on-pageerror`        | page.on('pageerror')        |
| `p-on-popup`            | page.on('popup')            |
| `p-on-request`          | page.on('request')          |
| `p-on-requestfailed`    | page.on('requestfailed')    |
| `p-on-requestfinished`  | page.on('requestfinished')  |
| `p-on-response`         | page.on('response')         |
| `p-on-worker`           | page.on('worker')           |

#### Page assertion/expect actions

| Snippet     | Content                   |
| ----------- | ------------------------- |
| `p-etbv`    | page.toBeVisible()        |
| `p-etbh`    | page.toBeHidden()         |
| `p-etbe`    | page.toBeEnabled()        |
| `p-etbd`    | page.toBeDisabled()       |
| `p-etbc`    | page.toBeChecked()        |
| `p-etb`     | expect.toBe()             |
| `p-etht`    | expect.toHaveTitle()      |
| `p-etctxt`  | expect.toContainText()    |
| `p-ethattr` | expect.toHaveAttribute()  |
| `p-ethc`    | expect.toHaveCount()      |
| `p-ethtxt`  | expect.toHaveText()       |
| `p-ethURL`  | expect.toHaveURL()        |
| `p-ethss`   | expect.toHaveScreenshot() |

#### New Advanced Locators

| Snippet            | Content               |
| ------------------ | --------------------- |
| `p-get-txt`        | page.getByText        |
| `p-get-r`          | page.getByRole        |
| `p-get-l`          | page.getByLabel       |
| `p-get-ti`         | page.getByTestId      |
| `p-get-p`          | page.getByPlaceholder |
| `p-get-atxt`       | page.getByAltText     |
| `p-get-title`      | page.getByTitle       |
| `p-locator`        | page.locate           |
| `p-$`              | page.$                |
| `p-$$`             | page.$$               |
| `p-$eval`          | page.$eval            |
| `p-$$eval`         | page.$$eval           |
| `p-locator-filter` | page.locator.filter   |

#### Page wait actions

| Snippet   | Content                  |
| --------- | ------------------------ |
| `p-wf`    | page.waitFor()           |
| `p-wfs`   | page.waitForSelector()   |
| `p-wfls`  | page.waitForLoadState()  |
| `p-wft`   | page.waitForTimeout()    |
| `p-wfe`   | page.waitForEvent()      |
| `p-wff`   | page.waitForFunction()   |
| `p-wfn`   | page.waitForNavigation() |
| `p-wfreq` | page.waitForRequest()    |
| `p-wfres` | page.waitForResponse()   |

#### Other actions

| Snippet             | Content                     |
| ------------------- | --------------------------- |
| `p-pam`             | public async method() {...} |
| `p-newPage`         | Handle new tab/ page        |
| `p-newPopup`        | Handle popups               |
| `p-testBlock`       | Complete test block         |
| `p-saveHAR`         | Save HAR file               |
| `p-route`           | page.route                  |
| `p-sample`          | Sample playwright test      |
| `p-dragdrop-sample` | drag and drop example       |
| `p-config-expect`   | expect.configure()          |

## Happy Coding
