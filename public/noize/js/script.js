function buildThresholdList(numOfSteps) {
    let thresholds = [];
  
    for (let i = 1.0; i <= numOfSteps; i++) {
      let ratio = i / numOfSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  ANIMATION_CLASS='.animate__animated'
  ANIMATION_TYPE='animate__fadeInUpBig'
  
  // getting cards to listen to
  const cards = document.querySelectorAll(ANIMATION_CLASS);
  
  // Set things up
  window.addEventListener(
    "load",
    event => {
      createObserver();
    },
    false
  );
  
  function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
  
    // pass objects to observe
    cards.forEach(card => {
      observer.observe(card);
    });
  }
  
  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      // the condition that needs changing
      entry.target.classList.toggle(ANIMATION_TYPE, entry.isIntersecting);
    //   entry.target.style.opacity = entry.intersectionRatio.toFixed(2);
      console.log(entry.intersectionRatio.toFixed(2));
  
    //   run once
      if (entry.isIntersecting)
          observer.unobserve(entry.target)
    });
  }