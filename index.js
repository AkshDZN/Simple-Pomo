let toggleState = 1;
let toggleDirection = 0;

let toggleKnob = document.getElementById('toggleKnob');
let toggle = document.getElementById('toggle');
let timerSelected = document.getElementById('timerSelected');
let normalState = document.getElementById('normal');
let shortState = document.getElementById('short');
let longState = document.getElementById('long');

longState.style.opacity = '0';
shortState.style.opacity = '0';


function changeState() {
    console.log(toggleState,'//',toggleDirection);
    changeStateAnim();
    showOrHideTimerSelected();
    if (toggleState === 3) {
        toggleDirection = 1;
    } else if (toggleState === 1) {
        toggleDirection = 0;
    }

    if (toggleDirection === 0) {
        toggleState++;
    } else if (toggleDirection == 1) {
        toggleState--;
    }

}

function changeStateAnim() {
    if (toggleState === 1) {
        toggleKnob.style.translate = '0px';

        normalState.style.translate = '0px';
        normalState.style.opacity = '100';

        shortState.style.translate = '0px';
        shortState.style.opacity = '0';

        longState.style.translate = '0px';
        longState.style.opacity = '0';

    }else if (toggleState === 2) {
        toggleKnob.style.translate = '46px';

        normalState.style.translate = '46px';
        normalState.style.opacity = '0';

        shortState.style.translate = '46px';
        shortState.style.opacity = '100';

        longState.style.translate = '46px';
        longState.style.opacity = '0';



    }else if (toggleState === 3) {
        toggleKnob.style.translate = '94px';

        normalState.style.translate = '94px';
        normalState.style.opacity = '0';

        shortState.style.translate = '94px';
        shortState.style.opacity = '0';

        longState.style.translate = '94px';
        longState.style.opacity = '100';


    }
}

function showOrHideTimerSelected() {
    if (toggleState === 1) {
        timerSelected.style.opacity = '100';
        timerSelected.style.width = '162px';
    } else {
        timerSelected.style.opacity = '0';
        timerSelected.style.width = '300px';
    }
}