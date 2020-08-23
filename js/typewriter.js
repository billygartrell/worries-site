var i = 0;
      var txt = `whose morning is the morning?
                 someday you might know -
                 whose daylight is meant to stream
                 across your floor,
                 or through the blinds -
                 across the walls.

                 someday we might know,
                 where morning is the morning.`;

      var speed = 50; /* The speed/duration of the effect in milliseconds */

      //Load typerwrite automatically.
      window.onload = function() {
        setTimeout(function() {typeWriter()}, 3000);
      };

      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("video-text-lines").innerHTML += txt.charAt(i);

          if (txt.charAt(i) === '\n') {
            document.getElementById("video-text-lines").innerHTML += "<br>";
          }

          i++;
          setTimeout(typeWriter, speed);
        }
      }