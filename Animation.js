// BEGIN: LOGO ANIMATION CODE -------------------------------------------------
// animation presets
const boot = [
    [{ transform: "translate(0, -17%) rotate(135deg) " }],
    [{ transform: "translate(0, -17%) rotate(-45deg)" }],
    [{ transform: "translate(-50%, 45.5%) rotate(90deg) matrix(-1, 0, 0, 1, 0, 0)" }],
    [{ transform: "translate(34%, -51%) rotate(225deg)" }],
    [{ transform: "translate(0, 20%) rotate(0deg)" }],
    [{ transform: "translate(25%, 20%) rotate(90deg)" }],
    [{ transform: "translate(60.5%, 56.75%) rotate(225deg)" }]
];

const huis = [
    [{ transform: "translate(-6%, -24%) rotate(-135deg)" }],
    [{ transform: "translate(0, 12%) rotate(-45deg)" }],
    [{ transform: "translate(3.5%, 10%) rotate(90deg) matrix(-1, 0, 0, 1, 0, 0)" }],
    [{ transform: "translate(17%, 29%) rotate(-45deg)" }],
    [{ transform: "translate(3%, -41%) rotate(0deg)" }],
    [{ transform: "translate(0%, 12%) rotate(-45deg)" }],
    [{ transform: "translate(1%, 48%) rotate(-135deg)" }]
];

const vos = [
    [{ transform: "translate(4%, -35%) rotate(-135deg)" }],
    [{ transform: "translate(-30%, 50%) rotate(180deg)" }],
    [{ transform: "translate(-55%, 50%) rotate(0deg)" }],
    [{ transform: "translate(20%, -55%) rotate(45deg)" }],
    [{ transform: "translate(20%, -55%) rotate(45deg)" }],
    [{ transform: "translate(-15%, -20%) rotate(-135deg)" }],
    [{ transform: "translate(-2.5%, -25%) rotate(90deg)" }]
];

const windmolen = [
    [{ transform: "translate(-25%, 51%) rotate(90deg)" }],
    [{ transform: "translate(25%, 0) rotate(0deg)" }],
    [{ transform: "translate(20%, -18%) rotate(-45deg) matrix(-1, 0, 0, 1, 0, 0)" }],
    [{ transform: "translate(-15%, -17%) rotate(135deg)" }],
    [{ transform: "translate(20%, -52%) rotate(45deg)" }],
    [{ transform: "translate(-52%, -54%) rotate(-45deg)" }],
    [{ transform: "translate(38%, -35%) rotate(135deg)" }]
];

const vogel = [
    [{ transform: "translate(10%, 20%) rotate(90deg)" }],
    [{ transform: "translate(-26%, -1%) rotate(-135deg)" }],
    [{ transform: "translate(29%, 2%) rotate(135deg)" }],
    [{ transform: "translate(9%, 32%) rotate(135deg)" }],
    [{ transform: "translate(-34%, -56%) rotate(0deg)" }],
    [{ transform: "translate(-34%, -4%) rotate(180deg)" }],
    [{ transform: "translate(4%, 5%) rotate(-135deg)" }]
];

const zwaan = [
    [{ transform: "translate(36%, 46%) rotate(45deg)" }],
    [{ transform: "translate(0, 12%) rotate(-45deg)" }],
    [{ transform: "translate(-52%, 30%) rotate(45deg)" }],
    [{ transform: "translate(-34%, 12%) rotate(-135deg)" }],
    [{ transform: "translate(-16%, -6%) rotate(135deg)" }],
    [{ transform: "translate(26%, 20%) rotate(-135deg)" }],
    [{ transform: "translate(25%, 36%) rotate(-90deg)" }]
];

const vliegtuig = [
    [{ transform: "translate(0, 0) rotate(90deg)" }],
    [{ transform: "translate(0, 0) rotate(-90deg)" }],
    [{ transform: "translate(49%, -36%) rotate(135deg)" }],
    [{ transform: "translate(-51%, 12.5%) rotate(0deg)" }],
    [{ transform: "translate(-25%, -12.5%) rotate(0deg)" }],
    [{ transform: "translate(0, -12.5%) rotate(90deg)" }],
    [{ transform: "translate(-88%, 20%) rotate(-45deg)" }]
];

const toren = [
    [{ transform: "translate(-25%, 51%) rotate(90deg)" }],
    [{ transform: "translate(25%, 0) rotate(0deg)" }],
    [{ transform: "translate(-40%, -24%) rotate(90deg)" }],
    [{ transform: "translate(0, -50%) rotate(0deg)" }],
    [{ transform: "translate(-13%, -50%) rotate(0deg)" }],
    [{ transform: "translate(0, -25%) rotate(-180deg)" }],
    [{ transform: "translate(12%, 26%) rotate(-90deg)" }]
];

const empty = [
    [{ transform: "translate(0, 0) rotate(0deg)" }],
    [{ transform: "translate(0, 0) rotate(0deg)" }],
    [{ transform: "translate(0, 0) rotate(0deg)" }],
    [{ transform: "translate(0, 0) rotate(0deg)" }],
    [{ transform: "translate(0, 0) rotate(0deg)" }],
    [{ transform: "translate(0, 0) rotate(0deg)" }],
    [{ transform: "translate(0, 0) rotate(0deg)" }]
];

const timing = {
    duration: 500,
    fill: "forwards",
};

// initialize animation
let presets = [boot, huis, vos, windmolen, vogel, zwaan, vliegtuig, toren];
let animations = [null, null, null, null, null, null, null];

let animation = null;
if (Math.random() < 0.1) { // hier kiezen hoe vaak er een animatie afspeelt!
    animation = presets[Math.floor(Math.random() * presets.length)];
    console.log("ANIMATIE!")
} else {
    animation = empty;
}
for (let i = 1; i < 8; i++) {
    animations[i - 1] = document.getElementById("Logo" + i).animate(animation[i - 1], timing);
    animations[i - 1].playbackRate = -1;
    animations[i - 1].finish();
}

// animation playback control
document.getElementById("LogoDiv").addEventListener("mouseenter", startAnimation);
document.getElementById("LogoDiv").addEventListener("mouseleave", stopAnimation);
function startAnimation() {
    for (let i = 0; i < 7; i++) {
        animations[i].playbackRate = 1;
    }
}

function stopAnimation() {
    for (let i = 0; i < 7; i++) {
        animations[i].playbackRate = -1;
    }
}