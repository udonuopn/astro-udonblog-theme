---
pubDatetime: 2023-08-10 04:00:00
title: 本ブログのホスティングサービスを GitHub Pages から Cloudflare Pages へ変更
postSlug: github_to_clouflare_pages
featured: false
draft: false
tags:
  - othres
  - Cloudflare Pages
ogImage: ""
---

これまでは、本ブログのホスティングサービスは GitHub Pages を利用していたが、今回 Cloudflare Pages に変更した。変更理由は以下の感じ。

- GitHub Pages を無料で使用する場合、リポジトリをPublicにしないとサイトを公開できない
- 単純に Cloudflare Pages を使ってみたかった

CloudflareのことはCDNとしか認識していなかった。しかし、調べてみると思ったよりも色々サービスがあるのと、無料でできる範囲が広くて個人ユーザに優しいことからすこしだけ興味を持った。

## Cloudflare Pages のセットアップ

難しいことはなく、Cloudflareの管理画面の通りに進めていけば、勝手にデプロイされる。やることはせいぜいGitHubへのログインくらい。その他はボタンをポチポチしていればいつの間にやらデプロイされている。

最後に、自分の所持しているドメインのCNAMEにCloudflareから渡されたドメインを登録すれば完成。

## デプロイ

セットアップ時に指定したブランチにpushすれば、あとはCloudflareがいい感じに自動でデプロイしてくれる。GitHub Pages では必要だった`CNAME`や`.github/workflows/deploy.yml`といったファイルが不要になり、リポジトリ内のファイルが減るのもありがたい。