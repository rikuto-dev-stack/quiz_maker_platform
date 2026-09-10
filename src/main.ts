import './style.css'
import type { QuizSet } from './types.ts'

//quizSetsは、ここで新しく作成した変数
const quizSets: QuizSet[] = [
  { id: '1', name: '英単語 中学レベル' },
  { id: '2', name: '歴史年号クイズ' },
]

//関数を定義する書き方。
  //functionの後に関数名、続けて（）は受け取る引数（今回はなし）
  //voidは、「この関数は何も値を返さない（戻り値なし）」を示す型

  //renderformは、{}内の処理を実行するための関数
function renderHome(): void {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>クイズ作成プラットフォーム</h1>
    <button id="create-quiz-set-button">新しい問題集を作る</button>
    <ul>
      ${quizSets.map((quizSet) => `<li>${quizSet.name}</li>`).join('')}
    </ul>
  `
//<ul></ul>は、リストを表すタグ
//quizSetsは、最初に定義した問題集の配列
//mapは、()内の配列を1個ずつ取り出して、別の形に変換して、その形式で新しい配列を返してねって
//処理ってことだね

//(quizSet) =>は、アロー関数という書き方になる
//これを普通の関数風に書くと、
//function (quizSet) {
//   return `<li>${quizSet.name}</li>`
// }
//となる。
//つまり、「配列から1個取り出したものをquiz.setという名前で受け取ります。」
//という処理


  document.querySelector<HTMLButtonElement>('#create-quiz-set-button')!.addEventListener('click', () => {
    renderCreateQuizSet()
  })
}

//formタグは、複数の入力要素（タグ）を１つのまとまりとして扱うためのHTMLタグとなる。
// <button type="submit">作成する</button>のsubmitは、送信するという意味。

//inputタグは入力欄そのものを作成するタグ
//type="text"は、入力タイプはテキストですよ、requiredは、入力必須、という内容の
function renderCreateQuizSet(): void {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>新しい問題集を作る</h1>
    <form id="create-quiz-set-form">
      <label for="quiz-set-name">問題集の名前</label>
      <input id="quiz-set-name" type="text" required />
      <button type="submit">作成する</button>
    </form>
    <button id="back-to-home-button">ホーム画面に戻る</button>
  `

  document.querySelector<HTMLFormElement>('#create-quiz-set-form')!.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('問題集を作成する処理はこれから実装します')
  })

  //document.querySelectorは、HTMLの中から条件に一致する要素を探す、という意味
  document.querySelector<HTMLButtonElement>('#back-to-home-button')!.addEventListener('click', () => {
    
    //.addEventListener('click'というアロー関数の中に書かれており、
    //「このボタンがクリックされたら、この画面に戻ってください。」
    //という意味。
    renderHome()
  })
}
//main.tsが読み込まれた瞬間に即座に実行される呼び出し
renderHome()