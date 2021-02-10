document.addEventListener("DOMContentLoaded", () => {
    let tl = new TimelineMax();

    tl.fromTo(
            ".bg-loader",
            1, { width: "100%" }, { width: "0%", delay: 5, ease: Expo.easeInOut }
        )
        .fromTo(".bg-video",
            1.8, { width: "0%", opacity: 0 }, { width: "100%", opacity: 1, ease: Expo.easeInOut }, '-=1')
        .fromTo(".menu-logo",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".nav-list",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".nav-social",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".info-img",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".info-text",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".info-button",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".info-shop",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo(".container-img",
            0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')

});