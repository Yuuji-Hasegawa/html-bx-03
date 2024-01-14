# html-bx-03

- CSS/JS/画像を用意するためのボイラープレートです
- Node.js を使用します
- モジュールバンドルとして[Vite](https://ja.vitejs.dev/)を使用します
- 各種設定は必要に応じて変更してください

## 使い方（と想定シチュエーション）

1. zip 形式で本リポジトリをダウンロード or `git clone xx` で別の名前をつけてclone
2. zip ファイルを解凍し、フォルダ名を任意のプロジェクト名に変更する or `git remote set-url origin xx` で任意のリポジトリに紐付ける
3. プロジェクトのディレクトリに移動し、`pnpm install`コマンドを実行してパッケージをインストールする
4. 必要に応じて、README.md や各種設定ファイルを編集する
5. `pnpm image`や`pnpm icon`で画像を加工してから、`pnpm dev`で開発を始める
6. `pnpm build`で`dist`へ出力される`css/style.css`と`js/app.js`等を個々のプロジェクトへ移動させて、ご利用ください

## コマンド

- `dev`  
  開発用サーバーを立ち上げる。

- `build`  
  ビルドする。  
  ビルド後の HTML ファイルは Prettier でフォーマットされる。

- `preview`  
  ローカルで静的なサーバーを起動し、dist のファイルを localhost で配信する。プロダクションビルドが問題ないかどうかを自分のローカル環境で確認するために使用する。

- `lint`  
  lint する。

- `fix`  
  fix する。

- `image`  
  `src/images`内の画像を`src/public/img`へ最適化、WebP 等を出力する。  
  `dev`より先の実行を想定

- `icon`  
  `src/public/icons/icon.png`をリサイズ。750px \* 750px から小さいものを生成  
  `dev`より先の実行を想定

## コーディングルール

### HTML

#### フォーマッター

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)を使用する

### CSS

- 原則として、SCSS ファイルをコンパイルして生成した CSS ファイルを直接編集することは避けた方が良い
- EVERY LAYOUTをオレオレ解釈したObjectとComponent、utilityで構築することを想定

### SCSS

#### コンパイラ

- [Dart Sass](https://github.com/sass/dart-sass)を使用する

#### CSS プロセッサー

- [PostCSS](https://github.com/postcss/postcss)を使用する
- プラグインとして以下を使用する
  - [autoprefixer](https://github.com/postcss/autoprefixer)

#### リンター・フォーマッター

- [stylelint](https://stylelint.io/)を使用する
- ベースのルールとして[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)を使用する

### JavaScript

#### モジュールバンドラ

- [Vite](https://ja.vitejs.dev/)を使用する。

#### リンター・フォーマッター

- [ESLint](https://eslint.org/)を使用する
- ベースのルールとして[eslint:recommended](https://eslint.org/docs/rules/)を使用する
- プラグインとして以下を使用する
  - [eslint-plugin-css-import-order](https://www.npmjs.com/package/eslint-plugin-css-import-order)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
  - [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
