import { createSlice } from "@reduxjs/toolkit";
import { words } from "../data";

//Durstenfeld optimization of Fisher-Yates shuffle algorithm
export const shuffleWords = () => {
  let shuffledWords = [...words];
  for (var i = shuffledWords.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledWords[i];
    shuffledWords[i] = shuffledWords[j];
    shuffledWords[j] = temp;
  }
  
  return shuffledWords.map((word) => {
      return word.value
  })
  .slice(0, 50);
};

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    timer: 60,
    isTicking: false,
    showResults: false,
    status: 'idle',
    words: shuffleWords(),
    currentInput: "",
    activeWord: {
      index: 0,
      value: "",
    },
    accuracy: {
      correctWords: 0,
      incorrectWords: 0,
    },
    keyPress: {
      correctKeyPress: 0,
      incorrectKeyPress: 0,
    },
  },
  reducers: {
    countdown: (state, action) => {
      state.timer--;
      if (state.timer === 0) {
        state.showResults = true
      }
    },
    resetApp: (state, action) => {
      state.timer = 60;
      state.words = shuffleWords()
      state.isTicking = false;
      state.activeWord.index = 0
      state.accuracy.correctWords = 0
      state.accuracy.incorrectWords = 0
      state.status = 'idle';
      state.showResults = false
      state.keyPress.correctKeyPress = 0
      state.keyPress.incorrectKeyPress = 0
    },
    startCounting: (state, action) => {
      state.isTicking = true;
      state.activeWord.value = state.words[0]
    },
    updateInput: (state, action) => {
      state.currentInput = action.payload      
      if (action.payload.includes(" ")) {
        if (state.currentInput.trim() === state.activeWord.value) {
          state.accuracy.correctWords++
          state.status = 'idle'
        }
        else {
          state.accuracy.incorrectWords++
          state.status = 'idle'
        }
        if (state.activeWord.index === 49) {
          state.words = shuffleWords()
          state.activeWord.index = -1
        }
        state.activeWord.index++
        state.activeWord.value = state.words[state.activeWord.index]
      }
    },
    compare: (state, action) => {
      if(action.payload.length < 1) {
        state.status = 'idle';
      }
      else if (action.payload === state.activeWord.value.slice(0, action.payload.length)) {
        state.keyPress.correctKeyPress++
        state.status = 'green';
      }
      else {
        state.keyPress.incorrectKeyPress++
        state.status = 'red';
      }
    },
  },
});

export const {countdown, resetApp, startCounting, updateInput, compare} = wordsSlice.actions;
export default wordsSlice.reducer;
