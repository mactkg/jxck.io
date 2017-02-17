# [monthly][web] Monthly Web 2017/02

## Intro

今月の Web メモ

## Browser

### Chrome

- 2/2: Beta [Chrome57](https://blog.chromium.org/2017/02/chrome-57-beta-css-grid-layout-improved.html)
  - Grid
  - Add to Home Screeen
  - Media Session
  - text padding
  - SW NavigationPreload
  - remove vender prefix from IDB
- Chrome58 Beta, Dev, Canaly

- [release](https://chromereleases.googleblog.com/) ([stable updates tag](https://chromereleases.googleblog.com/search/label/Stable%20updates))
- [updates](https://developers.google.com/web/updates/)
- [chromium](https://www.chromium.org/developers/calendar)
- [canaly](https://www.chromium.org/getting-involved/dev-channel)


### Firefox

- 1/31 Stable [Firefox51](https://blog.nightly.mozilla.org/2017/01/31/these-weeks-in-firefox-issue-9/)
  - new logo
  - e10s
- Firefox52 Beta
- Firefox53 Dev
- Firefox54 Nightly
  - [es modules が動くように](https://twitter.com/malyw/status/829707412659658753)

- [relese](https://www.mozilla.org/en-US/firefox/releases/)
- [nightly](https://www.mozilla.org/ja/firefox/channel/desktop/)


### Safari

- Safari 10.0


- [tech preview](https://developer.apple.com/safari/technology-preview/release-notes/)
- [release](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Introduction/Introduction.html)


### Edge

- 15019 (Windows Insider Preview (Fast) Desktop)
- 15014 (Windows Insider Preview (Fast) Mobile)
- 15007 (Release date: 01/12/2017)
- 15002 (Release date: 01/09/2017)
- 14986 (Release date: 12/07/2016)

- [change log](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/)


### V8

- 2/6: [V8 Release 5.7](http://v8project.blogspot.jp/2017/02/v8-release-57.html)
  - Native async functions as fast as promises
  - Continued ES2015 improvements
  - RegExp 15 % faster
  - padStart/End, Intl.DateTimeFormat.prototype.formatToParts 
  - WASM enabled
  - etc

## Blink On

blink on 7 で色々出たのでこっちにまとめ

### まとめ

- [セッション](https://docs.google.com/document/d/1jlpsfv0kXCveOEX5l75aATgRXbcAvwyse4Tn6jVprWs/edit#)
- [LT まとめ](https://docs.google.com/spreadsheets/d/1LmQXu9YgrfllLq2lQP7JL8khkUVdHi2Pnl9gvFRXPo8/edit#gid=0)

### セッション

- [State of Speed 2017](https://docs.google.com/presentation/d/1nB5AV8-0us1AbeAScrpjt4u_tf20wOnB5DmOVy_NiEc/edit#slide=id.g1c32d4b274_0_723)
  - Chrome の Speed(広義) の今

- [HTML Imports](https://docs.google.com/presentation/d/1ksnC9Qr3c8RwbDyo1G8ZZSVOEfXpnfQsTHhR5ny9Wk4/edit#slide=id.g1c508fcb31_0_22)
  - ES module を先にという話と現状

### LT

- [State of Chrome's Memory](https://docs.google.com/presentation/d/1s8qy_yPrR1Q3AngHnfHFIlIzoDaoLrBAL-Iy0FHeTOY/edit#slide=id.g1c51f9ea06_0_11)
  - Chrome のメモリ周りの実装のまとめ

- [JavaScript preprocessing/precompilation](https://gist.github.com/addyosmani/4009ee1238c4b1ff6f2a2d8a5057c181)
  - JS のソースをサーバ側で Precompile できないかの議事録
  - パースは意外と遅いので、これを速くするどこかの段階までサーバでやっておきたいという話

- [Loading Reloaded](https://docs.google.com/presentation/d/12fJMXBCUR7uAshbY6shLei3wriJjO5YJxxqFMEAmNaA/edit#slide=id.g1c4e3b0266_0_55)
  - Reload を見直した話
  - 豊島さん

- [WebRTC testing challenges](https://docs.google.com/presentation/d/1zwjRHXTG4VtlVUbP-W6qwUcUa40C1MEhOx-iaSEF-YM/edit#slide=id.g20b7302f09_0_54)
  - WebRTC をテストをどうにかしようという話
  - 問題をよくわかってて期待
  - Ability to insert mocks "underneath" the browser
  - Cross-vendor, cross-host remote-control interfaces
  - Testbench environments that span machines
  - Lots of configured hardware on the bots!

- [Network speed and save-data APIs](https://docs.google.com/document/d/1lWOaN-IFKVyCA-1rp05kqrmzCjI9rPs9Bj-opfQO1bs/edit)
  - chrome には Network Quality Estimator があって、回線状況などがとれる。これを API として出すにはどうするかという Save Data API 周りの話。


- [Understand V8 Performance via Tracing](https://docs.google.com/presentation/d/1m0AZPbSf1SU6-7w13OhBGP23eJMUGrPDOitxrtsXFng/edit#slide=id.g1c3772d87f_0_710)
  - chrome の trace を改善


## TAG Finding

Finding っていう資料が二つ出た。

TODO


## API

- 1/26: [Shared Memory と Atomics が stage 4](http://www.2ality.com/2017/01/shared-array-buffer.html)
  - [ES2017 に入る](http://www.2ality.com/2016/02/ecmascript-2017.html) ことに

- 1/27: [FB のフィードバックでブラウザのキャッシュが改善](https://code.facebook.com/posts/557147474482256)
  - [Chrome は Reload 時のキャッシュの扱いを見直した](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html)
  - FF は挙動を変えることはせず、 Cache-Control: immutable を実装した
  - FB 規模だとベンダとの協力体制のあたり、割と影響力ある

- 1/27: [Edge で WebRTC 1.0 がデフォルト](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/15019/)
  - ORTC とは別に互換のために実装してた機能が表に
  - [公式ブログ](https://blogs.windows.com/msedgedev/2017/01/31/introducing-webrtc-microsoft-edge/)

- 1/30: [ONE URL STANDARD PLEASE](https://daniel.haxx.se/blog/2017/01/30/one-url-standard-please/]
  - URL の仕様が RFC と WHATWG と各実装とあって大変だという話
  - curl の作者の意見なので説得力ある

- 1/30: [Firefox はしばらくゲームに注力するらしい](http://rockridge.hatenablog.com/entry/2017/01/30/004857)
  - FF51: WebGL default
  - FF52: WASM, SharedArrayBuffer default
  - FF53: 64bit install default

- 1/30: [Cookpad が HTTPS 移行だん](https://speakerdeck.com/kanny/cookpad-dot-com-quan-https-hua-falsegui-ji)
  - CSP レポートは kibana とかの方がいいね、 report-uri.io はダメだ。

- 1/30: [テストドリブン Web 標準化](https://blog.whatwg.org/improving-interoperability)
  - WHATWG の標準化プロセスにおいて、テスト作成とブラウザへのバグ報告を推奨した。
  - 思った以上に上手く回っている
  - [テスト](https://github.com/w3c/web-platform-tests/pull/4611) はスペックメンテナの責務ではなくコミュニティベース。([tes the web forward](http://testthewebforward.org/))

- 1/30: [rendering pipeline のパフォーマンス改善](https://blog.chromium.org/2017/01/performance-improvements-in-chromes.html)
  - re-rendering の領域を局所化

- 1/30: [IETF US 開催に懸念](https://www.ietf.org/blog/2017/01/barriers-to-entry/)
  - IETF Chicago の場所を変えるのは遅いが、来れない人帰れない人もいるかもなので、状況を注視。

- 1/31: [Media Session API](https://developers.google.com/web/updates/2017/02/media-session)
  - Android Chrome で media の再生が便利に
  - [sample](https://googlechrome.github.io/samples/media-session)

- 1/31: [Securitry and Frontend Performance](http://www.oreilly.com/webops-perf/free/security-and-frontend-performance.csp)
  - Web のパフォーマンスとセキュリティをあえて一緒に扱う書籍。 CSP, HSTS, ResourceHints, SW など

- 1/31: [Edge の WebRTC1.0 紹介](https://blogs.windows.com/msedgedev/2017/01/31/introducing-webrtc-microsoft-edge/)
  - ORTC, WebRTC1.0 両サポート、 H.264/AVC は HW Enc/Dec だけど VP8 は Soft だからパフォーマンス注意。

- 2/1: [Indefensible: the W3C says companies should get to decide when and how security researchers reveal defects in browsers](https://www.eff.org/deeplinks/2017/02/indefensible-w3c-says-companies-should-get-decide-when-and-how-security)
  - 大事そうな話なのであとで読む

- 2/1: [Chrome for iOS が OSS](https://blog.chromium.org/2017/01/open-sourcing-chrome-on-ios.html)
  - Webkit で レンダリングする iOS 用の Chrome が OSS に

- 2/1: [なぜサポートが終了した Web ブラウザーを使うと危険なのか?](https://blogs.msdn.microsoft.com/osamum/2015/10/08/web-1/)
  - "サポート期間の終了した古い IE に対し、いままでと同じような品質でコンテンツが閲覧できるように精一杯の労力を注いでケアをしても、それはユーザーのためにはならない"

- 2/1: [Etsy での TLS 証明書の扱いかた](https://codeascraft.com/2017/01/31/how-etsy-manages-https-and-ssl-certificates-for-custom-domains-on-pattern/)
  - Custom Domain の場合のパターンが解説されてる

- 2/2: [知っておくべきセキュリティヘッダ](https://blog.appcanary.com/2017/http-security-headers.html)
  - HTTP のヘッダで知っておくべきものリスト

- 2/2: [Front-end Handbook 2017](https://www.gitbook.com/book/frontendmasters/front-end-handbook-2017/details)
  - フロントエンド開発の総合的な知識の本
  - 中身は解説というよりリンク集

- 2/2: [WebVR Rocks](https://webvr.rocks)
  - WebVR のポータル

- 2/2: [Google/Chrome/preload-webpack-plugin](https://github.com/GoogleChrome/preload-webpack-plugin)
  - WebPack で Preload するプラグイン

- 2/2: [Navigation Preload](https://mattto.github.io/sw/demo/navigation-preload/)
  - SW の起動が重くても、それを待たずに fetch を投げられる
  - レスポンスは SW の中で扱える
  - origin trial で chrome 57 から
  - [Service-Worker-Navigation-Preload ヘッダもある](https://twitter.com/horo/status/827321909108838400)

- 2/2: [Android で Add to Home Screen](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen)
  - [chome beta 57](https://blog.chromium.org/2017/02/integrating-progressive-web-apps-deeply.html?m=1)
  - 対 Native で始まった PWA の本懐
  - Intent に登録されて開ける

- 2/2: [Chrome Headless mode](https://www.youtube.com/watch?v=n6biclFh0i0)
  - Head less mode のデモ

- 2/2: [Next.js 2 の話](https://jsmantra.com/next-on-next-js-1a134505f346#.w8idjqiea)
  - もう 2 か、早いな。

- 2/2: [webpack 2 の変更点](https://medium.com/webpack/webpack-2-and-beyond-40520af9067f)
  - tree shaking とか

- 2/2: [AVA 0.18 リリース](https://github.com/avajs/ava/releases/tag/v0.18.0)
  - power asset から magic assert に乗り換え

- 2/2: [URL.createObjectURL(stream) が廃止予定](https://www.fxsitecompat.com/ja/docs/2017/url-createobjecturl-stream-has-been-deprecated)
  - 古い WebRTC アプリが結構壊れそう

- 2/2: [Selenium ライブラリの紹介](http://qiita.com/h_network21/items/a4cbff763b9ee8a7879a)
  - 各言語ごとに紹介

- 2/2: [Using HTTP/2 Responsibly: Adapting for Users](http://alistapart.com/article/using-http-2-responsibly-adapting-for-users)
  - あとで

- 2/3: [Road of the service worker response](https://docs.google.com/presentation/d/1qVj_RSs6EFQXI4RznqMzLk8PcrD0IREeBWnTbozFJXQ/edit#slide=id.g1c5ddbc764_0_531)
  - Navigation preload の解説
  - @loading summit の資料

- 2/3: [Performance of Service Worker controlled pages](https://docs.google.com/presentation/d/1NTj3ncjNc0x3Pa0XRzNyDsFyKj-wYvzXcBmcqrg2JyQ/edit#slide=id.g1c5cb3a2b2_0_150)
  - horo さんの資料
  - @loading summit の資料

- 2/3 [MooTools の歴史](https://betweenthewires.org/between-the-wires-mootools-7ac80d4ca28f)
  - コア開発者インタビュー

- 2/5: [WordPress で複数の改ざん事例](http://d.hatena.ne.jp/Kango/20170205/1486314605)
  - けっこう色々やられてる模様

- 2/6: [WordPress 4.7.2 脆弱性](http://www.ipa.go.jp/security/ciadr/vul/20170206-wordpress.html)
  - [徳丸先生の検証](http://blog.tokumaru.org/2017/02/wordpress-4.7.1-Privilege-Escalation.html)

- 2/6: [The Security Impact of HTTPS Interception](https://zakird.com/papers/https_interception.pdf)
  - HTTPS で MITM があった時のインパクトについての調査
  - あとで

- 2/6: [TLS 本](https://www.feistyduck.com/books/bulletproof-ssl-and-tls/)
  - TLS1.3 にも追従予定らしい

- 2/6: [HTTP2 本](http://shop.oreilly.com/product/0636920052326.do)
  - Akamai の人、オライリーから

- 2/7: [Chrome VP9/SVG DEMO](https://sfu.medooze.com/svc/)
  - Chrome VP9/SVG のデモ
  - SVG のレイヤ選択を SFU に指示して違いを体感
  - chrome --force-fieldtrials=WebRTC-SupportVP9SVC を有効にする必要

- 2/7: [Polyfills and the evolution of the web](https://w3ctag.github.io/polyfills/)
  - Web と共同する上で Polyfill がどうあるべきかという TAG のドキュメント

- 2/7: [How not to feature detect](https://miketaylr.com/posts/2017/02/how-not-to-feature-detect.html)
  - Firefox は Notification を無効にすると window.Notification 自体が消える
  - この feature detect に twitter が引っかかり tweet ボタンでバグがあったらしい
  - 正しい feature detect について解説

- 2/7: [Yahoo広告配信用 s.yimg.jp ドメインでのXSSの解説](https://gist.github.com/mala/1d30e42e9e99520b7a501e9d2458eb49)
  - URL 正規表現の不備による XSS
  - URL パーサの実装にもおかしいものがいくつかあるらしい

- 2/7: [WASM のロゴ投票](https://github.com/WebAssembly/design/issues/980)
  - 投票中

- 2/7: [NASA Node 使ってるって](https://medium.com/@nodejs/ground-control-to-major-tom-how-nasa-uses-node-js-8d011e167436)
  - 宇宙開発の、人の命を預かるところで
  - マジか

- 2/7: [CSS Grid の解説](https://bitsofco.de/css-grid-terminology/)
  - 結構詳しめ

- 2/7: [WASM Performance](http://www.stefankrause.net/wp/?p=405)
  - 各ブラウザでの WASM の速度比較

- 2/8: [&lt;h&gt; タグの追加提案](https://github.com/w3c/html/issues/774)
  - [Jake](https://twitter.com/jaffathecake/status/829329173051211776)
  - 揉めてる

- 2/8: [http2 http2 を拡張した backplane](https://medium.com/backplane/6824d0af3196)
  - あとで

- 2/8: [Code Smells in CSS Revisited](https://csswizardry.com/2017/02/code-smells-in-css-revisited/)
  - 匂い大事

- 2/9: [IPA の AppGoat に脆弱性](http://forest.watch.impress.co.jp/docs/news/1043501.html)
  - 脆弱性学習ツールの脆弱性

- 2/9: [The Evergreen Web](https://w3ctag.github.io/evergreen-web/)
  - ブラウザは常に最新にアップデートしよう
  - ブラウザの実装もちゃんと仕様に追従しよう
  - 組み込む時は適当なサブセット作るのやめよう
  - みたいな TAG の Findig という資料

- 2/9: [JS Start-up Performance](https://medium.com/@addyosmani/javascript-start-up-performance-69200f43b201)
  - devtools で測定しながら

- 2/9: [service-mocker](https://github.com/service-mocker/service-mocker)
  - Service Worker でモックサーバ
  - [誰もが一度は考えるやつ](http://jxck.hatenablog.com/entry/response-injection)

- 2/9: [Wireshark の TLS1.3 対応 動いた](http://d.hatena.ne.jp/ASnoKaze/20170209/1486573451)
  - 動いたらしい

- 2/9: [Firefox 52 ESR では Service Worker とプッシュ通知が無効化されます](https://www.fxsitecompat.com/ja/docs/2017/service-workers-and-push-notifications-are-disabled-on-firefox-52-esr/)
  - 延長サポートバンのみ、アーキテクチャ変更のために一時的に。

- 2/9: [月額課金モデルの Web サービスの設計方法](http://www.bokukoko.info/entry/2017/02/09/001144)
  - ケース別ペイメントサービス設計知見

- 2/9: [仮想 DOM の内部](http://postd.cc/the-inner-workings-of-virtual-dom/)
  - コードレベル、フローレベルでの解説

- 2/10: [エンプラ WebRTC の話](http://iwashi.co/2017/02/10/enterprise-webrtc)
  - エンプラは Chrome より Edge に期待

- 2/10: [mozilla のセキュリティ啓発サイト](https://www.mozilla.org/ja/teach/smarton/)
  - トラッキング、サイバーセキュリティ、サーベイランス

- 2/11: [Extensible web summit](https://app.livestorm.co/bocoup/extensible-web-summit)
  - やるらしい

- 2/11: [React 基礎](http://basic-react.axlight.com/html/)
  - react tutorial on gitbook

- 2/11: [スノーデン引き渡されるか](http://www.jiji.com/jc/article?k=2017021100379)
  - ロシアから引き渡されるかも..