
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll(".hidden");
      console.log(elements);
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('in-view');
            element.classList.remove('hidden');
        }
        else {
            element.classList.add('hidden');
            element.classList.remove('in-view');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();