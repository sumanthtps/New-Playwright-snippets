const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'snippets', 'playwright.json');
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const newSnippets = {

  // ── LOCATOR – remaining methods ──────────────────────────────────────────
  'locator.setChecked()': {
    prefix: 'p-loc-sc',
    description: 'Sets the checked state of a checkbox or radio element',
    body: ["await this.page.locator('${1:selector}').setChecked(${2|true,false|});"]
  },
  'locator.scrollIntoViewIfNeeded()': {
    prefix: 'p-loc-siv',
    description: 'Scrolls the element into view if it is not visible',
    body: ["await this.page.locator('${1:selector}').scrollIntoViewIfNeeded();"]
  },
  'locator.textContent()': {
    prefix: 'p-loc-tc',
    description: 'Returns the element.textContent value',
    body: ["const ${1:text} = await this.page.locator('${2:selector}').textContent();"]
  },
  'locator.waitFor() state': {
    prefix: 'p-loc-wf',
    description: 'Waits until the locator satisfies a given state',
    body: ["await this.page.locator('${1:selector}').waitFor({ state: '${2|visible,hidden,attached,detached|}' });"]
  },
  'locator.describe()': {
    prefix: 'p-loc-describe',
    description: 'Attaches a readable label to a locator for better trace viewer output (v1.53+)',
    body: ["const ${1:locator} = this.page.locator('${2:selector}').describe('${3:Human-readable name}');"]
  },
  'locator.filter({ visible })': {
    prefix: 'p-loc-filter-vis',
    description: 'Filters locator to only visible elements (v1.51+)',
    body: ["await this.page.locator('${1:selector}').filter({ visible: true });"]
  },
  'locator.locator()': {
    prefix: 'p-loc-sub',
    description: 'Finds a matching element within the locator subtree',
    body: ["const ${1:child} = this.page.locator('${2:parent}').locator('${3:child}');"]
  },

  // ── PAGE – remaining methods ──────────────────────────────────────────────
  'page.addScriptTag()': {
    prefix: 'p-addscript',
    description: 'Adds a <script> tag to the page by URL or inline content',
    body: ["await this.page.addScriptTag({ url: '${1:https://example.com/script.js}' });"]
  },
  'page.addStyleTag()': {
    prefix: 'p-addstyle',
    description: 'Adds a <style> or <link rel=stylesheet> tag to the page',
    body: ["await this.page.addStyleTag({ url: '${1:https://example.com/style.css}' });"]
  },
  'page.consoleMessages()': {
    prefix: 'p-console-msgs',
    description: 'Returns up to 200 recent console messages from the page (v1.56+)',
    body: [
      'const ${1:messages} = this.page.consoleMessages();',
      'for (const msg of ${1:messages}) {',
      '\tconsole.log(msg.type(), msg.text());',
      '}'
    ]
  },
  'page.pageErrors()': {
    prefix: 'p-page-errors',
    description: 'Returns up to 200 recent uncaught exceptions from the page (v1.56+)',
    body: [
      'const ${1:errors} = this.page.pageErrors();',
      'for (const err of ${1:errors}) {',
      '\tconsole.log(err.message);',
      '}'
    ]
  },
  'page.requests()': {
    prefix: 'p-page-reqs',
    description: 'Returns up to 100 recent network requests made by the page (v1.56+)',
    body: [
      'const ${1:requests} = this.page.requests();',
      'const ${2:urls} = ${1:requests}.map(r => r.url());'
    ]
  },
  'page.requestGC()': {
    prefix: 'p-reqgc',
    description: 'Requests a garbage collection run for detecting memory leaks (v1.48+)',
    body: ['await this.page.requestGC();']
  },
  'page.removeLocatorHandler()': {
    prefix: 'p-rlh',
    description: 'Removes a previously registered locator handler',
    body: ["await this.page.removeLocatorHandler(this.page.locator('${1:overlaySelector}'));"]
  },
  'page.removeAllListeners()': {
    prefix: 'p-ral',
    description: 'Removes all listeners for a given event, optionally waiting for them to finish',
    body: ["await this.page.removeAllListeners('${1:request}');"]
  },
  'page.frames()': {
    prefix: 'p-frames',
    description: 'Returns an array of all frames attached to the page',
    body: ['const ${1:frames} = this.page.frames();']
  },
  'page.frame()': {
    prefix: 'p-frame',
    description: 'Returns the frame matching the given name or URL',
    body: ["const ${1:frame} = this.page.frame({ name: '${2:frameName}' });"]
  },
  'page.mainFrame()': {
    prefix: 'p-mainframe',
    description: 'Returns the main frame of the page',
    body: ['const ${1:frame} = this.page.mainFrame();']
  },
  'page.context()': {
    prefix: 'p-ctx',
    description: 'Returns the browser context the page belongs to',
    body: ['const ${1:context} = this.page.context();']
  },
  'page.opener()': {
    prefix: 'p-opener',
    description: 'Returns the opener page if opened via window.open()',
    body: ['const ${1:opener} = await this.page.opener();']
  },
  'page.unroute()': {
    prefix: 'p-unroute-url',
    description: 'Removes a specific URL route registered with page.route()',
    body: ["await this.page.unroute('${1:**/api/**}');"]
  },
  'page.routeWebSocket()': {
    prefix: 'p-ws-route',
    description: 'Intercepts WebSocket connections matching the URL pattern (v1.48+)',
    body: [
      "await this.page.routeWebSocket('${1:wss://example.com/ws}', ws => {",
      '\tws.onMessage(message => {',
      '\t\tconsole.log(message);',
      "\t\tws.send(JSON.stringify({ ${2:key}: '${3:value}' }));",
      '\t});',
      '});'
    ]
  },

  // ── BROWSER CONTEXT – remaining ──────────────────────────────────────────
  'browserContext.routeWebSocket()': {
    prefix: 'p-bc-ws-route',
    description: 'Intercepts WebSocket connections in the entire context (v1.48+)',
    body: [
      "await context.routeWebSocket('${1:wss://example.com/ws}', ws => {",
      '\tws.connectToServer();',
      '\tws.onMessage(message => { console.log(message); });',
      '});'
    ]
  },
  'browserContext.setExtraHTTPHeaders()': {
    prefix: 'p-bc-sethdrs',
    description: 'Sets extra HTTP headers sent with every request in this context',
    body: [
      'await context.setExtraHTTPHeaders({',
      "\t'${1:Authorization}': '${2:Bearer token}'",
      '});'
    ]
  },
  'browserContext.setDefaultNavigationTimeout()': {
    prefix: 'p-bc-sdnto',
    description: 'Sets the default navigation timeout for the browser context',
    body: ['context.setDefaultNavigationTimeout(${1:30000});']
  },
  'browserContext.newCDPSession()': {
    prefix: 'p-bc-cdp',
    description: 'Creates a Chrome DevTools Protocol session for the given page (Chromium only)',
    body: [
      'const ${1:client} = await context.newCDPSession(${2:page});',
      "await ${1:client}.send('${3:Network.enable}');"
    ]
  },
  'browserContext.exposeBinding()': {
    prefix: 'p-bc-expbind',
    description: 'Adds a binding function with source info to every page in the context',
    body: [
      "await context.exposeBinding('${1:bindingName}', (source, ${2:arg}) => {",
      '\treturn $3;',
      '});'
    ]
  },
  'context.on(weberror)': {
    prefix: 'p-bc-on-weberror',
    description: 'Emitted when an uncaught exception is not handled by the page',
    body: [
      "context.on('weberror', webError => {",
      '\tconsole.log(webError.error().message);',
      '});'
    ]
  },

  // ── BROWSER – remaining ───────────────────────────────────────────────────
  'browser.browserType()': {
    prefix: 'p-b-type',
    description: 'Returns the browser type name: chromium, firefox, or webkit',
    body: ['const ${1:type} = browser.browserType().name();']
  },
  'browser.startTracing()': {
    prefix: 'p-b-tracing-start',
    description: 'Starts Chromium-specific tracing (Chromium only)',
    body: [
      'await browser.startTracing(page, {',
      "\tpath: '${1:trace.json}',",
      '\tscreenshots: true',
      '});'
    ]
  },
  'browser.stopTracing()': {
    prefix: 'p-b-tracing-stop',
    description: 'Stops Chromium tracing and returns the buffer',
    body: ['const ${1:buffer} = await browser.stopTracing();']
  },

  // ── CLOCK – remaining ─────────────────────────────────────────────────────
  'page.clock.setSystemTime()': {
    prefix: 'p-clock-systime',
    description: 'Updates the system time without triggering timers',
    body: ["await this.page.clock.setSystemTime(new Date('${1:2024-01-01T12:00:00}'));"]
  },

  // ── TRACING – remaining ───────────────────────────────────────────────────
  'context.tracing.group()': {
    prefix: 'p-trace-group',
    description: 'Opens and closes a trace group to visually group actions in the trace viewer',
    body: [
      "await context.tracing.group('${1:group name}');",
      '$0',
      'await context.tracing.groupEnd();'
    ]
  },

  // ── PAGE EVENTS – remaining ───────────────────────────────────────────────
  "page.on('download')": {
    prefix: 'p-on-download',
    description: 'Emitted when a file download starts',
    body: [
      "page.on('download', async download => {",
      '\tconsole.log(download.suggestedFilename());',
      "\tawait download.saveAs('${1:downloads/}' + download.suggestedFilename());",
      '});'
    ]
  },
  "page.on('filechooser')": {
    prefix: 'p-on-filechooser',
    description: 'Emitted when a file chooser dialog is opened',
    body: [
      "page.on('filechooser', async fileChooser => {",
      "\tawait fileChooser.setFiles('${1:path/to/file.txt}');",
      '});'
    ]
  },
  "page.on('websocket')": {
    prefix: 'p-on-websocket',
    description: 'Emitted when a WebSocket connection is opened by the page',
    body: [
      "page.on('websocket', ws => {",
      "\tconsole.log('WebSocket:', ws.url());",
      "\tws.on('framesent', event => console.log('sent:', event.payload));",
      "\tws.on('framereceived', event => console.log('received:', event.payload));",
      '});'
    ]
  },

  // ── DOWNLOAD ──────────────────────────────────────────────────────────────
  'Download file pattern': {
    prefix: 'p-download-full',
    description: 'Complete pattern to trigger and capture a file download',
    body: [
      "const downloadPromise = this.page.waitForEvent('download');",
      "await this.page.locator('${1:downloadButton}').click();",
      'const ${2:download} = await downloadPromise;',
      "await ${2:download}.saveAs('${3:downloads/}' + ${2:download}.suggestedFilename());"
    ]
  },
  'download.path()': {
    prefix: 'p-download-path',
    description: 'Returns the file system path to the downloaded file',
    body: ['const ${1:filePath} = await ${2:download}.path();']
  },
  'download.saveAs()': {
    prefix: 'p-download-save',
    description: 'Saves the downloaded file to a custom path',
    body: ["await ${1:download}.saveAs('${2:path/to/file}');"]
  },
  'download.suggestedFilename()': {
    prefix: 'p-download-name',
    description: 'Returns the suggested filename for the download',
    body: ['const ${1:filename} = ${2:download}.suggestedFilename();']
  },

  // ── FILE CHOOSER ─────────────────────────────────────────────────────────
  'fileChooser.setFiles() pattern': {
    prefix: 'p-filechooser-full',
    description: 'Complete pattern to wait for and handle a file chooser dialog',
    body: [
      "const fileChooserPromise = this.page.waitForEvent('filechooser');",
      "await this.page.locator('${1:uploadButton}').click();",
      'const ${2:fileChooser} = await fileChooserPromise;',
      "await ${2:fileChooser}.setFiles('${3:path/to/file.txt}');"
    ]
  },

  // ── WEBSOCKET MOCK ────────────────────────────────────────────────────────
  'WebSocket mock pattern': {
    prefix: 'p-ws-mock',
    description: 'Mocks WebSocket server responses without a real server (v1.48+)',
    body: [
      "await this.page.routeWebSocket('${1:wss://example.com/ws}', ws => {",
      '\tws.onMessage(message => {',
      '\t\tconst data = JSON.parse(message);',
      "\t\tif (data.type === '${2:ping}') {",
      "\t\t\tws.send(JSON.stringify({ type: '${3:pong}' }));",
      '\t\t}',
      '\t});',
      '});'
    ]
  },

  // ── NEW ASSERTIONS ────────────────────────────────────────────────────────
  'expect.toContainClass()': {
    prefix: 'p-e-contclass',
    description: 'Asserts the element contains a specific CSS class (v1.52+)',
    body: ['await expect(this.page.locator(${1:selector})).toContainClass(\'${2:className}\');']
  },
  'expect.toHaveAccessibleErrorMessage()': {
    prefix: 'p-e-accerrm',
    description: 'Asserts the element has a specific accessible error message (v1.50+)',
    body: ["await expect(this.page.locator(${1:selector})).toHaveAccessibleErrorMessage('${2:error message}');"]
  },

  // ── TEST – remaining modifiers ────────────────────────────────────────────
  'test.step.skip()': {
    prefix: 'p-ts-skip',
    description: 'Declares a test step that is skipped (v1.50+)',
    body: [
      "await test.step.skip('${1:step title}', async () => {",
      '\t$2',
      '});'
    ]
  },
  'test.fail.only()': {
    prefix: 'p-tfail-only',
    description: 'Focuses only tests expected to fail — skips all others (v1.49+)',
    body: [
      "test.fail.only('${1:title}', async ({ ${2:page} }) => {",
      '\t$3',
      '});'
    ]
  },
  'test.describe.only()': {
    prefix: 'p-tdo',
    description: 'Focuses only this describe group — all other groups are skipped',
    body: [
      "test.describe.only('${1:suite}', () => {",
      '\t$2',
      '});'
    ]
  },
  'test.describe.parallel()': {
    prefix: 'p-tdp',
    description: 'Declares a describe group where tests run concurrently',
    body: [
      "test.describe.parallel('${1:suite}', () => {",
      '\t$2',
      '});'
    ]
  },
  'test.describe.serial()': {
    prefix: 'p-tds',
    description: 'Declares a describe group where tests run one at a time',
    body: [
      "test.describe.serial('${1:suite}', () => {",
      '\t$2',
      '});'
    ]
  },
  'test.setTimeout()': {
    prefix: 'p-t-timeout',
    description: 'Sets a custom timeout for the current test',
    body: ['test.setTimeout(${1:60000});']
  },
  'test.step() with timeout': {
    prefix: 'p-ts-timeout',
    description: 'Declares a test step with a custom timeout (v1.50+)',
    body: [
      "await test.step('${1:step title}', async () => {",
      '\t$2',
      '}, { timeout: ${3:5000} });'
    ]
  },

  // ── API REQUEST – remaining ───────────────────────────────────────────────
  'apiRequest.head()': {
    prefix: 'p-api-head',
    description: 'Sends an HTTP HEAD request',
    body: [
      "const ${1:response} = await request.head('${2:/endpoint}');",
      'console.log(${1:response}.status());'
    ]
  },
  'apiRequest.storageState()': {
    prefix: 'p-api-storage',
    description: 'Returns the storage state (cookies/localStorage) for the API context',
    body: ["const ${1:state} = await request.storageState({ path: '${2:storageState.json}' });"]
  },
  'apiRequest.dispose()': {
    prefix: 'p-api-dispose',
    description: 'Disposes the APIRequestContext and all network responses',
    body: ['await request.dispose();']
  },

  // ── NETWORK INSPECTION ────────────────────────────────────────────────────
  'Inspect request details': {
    prefix: 'p-net-req',
    description: 'Inspects a network request inside a page.on(request) handler',
    body: [
      "this.page.on('request', request => {",
      '\tconsole.log(request.method(), request.url());',
      '\tconst ${1:headers} = request.headers();',
      '\tconst ${2:body} = request.postDataJSON();',
      '});'
    ]
  },
  'Inspect response details': {
    prefix: 'p-net-res',
    description: 'Inspects a network response inside a page.on(response) handler',
    body: [
      "this.page.on('response', async response => {",
      '\tconsole.log(response.status(), response.url());',
      "\tif (response.url().includes('${1:/api/}')) {",
      '\t\tconst ${2:body} = await response.json();',
      '\t\tconsole.log(${2:body});',
      '\t}',
      '});'
    ]
  },
  'Wait and assert API response': {
    prefix: 'p-net-assert',
    description: 'Waits for a specific API response and asserts its content',
    body: [
      'const ${1:responsePromise} = this.page.waitForResponse(resp =>',
      "\tresp.url().includes('${2:/api/endpoint}') && resp.status() === ${3:200}",
      ');',
      "await this.page.locator('${4:triggerSelector}').click();",
      'const ${5:response} = await ${1:responsePromise};',
      'const ${6:body} = await ${5:response}.json();',
      'expect(${6:body}).${7:toMatchObject}($8);'
    ]
  },

  // ── WORKER ────────────────────────────────────────────────────────────────
  'worker.evaluate()': {
    prefix: 'p-worker-eval',
    description: 'Executes JavaScript in the web worker context',
    body: [
      "this.page.on('worker', async worker => {",
      '\tconst ${1:result} = await worker.evaluate(() => $2);',
      '\tconsole.log(${1:result});',
      '});'
    ]
  },
  'worker.url()': {
    prefix: 'p-worker-url',
    description: 'Gets the URL of the web worker script',
    body: [
      "this.page.on('worker', worker => {",
      "\tconsole.log('Worker URL:', worker.url());",
      '});'
    ]
  },

  // ── FULL PATTERNS / TEMPLATES ─────────────────────────────────────────────
  'Global setup with storageState': {
    prefix: 'p-auth-setup',
    description: 'Global setup file to log in once and save auth state for all tests',
    body: [
      "import { chromium, FullConfig } from '@playwright/test';",
      '',
      'async function globalSetup(config: FullConfig) {',
      '\tconst browser = await chromium.launch();',
      '\tconst page = await browser.newPage();',
      "\tawait page.goto('${1:https://example.com/login}');",
      "\tawait page.fill('${2:[name=email]}', process.env.EMAIL!);",
      "\tawait page.fill('${3:[name=password]}', process.env.PASSWORD!);",
      "\tawait page.click('${4:[type=submit]}');",
      "\tawait page.context().storageState({ path: '${5:storageState.json}' });",
      '\tawait browser.close();',
      '}',
      '',
      'export default globalSetup;'
    ]
  },
  'Intercept and modify API response': {
    prefix: 'p-route-modify',
    description: 'Intercepts an API call, modifies the JSON body, and returns the altered response',
    body: [
      "await this.page.route('${1:**/api/endpoint}', async route => {",
      '\tconst response = await route.fetch();',
      '\tconst body = await response.json();',
      "\tbody.${2:field} = '${3:mockedValue}';",
      '\tawait route.fulfill({ response, body: JSON.stringify(body) });',
      '});'
    ]
  },
  'TLS client certificate': {
    prefix: 'p-tls-cert',
    description: 'Creates a browser context with a TLS client certificate (v1.46+)',
    body: [
      'const context = await browser.newContext({',
      '\tclientCertificates: [{',
      "\t\torigin: '${1:https://example.com}',",
      "\t\tcertPath: '${2:client.crt}',",
      "\t\tkeyPath: '${3:client.key}'",
      '\t}]',
      '});'
    ]
  },
  'Soft assertions block': {
    prefix: 'p-soft-assert',
    description: 'Groups multiple soft assertions — all run before reporting failures',
    body: [
      'const ${1:softExpect} = expect.configure({ soft: true });',
      "await ${1:softExpect}(this.page.locator('${2:selector1}')).toBeVisible();",
      "await ${1:softExpect}(this.page.locator('${3:selector2}')).toHaveText('${4:text}');",
      'expect(test.info().errors).toHaveLength(0);'
    ]
  },
  'Playwright config template': {
    prefix: 'p-config',
    description: 'Full playwright.config.ts template with projects, tracing, and reporter',
    body: [
      "import { defineConfig, devices } from '@playwright/test';",
      '',
      'export default defineConfig({',
      "\ttestDir: './tests',",
      '\tfullParallelism: true,',
      '\tforbidOnly: !!process.env.CI,',
      '\tretries: process.env.CI ? 2 : 0,',
      '\tworkers: process.env.CI ? 1 : undefined,',
      "\treporter: 'html',",
      '\tuse: {',
      "\t\tbaseURL: '${1:http://localhost:3000}',",
      "\t\ttrace: 'on-first-retry',",
      "\t\tscreenshot: 'only-on-failure',",
      "\t\tvideo: 'retain-on-failure'",
      '\t},',
      '\tprojects: [',
      "\t\t{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },",
      "\t\t{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },",
      "\t\t{ name: 'webkit', use: { ...devices['Desktop Safari'] } }",
      '\t]',
      '});'
    ]
  },
  'Mobile device emulation': {
    prefix: 'p-mobile',
    description: 'Creates a browser context emulating a specific mobile device',
    body: [
      "import { devices } from '@playwright/test';",
      '',
      'const context = await browser.newContext({',
      "\t...devices['${1|iPhone 15,Pixel 7,Galaxy S9+|}'],",
      "\tlocale: '${2:en-US}'",
      '});'
    ]
  }
};

// Merge, checking for duplicate prefixes
const existingPrefixes = new Set(
  Object.values(json).map(v => (Array.isArray(v.prefix) ? v.prefix : [v.prefix])).flat()
);
let added = 0;
const skipped = [];
for (const [name, snippet] of Object.entries(newSnippets)) {
  const prefixes = Array.isArray(snippet.prefix) ? snippet.prefix : [snippet.prefix];
  const conflict = prefixes.find(p => existingPrefixes.has(p));
  if (conflict) { skipped.push(`${name} (${conflict})`); continue; }
  json[name] = snippet;
  prefixes.forEach(p => existingPrefixes.add(p));
  added++;
}

fs.writeFileSync(jsonPath, JSON.stringify(json, null, 4));
console.log('Added:', added);
if (skipped.length) console.log('Skipped:', skipped.join(', '));
console.log('Total snippets:', Object.keys(json).length);
