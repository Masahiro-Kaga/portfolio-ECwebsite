001 npm install dotenv and set .env file on Server

https://maku77.github.io/nodejs/env/dotenv.html

002 Delete files and Start

003 Set up based pages and components and install bootstrap router

004 Optimize linking pages and add Error and logoutpage.

005 First fetch to test connection between Front and Back on Register page.

006 Give token to user when user login, and make modal success/fail on register and login.

007 WIth Context, manage state of login user information and share it to all pages/components.

008 If user is not loged in ,Redirect Add Product to Login page.

009 If user is logged in , Redirect to Home from Register and Login page.

010 Toggle active/archive on status of products. 

011 Add update function of product.

012 Add cart and order page/function. 

013 Modified Admin Dashboard and add showing all order. And show one promo item on Home page. 


全てのページの表示
フェッチ
    レジスターしてモンゴに登録されるかどうかチェック。
    Authentication
        localStorageにtokenを格納
        token保持者のみfetch可能なコントローラー
    IsAdmin判定
サーバルータ追加
ベースフェッチ完成

エラー
    bootstrapのimport 'bootstrap/dist/css/bootstrap.min.css';忘れ   
    ボタンをformの中に入れていないとonsubmitが効かない。
    fetchできない→次の順番をしっかり守る。逆だった。
        const dotenv = require("dotenv");
        dotenv.config();
        const port = process.env.PORT || 4001;

 {products.find(item => item._id === product.id)
                    ? ""
                    : products.find(item => item._id === product.id).name
                    }


let randomProductIndex = Math.floor(Math.random() * activeProducts.length)
console.log(activeProducts[randomProductIndex].name)



            <h2>Product Name : {activeProducts[0].name}</h2>
            <Card.Text>Description : {activeProducts[0].description}</Card.Text>
            <Card.Text>Price : {activeProducts[0].price}</Card.Text>


useStateでロード時に初期値を入れてしまう方法。
初期ロード中にundefinedを返す場合はレンダリングしないように条件分岐する方法。



