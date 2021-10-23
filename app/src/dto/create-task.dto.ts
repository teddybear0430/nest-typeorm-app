import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

// MEMO: DTOとは？
// 関連するデータを一つにまとめ、
// データの格納・読み出しのためのメソッドを定義したオブジェクトのこと。
// 異なるプログラム間やコンピュータ間でひとまとまりのデータを受け渡す際に
// 用いられる。
// https://e-words.jp/w/DTO.html
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255, {
    message: 'Title is too long',
  })
  title: string;
}
