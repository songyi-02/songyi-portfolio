// Import Assets
import hobbyDraw1 from '../img/hobby/hobby_drawing1.png';
import hobbyDraw2 from '../img/hobby/hobby_drawing2.png';
import hobbyKnit1 from '../img/hobby/hobby_knitting1.png';
import hobbyKnit2 from '../img/hobby/hobby_knitting2.png';
import hobbyKnit3 from '../img/hobby/hobby_knitting3.png';

export const hobbySlides = [
    {
        src: hobbyDraw1,
        id: "draw1",
        left: "14vw",
        top: "40vh",
        width: "300px",
        zStart: -400,
        zMid: 0,
        zEnd: 30,
    },
    {
        src: hobbyDraw2,
        id: "draw2",
        right: "5vw",
        top: "15vh",
        width: "409px",
        zStart: -500,
        zMid: 0,
        zEnd: 50,
    },
    {
        src: hobbyKnit1,
        id: "knit1",
        left: "12vw",
        bottom: "14vh",
        width: "360px",
        zStart: -600,
        zMid: -50,
        zEnd: 40,
    },
    {
        src: hobbyKnit2,
        id: "knit2", // This is the trigger point
        right: "10vw",
        bottom: "20vh",
        width: "340px",
        zStart: -550,
        zMid: 0,
        zEnd: 50,
    },
    {
        src: hobbyKnit3,
        id: "knit3",
        left: "10vw",
        top: "30vh",
        width: "320px",
        zStart: -650,
        zMid: -20,
        zEnd: 30,
    }
];
