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
var gameState;
var targetNumber;
var crystalSum;
var aCrystalVal;
var bCrystalVal;
var cCrystalVal;
var dCrystalVal;

// jquery DOM objects
var $displayTargetNumber = $('#display-target-number');
var $displayCrystalSum = $('#display-crystal-sum');
//var $aCrystal = $('#a-crystal');
//var $bCrystal = $('#b-crystal');
//var $cCrystal = $('#c-crystal');
//var $dCrystal = $('#d-crystal');
/*
const $crystalImages = [
    crystal01.svg, crystal02.svg, crystal03.svg, crystal04.svg,
    crystal05.svg, crystal06.svg, crystal07.svg, crystal08.svg,
    crystal09.svg, crystal10.svg, crystal11.svg, crystal12.svg,
];
*/

// Main Game Logic
$(document).ready(function() { 
    initGameEnvironment();
    // Start handling click events
    $('.crystal').on('click', function() {

    }) // End .on(click)
// End Main Game Logic

}) // End .ready()

/**************************
 * Function Definitions
***************************/

/** initGameEnvironment()
 *  Resets game state and values on start, win, or loss
 *  Returns nothing.
 */
function initGameEnvironment() {
    gameState = 0;
    targetNumber = genNumber(targetNumberMin, targetNumberMax);
    crystalSum = 0;
    
    genCrystalValues(crystalValMin, crystalValMax);

    $displayTargetNumber.html(targetNumber);
    $displayCrystalSum.html('crystalSum = ' + crystalSum);

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
 *  Generates individual random values for each crystal using genNumber(), storing them in its global variable.
 *  Accepts: minimum value, maximum value
 *  Returns nothing
 */
function genCrystalValues(min, max) {
    aCrystalVal = genNumber(min, max);
    bCrystalVal = genNumber(min, max);
    cCrystalVal = genNumber(min, max);
    dCrystalVal = genNumber(min, max);
    
    // TODO: assign a random .svg from assets/images/crystals/ for each crystal
    // $aCrystal.load('assets/images/crystals/$crystalImages[i])
    // or
    // $aCrystal.attr('src', 'assets/images/crystals/' + 'crystal' + genNumber(1, n) + '.svg');
} // End genCrystalValues()

/** crystalCounter()
 * 
 */
function crystalCounter(crystalValue) {


}
