'use strict';

// FUncion para medir el scroll lateral
const getScrollBarWidth = () => innerWidth - document.documentElement.clientWidth;

document.documentElement.style.setProperty('--scrollBar', getScrollBarWidth);
