import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell value="U" />
        <Cell value="Y" />
        <Cell value="O" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter P is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="present"
        />
        <Cell value="G" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="G" status="absent" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter G is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
