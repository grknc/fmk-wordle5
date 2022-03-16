export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Harika!', 'Başardın', 'Tebrikler!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Harf yeterli değil'
export const WORD_NOT_FOUND_MESSAGE = 'Oyuncu bulunamadı'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Giriş'
export const DELETE_TEXT = 'Sil'
export const STATISTICS_TITLE = 'İstatistik'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Yeni Kelimeler'
export const SHARE_TEXT = 'Paylaş'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Başarı Oranı'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
