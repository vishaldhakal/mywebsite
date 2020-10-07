/* let options = {
    root: navbar,
    rootMargin: '900px',
    threshold: 1.0
  }
// First we select the element we want to target
const target = document.querySelector('.navbar');

// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-change')
    } else {
      entry.target.classList.remove('scroll-change')
    }
  });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection,options);

// Finally start observing the target element
observer.observe(target);
 */