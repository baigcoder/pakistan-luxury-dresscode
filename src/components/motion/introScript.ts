export const INTRO_STORAGE_KEY = "nava-intro-seen";

/** Inline, render-blocking script: skip the curtain for returning visitors. */
export const introSkipScript = `try{if(sessionStorage.getItem("${INTRO_STORAGE_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-intro","skip")}}catch(e){}`;
