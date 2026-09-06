//exportは、このinterface（型の定義）を、他のファイルからも使えるように
//「外部に公開する」というキーワード。
//付けないと、このファイルの中でしか使えない

//interface QuizSet{}
//interfaceは、Typeciptで「オブジェクトの形（どんなプロパティを持つか）」を
//定義するための機能。QuizSetという名前の型を作っている。
export interface QuizSet {

    //「id・nameという名前のプロパティは、文字列型の（string）でなければならない」
    // というルール
    //この型は、今後「問題集」を表す変数を作るときに、const quiz: QuizSet = {
    //id: "1",name: "英単語"}　のように書くと、Typecriptが「idとnameという
    // ２つの文字列プロパティを必ず持っているか」を自動でチェックしてくれるようになる
    //例えば、nameを書き忘れたり、idに数値を入れてしまったりすると、コンパイル時にエラーで
    //教えてくれる

    id: string
    name: string
}