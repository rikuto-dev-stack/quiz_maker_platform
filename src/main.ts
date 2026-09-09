import './style.css'
import type { QuizSet } from './types.ts'

const quizSets: QuizSet[] = [
  { id: '1', name: '英単語 中学レベル' },
  { id: '2', name: '歴史年号クイズ' },
]

// document.querySelector<HTMLDivElement>('#app') → index.html内の id="app"
// を持つ要素（<div id="app"></div>）を探して取得する。<HTMLDivElement>は、
// 「これはdiv要素である」という型指定
//
// ! → 「この要素は必ず見つかる（nullにはならない）」とTypeScriptに伝える非null断定演算子
//
// .innerHTML = → 見つけた要素の中身（HTML）を、右辺の値で丸ごと置き換える、という代入
//
// 行末の `（バッククォート） → ここからテンプレートリテラル（複数行にまたがれる特別な
// 文字列）が始まる合図。対応する終わりのバッククォートが現れるまで、その間の改行・
// HTMLタグ・${}の埋め込み値、全てがひとまとまりの1つの文字列として扱われる。
// だからこそ<h1>や<ul>のようなHTMLを複数行にわたって自然に書くことができる
//
// quizSets.map((quizSet) => ...) → 配列の.map()というメソッドは、「配列の各要素に対して、
// 指定した処理を行い、その結果を集めた新しい配列を作る」機能。ここではquizSetsの各要素
// （1つの問題集）を、'<li>${quizSet.name}</li>' という文字列に変換している
//
// (quizSet) => ... → 「アロー関数」という関数の書き方。「quizSetという引数を受け取り、
// => の右側の処理を行う」という意味
//
// .join('') → .map()の結果は「文字列の配列」（例：['<li>英単語...</li>','<li>歴史...</li>']）
// になっている。.join('')はこの配列を1つの文字列に連結する。引数の''は「連結するときに
// 間に何も挟まない」という意味
//
// 最後に、この完成した文字列を${...}で外側の<ul>...</ul>の中に埋め込んでいる
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>クイズ作成プラットフォーム</h1>
    <button id="create-quiz-set-button">新しい問題集を作る</button>
  <ul>
    ${quizSets.map((quizSet) => `<li>${quizSet.name}</li>`).join('')}
  </ul>
  `

//<button id="create-quiz-set-button">新しい問題集を作る</button>
//ボタン要素。あとでこのボタンをTypescript側から探せるようにidをつけている。


  //ボタン要素を取得し、クリックされたときの処理を登録する
  
  //document.querySelector<HTMLButtonElement>(`#create-quiz-set-button`)
  //Ｑ．なぜ、innerHTMLとは別に、もう一度querySelectorをする必要があるのか
  //innerHTML=...で#appの中身を丸ごと新しいHTMLに置き換えた「後で」ないと、
  //その中にある<button>はまだ存在しない。そのため、ボタンを操作するには、HTMLに置き換えた
  //あとでないと、その中にある<botton>はまだ存在しない。そのため、ボタンを操作するためには
  //HTMLを書き込んで後に改めて「このボタンをください」と取得しなおす必要がある。
    //<HTMLButtonElement>は「これはボタン要素である」という型指定。
  
//.addEventListener(`click`,()=>{...})
//クリックというイベントが起きたら、指定した関数を実行してください」
//とブラウザに登録するメソッド。
//()={}は、引数を受け取らないとアロー関数」で、クリックされるたびにこの中身が実行される。

//alert(``)
//ブラウザに警告ダイアログを表示する組み込みの関数。今回は「本来ここで画面を
// 切り替えて処理を作るが、まだ実装していない」ことを示す、一時的な仮の動作として
//使っている
  document.querySelector<HTMLButtonElement>(`#create-quiz-set-button`)!.addEventListener(`click`, () =>{
    alert('問題集作成画面はこれから実装します')
  })

  