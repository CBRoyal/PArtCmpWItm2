gsap.to(".smeargle-tail-group", {
    rotate: 15,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});
gsap.to(".smeargle-tail-tip", {
    scaleY: 1.08,
    scaleX: 0.94,
    transformOrigin: "center",
    repeat: -1,
    yoyo: true,
    duration: 0.3
});