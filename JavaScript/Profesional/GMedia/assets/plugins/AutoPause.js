class AutoPause {
    constructor() {
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilitiyChange = this.handleVisibilitiyChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilitiyChange)
    }
    handleIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold
        //console.log(isVisible)
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
    handleVisibilitiyChange() {
        const isVisible = document.visibilityState ==="visible"
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause