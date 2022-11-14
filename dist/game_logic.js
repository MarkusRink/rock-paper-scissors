var Game;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/game_logic.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameSymbol": () => (/* binding */ GameSymbol),
/* harmony export */   "GameVariant": () => (/* binding */ GameVariant),
/* harmony export */   "GameWinner": () => (/* binding */ GameWinner),
/* harmony export */   "calculateWinner": () => (/* binding */ calculateWinner),
/* harmony export */   "runGame": () => (/* binding */ runGame),
/* harmony export */   "toggleGameVariant": () => (/* binding */ toggleGameVariant)
/* harmony export */ });
var GameVariant;
(function (GameVariant) {
    GameVariant[GameVariant["SSP"] = 0] = "SSP";
    GameVariant[GameVariant["SSPB"] = 1] = "SSPB";
})(GameVariant || (GameVariant = {}));
;
var currentGameVariant = GameVariant.SSP;
var numberOfSymbols = 3;
var GameSymbol;
(function (GameSymbol) {
    GameSymbol[GameSymbol["Stein"] = 0] = "Stein";
    GameSymbol[GameSymbol["Papier"] = 1] = "Papier";
    GameSymbol[GameSymbol["Schere"] = 2] = "Schere";
    GameSymbol[GameSymbol["Brunnen"] = 3] = "Brunnen";
})(GameSymbol || (GameSymbol = {}));
;
const leftWins = ["02", "10", "13", "21", "30", "32"];
let displayGameState;
let displayComputerSymbol;
let btnBrunnen;
addEventListener('DOMContentLoaded', () => {
    displayGameState = document.getElementById("displayGameState");
    displayComputerSymbol = document.getElementById("displayComputerSymbol");
    btnBrunnen = document.getElementById("btnBrunnen");
});
function runGame(symbol, computerSymbol = null) {
    if (displayComputerSymbol != undefined || displayGameState != undefined || btnBrunnen != undefined) {
        if (computerSymbol === null) {
            computerSymbol = getRandomInt(0, numberOfSymbols);
        }
        displayGameOutcome(calculateWinner(symbol, computerSymbol), symbol, computerSymbol);
    }
}
var GameWinner;
(function (GameWinner) {
    GameWinner[GameWinner["Player"] = 0] = "Player";
    GameWinner[GameWinner["Computer"] = 1] = "Computer";
    GameWinner[GameWinner["Nobody"] = 2] = "Nobody";
})(GameWinner || (GameWinner = {}));
function displayGameOutcome(winner, symbol, computerSymbol) {
    switch (winner) {
        case GameWinner.Nobody:
            displayGameState.innerText =
                " unentschieden mit "
                    + String(GameSymbol[computerSymbol]);
            displayGameState.style.backgroundColor = '#C1CDE6';
            break;
        case GameWinner.Player:
            displayGameState.innerText =
                String(GameSymbol[symbol])
                    + " gewinnt gegen "
                    + String(GameSymbol[computerSymbol]);
            displayGameState.style.backgroundColor = '#4CE663';
            break;
        case GameWinner.Computer:
            displayGameState.innerText =
                String(GameSymbol[symbol])
                    + " verliert gegen "
                    + String(GameSymbol[computerSymbol]);
            displayGameState.style.backgroundColor = '#E64C4C';
            break;
    }
}
function calculateWinner(symbol, computerSymbol) {
    if (symbol === computerSymbol) {
        return GameWinner.Nobody;
    }
    else if (leftWins.includes(String(symbol) + String(computerSymbol))) {
        return GameWinner.Player;
    }
    else {
        return GameWinner.Computer;
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function toggleGameVariant(variant) {
    switch (variant) {
        case GameVariant.SSP:
            currentGameVariant = GameVariant.SSP;
            btnBrunnen.style.display = "none";
            numberOfSymbols = 3;
            break;
        case GameVariant.SSPB:
            currentGameVariant = GameVariant.SSPB;
            btnBrunnen.style.display = "block";
            numberOfSymbols = 4;
            break;
    }
}



Game = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDdEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ25DLGVBQWUsR0FBRyxDQUFDO1lBQ25CLE1BQUs7S0FDUjtBQUNILENBQUM7QUFHNEM7QUFDUSIsInNvdXJjZXMiOlsid2VicGFjazovL0dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vR2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vR2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9HYW1lLy4vc3JjL2dhbWVfbG9naWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJlbnVtIEdhbWVWYXJpYW50IHtcclxuICBTU1AsXHJcbiAgU1NQQixcclxufTtcclxudmFyIGN1cnJlbnRHYW1lVmFyaWFudCA9IEdhbWVWYXJpYW50LlNTUDtcclxudmFyIG51bWJlck9mU3ltYm9scyA9IDM7XHJcbmVudW0gR2FtZVN5bWJvbCB7XHJcbiAgU3RlaW4sXHJcbiAgUGFwaWVyLFxyXG4gIFNjaGVyZSxcclxuICBCcnVubmVuXHJcbn07XHJcblxyXG4vLyBFeHBlcmltZW50YWwgaWRlYSB0byByZXByZXNlbnQgZ2FtZSB2YXJpYW50cyBhcyBvYmplY3RzLlxyXG4vKipcclxuXHJcbiBjb25zdCBTU1AgPSB7XHJcbiAgIGlkOiAwLFxyXG4gICBzeW1ib2xzOiBbR2FtZVN5bWJvbC5QYXBpZXIsIEdhbWVTeW1ib2wuU3RlaW4sIEdhbWVTeW1ib2wuU2NoZXJlXSxcclxuICB9XHJcbiAgY29uc3QgU1NQQiA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgc3ltYm9sczogW0dhbWVTeW1ib2wuUGFwaWVyLCBHYW1lU3ltYm9sLlN0ZWluLCBHYW1lU3ltYm9sLlNjaGVyZSwgR2FtZVN5bWJvbC5CcnVubmVuXVxyXG4gIH1cclxuKi9cclxuXHJcbi8vdHlwZSBTeW1ib2xzID0gXCJzdGVpblwiIHwgXCJwYXBpZXJcIiB8IFwic2NoZXJlXCIgfCBcImJydW5uZW5cIjtcclxuLy9jb25zdCBzeW1ib2xNYXAgPSB7IHN0ZWluOiAwLCBwYXBpZXI6IDEsIHNjaGVyZTogMiwgYnJ1bm5lbjogMyB9O1xyXG5jb25zdCBsZWZ0V2lucyA9IFtcIjAyXCIsIFwiMTBcIiwgXCIxM1wiLCBcIjIxXCIsIFwiMzBcIiwgXCIzMlwiXTsgLy8gVE9ETyBhZGQgZXhwbGFpbmF0aW9uL2RvY3VtZW50YXRpb25cclxuXHJcbi8vIEhUTUwgZWxlbWVudHNcclxuXHJcbmxldCBkaXNwbGF5R2FtZVN0YXRlOkhUTUxFbGVtZW50O1xyXG5sZXQgZGlzcGxheUNvbXB1dGVyU3ltYm9sOkhUTUxFbGVtZW50O1xyXG5sZXQgYnRuQnJ1bm5lbjpIVE1MRWxlbWVudDtcclxuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBkaXNwbGF5R2FtZVN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5R2FtZVN0YXRlXCIpO1xyXG4gIGRpc3BsYXlDb21wdXRlclN5bWJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheUNvbXB1dGVyU3ltYm9sXCIpO1xyXG4gIGJ0bkJydW5uZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkJydW5uZW5cIik7IC8vIG1heWJlIHJlbmFtZVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHN5bWJvbCBcclxuICogQHBhcmFtIGNvbXB1dGVyU3ltYm9sIGlmIG5vdCBzZXQgYSByYW5kb20gR2FtZVN5bWJvbCwgdXNlZnVsbCBmb3IgZGVidWdnaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBydW5HYW1lKHN5bWJvbDogR2FtZVN5bWJvbCwgY29tcHV0ZXJTeW1ib2w6IEdhbWVTeW1ib2wgPSBudWxsKTogdm9pZCB7XHJcbiAgaWYgKGRpc3BsYXlDb21wdXRlclN5bWJvbCAhPSB1bmRlZmluZWQgfHwgZGlzcGxheUdhbWVTdGF0ZSAhPSB1bmRlZmluZWQgfHwgYnRuQnJ1bm5lbiAhPSB1bmRlZmluZWQpIHtcclxuICAgIGlmIChjb21wdXRlclN5bWJvbCA9PT0gbnVsbCl7XHJcbiAgICAgIGNvbXB1dGVyU3ltYm9sID0gZ2V0UmFuZG9tSW50KDAsIG51bWJlck9mU3ltYm9scyk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5R2FtZU91dGNvbWUoY2FsY3VsYXRlV2lubmVyKHN5bWJvbCwgY29tcHV0ZXJTeW1ib2wpLCBzeW1ib2wsIGNvbXB1dGVyU3ltYm9sKTtcclxuICB9XHJcbn1cclxuXHJcbmVudW0gR2FtZVdpbm5lciB7XHJcbiAgUGxheWVyLFxyXG4gIENvbXB1dGVyLFxyXG4gIE5vYm9keVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5R2FtZU91dGNvbWUod2lubmVyOkdhbWVXaW5uZXIsIHN5bWJvbDpHYW1lU3ltYm9sLCBjb21wdXRlclN5bWJvbDpHYW1lU3ltYm9sKTp2b2lkIHtcclxuICBzd2l0Y2ggKHdpbm5lcil7XHJcbiAgICBjYXNlIEdhbWVXaW5uZXIuTm9ib2R5OlxyXG4gICAgICBkaXNwbGF5R2FtZVN0YXRlLmlubmVyVGV4dCA9IFxyXG4gICAgICBcIiB1bmVudHNjaGllZGVuIG1pdCBcIlxyXG4gICAgICArIFN0cmluZyhHYW1lU3ltYm9sW2NvbXB1dGVyU3ltYm9sXSk7XHJcbiAgICAgIGRpc3BsYXlHYW1lU3RhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDMUNERTYnOyAvLyBsaWdodCBibHVlXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIEdhbWVXaW5uZXIuUGxheWVyOlxyXG4gICAgICBkaXNwbGF5R2FtZVN0YXRlLmlubmVyVGV4dCA9IFxyXG4gICAgICBTdHJpbmcoR2FtZVN5bWJvbFtzeW1ib2xdKSBcclxuICAgICAgKyBcIiBnZXdpbm50IGdlZ2VuIFwiXHJcbiAgICAgICsgU3RyaW5nKEdhbWVTeW1ib2xbY29tcHV0ZXJTeW1ib2xdKTsgICBcclxuICAgICAgZGlzcGxheUdhbWVTdGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRDRTY2Myc7IC8vIGdyZWVuXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIEdhbWVXaW5uZXIuQ29tcHV0ZXI6XHJcbiAgICAgIGRpc3BsYXlHYW1lU3RhdGUuaW5uZXJUZXh0ID0gXHJcbiAgICAgIFN0cmluZyhHYW1lU3ltYm9sW3N5bWJvbF0pIFxyXG4gICAgICArIFwiIHZlcmxpZXJ0IGdlZ2VuIFwiXHJcbiAgICAgICsgU3RyaW5nKEdhbWVTeW1ib2xbY29tcHV0ZXJTeW1ib2xdKTsgICBcclxuICAgICAgZGlzcGxheUdhbWVTdGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0U2NEM0Qyc7IC8vIHJlZFxyXG4gICAgICBicmVha1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKHN5bWJvbDogR2FtZVN5bWJvbCwgY29tcHV0ZXJTeW1ib2w6IEdhbWVTeW1ib2wpOiBHYW1lV2lubmVyIHtcclxuICBpZiAoc3ltYm9sID09PSBjb21wdXRlclN5bWJvbCl7XHJcbiAgICByZXR1cm4gR2FtZVdpbm5lci5Ob2JvZHlcclxuICB9XHJcbiAgZWxzZSBpZiAobGVmdFdpbnMuaW5jbHVkZXMoU3RyaW5nKHN5bWJvbCkgKyBTdHJpbmcoY29tcHV0ZXJTeW1ib2wpKSl7XHJcbiAgICByZXR1cm4gR2FtZVdpbm5lci5QbGF5ZXJcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gR2FtZVdpbm5lci5Db21wdXRlclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIGZyb20gbWRuIGRvY3MuXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXHJcbiAqIEBwYXJhbSBtaW4gaW5jbHVzaXZlIG1pbmltdW0gdmFsdWVcclxuICogQHBhcmFtIG1heCBleGNsdXNpdmUgbWF4aW11bSB2YWx1ZVxyXG4gKiBAcmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgVUkgYW5kIGludGVybmFsIFN0YXRlXHJcbiAqIEBwYXJhbSB2YXJpYW50IFxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlR2FtZVZhcmlhbnQodmFyaWFudDpHYW1lVmFyaWFudCl7XHJcbiAgc3dpdGNoICh2YXJpYW50KXtcclxuICAgIGNhc2UgR2FtZVZhcmlhbnQuU1NQOlxyXG4gICAgICBjdXJyZW50R2FtZVZhcmlhbnQgPSBHYW1lVmFyaWFudC5TU1A7XHJcbiAgICAgIGJ0bkJydW5uZW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBudW1iZXJPZlN5bWJvbHMgPSAzO1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSBHYW1lVmFyaWFudC5TU1BCOlxyXG4gICAgICBjdXJyZW50R2FtZVZhcmlhbnQgPSBHYW1lVmFyaWFudC5TU1BCO1xyXG4gICAgICBidG5CcnVubmVuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIG51bWJlck9mU3ltYm9scyA9IDRcclxuICAgICAgYnJlYWtcclxuICB9XHJcbn1cclxuXHJcbi8vPyBJcyBpdCBwb3NzaWJsZSB0byBleHBvcnQgZnVuY3Rpb25zLCBlLmcuIGNhbGN1bGF0ZVdpbm5lcigpLCBvbmx5IGZvciB0ZXN0aW5nIGFuZCBub3QgcHJvZHVjdGlvbj9cclxuZXhwb3J0IHtHYW1lVmFyaWFudCwgR2FtZVN5bWJvbCwgR2FtZVdpbm5lcn07XHJcbmV4cG9ydCB7Y2FsY3VsYXRlV2lubmVyLCBydW5HYW1lLCB0b2dnbGVHYW1lVmFyaWFudH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9