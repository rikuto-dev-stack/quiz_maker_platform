//問題の情報を格納するための配列
export interface Question {
  questionText: string
  choices: [string, string, string, string]
  correctIndex: number
}

//問題集の情報を管理するための配列
export interface QuizSet {
  id: string
  name: string
  questions: Question[]
}