## 起動方法

1. Docker を立ち上げる

```bash
$ docker-compose up
```

2. 立ち上げたコンテナ内で開発サーバを立ち上げる

```bash
$ docker-compose exec frontend bash
// 以下はコンテナ内
app/ $ npm install
app/ $ npm run dev
```

3. localhost:3000 を確認する
