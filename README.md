# セキトリ
![ロゴマーク](https://user-images.githubusercontent.com/38364091/59153933-822f0c80-8aa1-11e9-8873-5274fa17b3b5.png "ロゴ")
## プロダクト概略
このDAppはレストランの予約システムです。レストランの各席、30分単位の時間がNFTとなり、ユーザーはそのNFTを購入することでレストランを予約することができます。ユーザーが実際に店に訪れるときに、店側がそのNFTを買い戻す形で席料をキャッシュバックします。
また、ユーザーは購入（予約）したNFTを他人に売却することができるため、仮に行けなくなってもそのNFTを売ることができればキャンセル料は払う必要はありません。
店側も無断キャンセルを回避することができます。

## 使用方法
通常のレストラン予約サイトの様に席を予約することができます。
予約した席とその時間は他のユーザーに売ることができます。

## 今後の課題
今後実装したい機能は以下となります。
- コース料理も予約できる様にする（現状席のみ予約可能）
- ユーザーが席を売るときに金額を指定できる様にする（現状購入した値段のままでしか売れないため）
- 売りに出されている席の一覧をお得情報としてウェブサイトで表示させる
- 売りに出されている席の情報をTwitter等で公開して、簡単に席の購入を促せる様にする
- 下記画像の様に具体的な席名ではなく、予約人数で予約できる様にする

![予約画面](https://user-images.githubusercontent.com/38364091/59154045-96283d80-8aa4-11e9-96d8-322dc0a65553.png "予約画面")

## 学んだこと
実装よりアイデア出しの方が大変でした。ほとんどのアイデアはブロックチェーンがなくても実現できるアイデアで、ブロックチェーンの特徴を上手く使っているサービスはなかなか思いつきませんでした。
また、全てをブロックチェーン上で行うというのは現実的ではなく、どの情報をブロックチェーンにのせ、どの情報をブロックチェーン外の情報として受け取るかという議論はもっと詰める必要があると感じました。

## Description
This DApp is a restaurant booking system. A restaurant's each table and every 30 minutes of the table will be NFT and users can book the table by buying the NFT. When users show up, the restaurant will pay back by buying the NFT.
Also, users can sell the NFT the users purchased, and thus, they don't have to pay the cancel fee if they can sell the NFT.
In this use case, restaurants can avoid cancellations without notice.

## Usage
You can reserve a table online like general web site.
You can sell the slot you booked to other users.

## Future plan
We would like to build the following functions
- Let users book courses（Currently, users can book only tables）
- Let users decide the price when they sell the reservation（Currently, users cannot change the price）
- Let users publish information such as available table lists users would like to sell
- Let users book a table with the information that is about the number of people, not a table itself

## Dependency
Solidity version: 0.5.0  
Truffle version: 5.0.1  
Web3.js version: 1.0.0
