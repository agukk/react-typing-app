# [Typract](https://typract-efcc6.web.app/)

## 画面イメージ
**トップページ**
![my app image](https://user-images.githubusercontent.com/104254253/202879911-169433e1-f977-47a8-b284-0d24ac02ac49.png)

**タイピングページ**
![6b288a96-20e5-46ae-9735-ac1c40153051](https://user-images.githubusercontent.com/104254253/202886704-26e927cd-00d0-4f23-ad3c-812190de548c.gif)

**モーダル**
![14ec5457-164d-4f8e-bd65-c1fbdf61dc37](https://user-images.githubusercontent.com/104254253/202886892-bf89888f-2370-45d0-afc8-632d32b72d5c.gif)

## 概要
**Q.どういうサイト？**
> タイピングを練習をしながら、様々な英単語に触れることができるサイトです。

**Q.何ができるの？**
> 主に、タイピングの練習が出来ます。

## 開発についての詳細
**開発背景**
> 過去に[IELTypeS](https://github.com/agukk/IELTypeS)というプロダクトを作成したのですが、抱えていた課題点として、処理速度が遅いというユーザー体験を低下させてしまうものがありました。  
> そこで、その課題点を解消するにあたり、ブラウザによるページ遷移を行わずにコンテンツの切り替えなどを行えるSPAの技術を使えば上手くいきそうということで、そこの実証実験的な形で作ってみようという思いから、このプロダクトを作成したというのが、開発背景としてあります。  
  
**開発期間**
> １週間

## 工夫したこと
- チーム開発を意識して、コードを記述したこと。可読性の高いコードを書くことを意識しました。それプラス、フォーマッター(Prettier)を導入して体裁を整えました。
- Atomic Designを活用して、コンポーネント分割をしたこと。
- ビューとロジックを分割したこと。

## 使用技術
- React
- Tailwind css
- HTML

## Q & A
**Q.なぜReactを使ったの？**
> SPA = Reactというのがあったからです。具体的には、過去にUdemyでReactの講座を受講していたことがあったので、そこでそのイメージがついたのかなと思います。
> また別の理由として、Reactなら習得するハードルが低そうというところでReactを使いました。



