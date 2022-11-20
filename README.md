# [Typract](https://typract-efcc6.web.app/)

## 画面イメージ
**トップページ**
![my app image](https://user-images.githubusercontent.com/104254253/202879911-169433e1-f977-47a8-b284-0d24ac02ac49.png)

**タイピングページ**
![6b288a96-20e5-46ae-9735-ac1c40153051](https://user-images.githubusercontent.com/104254253/202886704-26e927cd-00d0-4f23-ad3c-812190de548c.gif)

**モーダル**
![a97183f0-3899-437e-afa3-55914075c30d](https://user-images.githubusercontent.com/104254253/202886794-0384205d-de9b-43b5-a017-1772d3513865.gif)

## 概要
**Q.どういうサイト？**
> タイピングを練習をしながら、様々な英単語に触れることができるサイトです。

**Q.何ができるの？**
> 主に、タイピングの練習が出来ます。

## 開発についての詳細
**開発背景**
> 過去に[IELTypeS](https://github.com/agukk/IELTypeS)というプロダクトを作成したのですが、そこで処理速度が遅かったり、画面遷移の度に一々ファイルを作成する必要があったりと様々な課題・不都合な点がありました。そこで、それらを解消するのに、SPAの技術を使えば上手くいきそうということで、Reactを用いて作成したというのが、開発背景としてあります。  
  
**開発期間**
> １週間

## 工夫したこと
- チーム開発を意識して、コードを記述したこと。可読性の高いコードを書くことを意識しました。それプラス、フォーマッター(Prettier)を導入して体裁を整えました。
- Atomic Designを活用して、コンポーネント分割をしたこと。
- ビューとロジックを分割したこと。

## 出来なかったこと
- 本番環境でaxiosで外部APIを引っ張ってきて、英単語を表示するはずが、表示するまでに時間がかかりすぎて、表示できなかったこと。
