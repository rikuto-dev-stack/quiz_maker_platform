import './style.css'
import type { QuizSet, Question} from './types.ts'

//quizSetsは、ここで新しく作成した変数
const quizSets: QuizSet[] = [
  { id: '1', name: '英単語 中学レベル' , questions: [] },
  { id: '2', name: '歴史年号クイズ' , questions: [] },
]

//関数を定義する書き方。
  //functionの後に関数名、続けて（）は受け取る引数（今回はなし）
  //voidは、「この関数は何も値を返さない（戻り値なし）」を示す型

  //renderformは、ホーム画面を構成しているHTMLを呼び出すための関数
function renderHome(): void {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>クイズ作成プラットフォーム</h1>
    <button id="create-quiz-set-button">新しい問題集を作る</button>
    <ul>
      ${quizSets.map((quizSet) => `<li>${quizSet.name}</li>`).join('')}
    </ul>
  `
//
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
//

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
    
    //event.preventDefault()は、ブラウザが本来やろうとしている動きを止める処理
    //今回の場合は、フォームを送信した際に、ブラウザがページの再読み込みするのを止めるために使っている
    //厳密にいうと、イベントに対して、ブラウザが持っているイベントをキャンセルするためのもの
    event.preventDefault()

    //新しく変数を宣言
    //quiz-set-name
    const nameInput = document.querySelector<HTMLInputElement>('#quiz-set-name')!
    
    //QuiZSet型の変数を新しく作成している
    //
    const newQuizSet: QuizSet = {

      //idで、配列の次の要素番号に格納しますよ、としている
    
    id: String(quizSets.length + 1),
      
      //nameに先ほど宣言したnameInputのものを設定している
    name: nameInput.value,
    questions: [],
  }

   quizSets.push(newQuizSet)
    renderAddQuestion(newQuizSet.id)
  })

  
  //document.querySelectorは、HTMLの中から条件に一致する要素を探す、という意味
  document.querySelector<HTMLButtonElement>('#back-to-home-button')!.addEventListener('click', () => {
    
    //.addEventListener('click'というアロー関数の中に書かれており、
    //「このボタンがクリックされたら、この画面に戻ってください。」
    //という意味。
    renderHome()
  })
}


function renderAddQuestion(quizSetId: string): void {
  //
  //quizSet.id === quizSetIdは、quizSetIdの方から該当するものを探している
  //
  const quizSet = quizSets.find((quizSet) => quizSet.id === quizSetId)!

  //document.querySelector<HTMLDivElement>('#app')!.innerHTML =の部分は、
  //このformタグの中身を表示している部分
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>「${quizSet.name}」に問題を追加</h1>
    <form id="add-question-form">
      <label for="question-text">問題文</label>
      <input id="question-text" type="text" required />

      <label for="choice-0">選択肢1</label>
      <input id="choice-0" type="text" required />
      <label for="choice-1">選択肢2</label>
      <input id="choice-1" type="text" required />
      <label for="choice-2">選択肢3</label>
      <input id="choice-2" type="text" required />
      <label for="choice-3">選択肢4</label>
      <input id="choice-3" type="text" required />

      <label for="correct-index">正解の選択肢の番号（1〜4）</label>
      <input id="correct-index" type="number" min="1" max="4" required />

      <button type="submit">この問題を保存する</button>
    </form>
    <p>現在の問題数: ${quizSet.questions.length}問</p>
    <h2>作成済みの問題</h2>
    <ul id="question-list"></ul>
    
    <button id="finish-button">完了してホームに戻る</button>
  `
  //ここに作成した問題の一覧の内容を作成していく

  const questionList = quizSet.questions.map((question) => {
    return `<li>${question.questionText}</li>`


  })

  document.querySelector<HTMLUListElement>('#question-list')!.innerHTML = questionList.join('')


  document.querySelector<HTMLFormElement>('#add-question-form')!.addEventListener('submit', (event) => {
    event.preventDefault()

    //問題文、選択肢、解答の照合番号の入力欄の要素を格納する変数を作成している
    const questionTextInput = document.querySelector<HTMLInputElement>('#question-text')!
    const choice0Input = document.querySelector<HTMLInputElement>('#choice-0')!
    const choice1Input = document.querySelector<HTMLInputElement>('#choice-1')!
    const choice2Input = document.querySelector<HTMLInputElement>('#choice-2')!
    const choice3Input = document.querySelector<HTMLInputElement>('#choice-3')!
    const correctIndexInput = document.querySelector<HTMLInputElement>('#correct-index')!

    //上で変数に格納した要素からテキストデータだけを取り出す処理
    const newQuestion: Question = {
      questionText: questionTextInput.value,
      choices: [choice0Input.value, choice1Input.value, choice2Input.value, choice3Input.value],
      correctIndex: Number(correctIndexInput.value) - 1,
    }


    quizSet.questions.push(newQuestion)

    renderAddQuestion(quizSetId)
  })

  document.querySelector<HTMLButtonElement>('#finish-button')!.addEventListener('click', () => {
    renderHome()
  })
}
//main.tsが読み込まれた瞬間に即座に実行される呼び出し
renderHome()