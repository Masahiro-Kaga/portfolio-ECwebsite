001 npm install dotenv and set .env file on Server

https://maku77.github.io/nodejs/env/dotenv.html

002 Delete files and Start

003 Set up based pages and components and install bootstrap router

004 Optimize linking pages and add Error and logoutpage.



全てのページの表示
フェッチ
    レジスターしてモンゴに登録されるかどうかチェック。
サーバルータ追加
ベースフェッチ完成

エラー
    bootstrapのimport 'bootstrap/dist/css/bootstrap.min.css';忘れ   
    ボタンをformの中に入れていないとonsubmitが効かない。
    fetchできない→次の順番をしっかり守る。逆だった。
        const dotenv = require("dotenv");
        dotenv.config();
        const port = process.env.PORT || 4001;