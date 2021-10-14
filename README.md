# nest-typeorm-app
NestJSとTypeORMのサンプルです。

## コマンド
マイグレーションファイルを生成。

```sh
yarn typeorm:migration:generate <file_name>
```

マイグレーションを実行。

```sh
yarn typeorm:migration:run
```

マイグレーションをロールバック。

```sh
yarn typeorm:migration:rollback
```
