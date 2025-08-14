# SUSHI-SAY neo

Figmaデザインから作成された「ひとことネタアプリ」のUI実装です。

## 📱 デザイン概要

- **アプリ名**: SUSHI-SAY neo
- **サブタイトル**: ひとことネタアプリ
- **デザイン**: Figmaから生成されたモバイルアプリUI
- **カラーパレット**: ピンク系グラデーション (#ffe4e3 → #faeede)
- **フォント**: Noto Sans JP (Bold)

## 🚀 実装バージョン

このプロジェクトには2つの実装バージョンが含まれています：

### 1. React + TypeScript バージョン
- モダンなReact Hooksを使用
- TypeScriptによる型安全性
- Viteによる高速開発環境

### 2. Vanilla JavaScript バージョン
- 純粋なHTML/CSS/JavaScript
- 依存関係なし
- シンプルな実装

## 📁 ファイル構成

```
250814/
├── README.md                 # このファイル
├── package.json              # React版の依存関係
├── vite.config.ts           # Vite設定
├── tsconfig.json            # TypeScript設定
├── tsconfig.node.json       # Node.js用TypeScript設定
├── index.html               # React版のエントリーポイント
├── vanilla.html             # Vanilla版のHTML
├── styles.css               # Vanilla版のスタイル
├── script.js                # Vanilla版のJavaScript
├── App.tsx                  # React版のメインコンポーネント（ルート）
├── App.css                  # React版のスタイル
└── src/
    ├── main.tsx             # React版のエントリーポイント
    ├── App.tsx              # React版のメインコンポーネント
    ├── App.css              # React版のスタイル
    └── index.css            # React版のグローバルスタイル
```

## 🛠️ セットアップと実行

### React + TypeScript バージョン

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

### Vanilla JavaScript バージョン

```bash
# ローカルサーバーで実行（例：Python）
python -m http.server 8000

# または、ブラウザで直接ファイルを開く
open vanilla.html
```

## 🎨 デザイン特徴

### レイアウト
- モバイルファーストデザイン (430px × 932px)
- 中央配置のタイトルとサブタイトル
- グラデーション背景
- 丸角の入力フィールドとボタン

### インタラクション
- 入力フィールドのフォーカス効果
- 送信ボタンのホバー効果
- 送信状態の視覚的フィードバック
- Enterキーでの送信対応

### レスポンシブ対応
- 430px以下の画面サイズに対応
- モバイルデバイスでの最適化

## 🔧 技術仕様

### React版
- **フレームワーク**: React 18
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS Modules + カスタムCSS

### Vanilla版
- **言語**: HTML5, CSS3, JavaScript (ES6+)
- **フォント**: Google Fonts (Noto Sans JP)
- **依存関係**: なし

## 📱 機能

- ✅ メッセージ入力
- ✅ 送信ボタンクリック
- ✅ Enterキー送信
- ✅ 送信状態の表示
- ✅ レスポンシブデザイン
- ✅ アニメーション効果

## 🎯 今後の拡張予定

- [ ] バックエンドAPI連携
- [ ] メッセージ履歴表示
- [ ] ユーザー認証
- [ ] リアルタイム通信
- [ ] PWA対応

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。

---

**注意**: このプロジェクトはFigmaデザインの学習目的で作成されています。
