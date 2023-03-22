(() => {
  class ProgressBar {
    constructor(elem) {
      this.bar = elem;
      this.currentBar = elem.querySelector('.progress-bar__current');
      this.currentProgress = 0;
    }

    _move() {
      if (this.currentProgress === 100) {
        this.stop();
      } else {
        ++this.currentProgress;
        this.currentBar.style.width = this.currentProgress + '%';
      }
    }

    start() {
      this.interval = setInterval(() => {
        this._move();
      }, 50);
    }

    stop() {
      clearInterval(this.interval);
    }
  }

  const progressBarElem = document.querySelector('.progress-bar');
  const startDownloadBtn = document.querySelector('.start-button');
  const stopDownloadBtn = document.querySelector('.stop-button');

  const fileDownloadProgressBar = new ProgressBar(progressBarElem);

  startDownloadBtn.addEventListener('click', () => {
    fileDownloadProgressBar.start();
  });

  stopDownloadBtn.addEventListener('click', () => {
    fileDownloadProgressBar.stop();
  });
})();
