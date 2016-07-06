# 英語と日本語の間の半角スペースを入れたり消したりする

技術文書(でなくてもそうかもしれないけど)を書くスタイルで、半角と全角の間に半角スペースを入れるか入れないかというのがある。

例えばこういうの

```
有) わたし Linux ちょっとできます。
無) わたしLinuxちょっとできます。
```

自分は「有り」で書くタイプなのだけど、前に @inao さんに「消せ」といわれて消した時に書いたスクリプトが、地味に便利で使っているうちに育ってきた。

https://github.com/dotfiles/bin/space.rb


## 要件

雑に消すだけなら難しくないんだけど、執筆においてはこのくらいができるとうれしい。

- 消したくない場所もある
- 消したスペースを戻せるようにしたい


一つ目の要件は、単純に「半角と全角の間のスペースを消す」だと

```
# りすと

- あ
- い
- う
```

が

```
#りすと

-あ
-い
-う
```

になったりしてしまう。 Markdown は半角記号を多用するので、そこをいい感じに残したい。
Markdown 以外にもいくつかあるが、そこは完全に自分好みに書いた。

二つめの要件は、半角スペースがない文章に対して逆のことをしたいというもの。
また、「消す」->「入れる」をやると整形になる。

```
元) わたし  Linuxちょっとできる
消) わたしLinuxちょっとできる
入) わたし Linux ちょっとできる
```

っていうのがこちら。

最初は単純な sed から書きはじめて、 dotfiles に入れていただけのものがはじまりなので、
Markdown パーサだとか、形態素解析だとか、そういう外部ライブラリを一切使ってない。

が、自分がブログなどを雑に書く分には十分動いてるので、置いておく。