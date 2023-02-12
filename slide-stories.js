class SlideStories {
  constructor(images, thumb, buttonPrev, buttonNext) {
    this.images = document.querySelectorAll(images);
    this.buttonPrev = document.querySelector(buttonPrev);
    this.buttonNext = document.querySelector(buttonNext);
    this.thumb = document.querySelector(thumb);
    this.activeClass = 'active'
    this.init();
  }

  changeStoryActive() {
    this.images.forEach((image) => image.classList.remove(this.activeClass));
    this.images[this.index.active].classList.add(this.activeClass);

    this.thumbItems.forEach((thumbItem) => thumbItem.classList.remove(this.activeClass));
    this.thumbItems[this.index.active].classList.add(this.activeClass);
  }

  changeStories(index) {
    this.indexStories(index);
    this.changeStoryActive();
    this.autoSlide();
  }

  prev() {
    this.changeStories(this.index.prev);
  }

  next() {
    this.changeStories(this.index.next);
  }

  indexStories(index) {
    const last = this.images.length - 1;
    this.index = {
      prev: index ? index - 1 : last,
      active: index,
      next: index === last ? 0 : index + 1,
    };
  }

  autoSlide() {
    clearTimeout(this.slideTimeout);
    this.slideTimeout = setTimeout(this.next, 5000);
  }

  addSlideStoriesEvents() {
    this.buttonPrev.addEventListener('click', this.prev);
    this.buttonNext.addEventListener('click', this.next);
  }

  addThumbItems() {
    this.images.forEach(() => this.thumb.innerHTML += '<span></span>');
    this.thumbItems = Array.from(this.thumb.children);
  }

  bindEvents() {
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  init() {
    this.bindEvents();
    this.addThumbItems();
    this.addSlideStoriesEvents();
    this.changeStories(0);
  };
}

new SlideStories('.slide-items > *', '.slide-thumb', '.slide-prev', '.slide-next');
