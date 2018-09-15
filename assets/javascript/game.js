/**
                            __        __  
      ____________  _______/ /_____ _/ /  
     / ___/ ___/ / / / ___/ __/ __ `/ /   
    / /__/ /  / /_/ (__  ) /_/ /_/ / /    
    \___/_/   \__, /____/\__/\__,_/_/     
             /____/         __            
  _________  / / /__  _____/ /_____  _____
 / ___/ __ \/ / / _ \/ ___/ __/ __ \/ ___/
/ /__/ /_/ / / /  __/ /__/ /_/ /_/ / /    
\___/\____/_/_/\___/\___/\__/\____/_/     
                                          
 */

// Global constants
const targetNumberMin = 19;
const targetNumberMax = 120;
const crystalValMin = 1;
const crystalValMax = 12;

// Global variables
var gameState; // 0 = Game loop active, 1 = lose state, 2 = win state
var targetNumber;
var clickCount;

// jquery DOM objects
var $displayTargetNumber = $('#display-target-number');
var $displayCrystalSum = $('#display-crystal-sum');
var $displayGameState = $('#display-game-state');
var $aCrystal = $('#a-crystal');
var $bCrystal = $('#b-crystal');
var $cCrystal = $('#c-crystal');
var $dCrystal = $('#d-crystal');

// Main Game Logic
$(document).ready(function() { 
    initGameEnvironment();
    // Start handling click events
    $('.crystal').on('click', function() {
        clickCount++;
        // Increments crystalSum by the value of the clicked crystal
        crystalSum += Number($(this).attr('value'));
        $displayCrystalSum.text(crystalSum);
        // Sets game state 
        gameState = checkCrystalSum();
        // Handles game state
        checkGameState(gameState);
    }) // End .on(click)
}) // End .ready()

/**************************
 * Function Definitions
***************************/

/** initGameEnvironment()
 *  Resets game state and values on start, win, or loss
 *  Returns nothing.
 */
function initGameEnvironment() {
    clickCount = 0;
    gameState = 0;
    targetNumber = genNumber(targetNumberMin, targetNumberMax);
    crystalSum = 0;
    
    genCrystalValues(crystalValMin, crystalValMax);

    $displayTargetNumber.html(targetNumber);
    $displayCrystalSum.html(crystalSum);

} // End initGameEnvironment()

/** genTargetNumber()
 *  Generates a random number between `min` and `max`
 *  Accepts minimum value, maximum value
 *  Returns:
 *      a number
 */
function genNumber(min, max) {
    var generatedNumber = Math.floor(Math.random() * (max - min) + min);  
    return generatedNumber;
} // End genTargetNumber()

/** genCrystalValues()
 *  Generates individual random values for each crystal using genNumber(), storing them in its DOM element's value attribute.
 *  Accepts: minimum value, maximum value
 *  Returns nothing
 */
function genCrystalValues(min, max) {
    $aCrystal.attr('value', genNumber(min, max));
    $bCrystal.attr('value', genNumber(min, max));
    $cCrystal.attr('value', genNumber(min, max));
    $dCrystal.attr('value', genNumber(min, max));

    // TODO: assign a random .svg from assets/images/crystals/ for each crystal
    // $aCrystal.load('assets/images/crystals/$crystalImages[i])
    // or
    // $aCrystal.attr('src', 'assets/images/crystals/' + 'crystal' + genNumber(1, n) + '.svg');
} // End genCrystalValues()

/** checkCrystalSum()
 *  Checks crystalSum against targetNumber and returns a game state.
 *  Accepts no arguments.
 *  Returns:
 *      0 if gameplay is still active.
 *      1 if in lose state.
 *      2 if in win state.
 */
function checkCrystalSum() {
    if ( crystalSum > targetNumber ) {
        return 1;
    }
    else if ( crystalSum === targetNumber ) {
        return 2;
    }
    else
        return 0;
} // End checkCrystalSum()

/** checkGameState
 *  Handles current state of game. Displays state info for player.
 *  Accepts: game state variable
 *  Returns nothing.
 */
function checkGameState(state) {
    if (gameState === 1) {
        $displayGameState.html('(；一_一) Went over target number in ' + clickCount + ' clicks. Try to hit the exact target number.');
        initGameEnvironment();
    }
    // Win state
    else if (gameState === 2) {
        $displayGameState.html('(づ￣ ³￣)づ Nice! Target number hit in ' + clickCount + ' clicks! Try that again with fewer clicks.');
        initGameEnvironment();
    }
    // Active state
    else 
        $displayGameState.html('Keep going');
} // End checkGameState()
