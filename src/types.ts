//下で使用しているQuestionの中身
export interface Question {
  questionText: string
  choices: [string, string, string, string]
  correctIndex: number
}

//questionsは、作成したものを画面上で一時保存するための新しい配列
export interface QuizSet {
  id: string
  name: string
  questions: Question[]
}