 jssor_1_slider_init = function() {
        var jssor_1_options = {
          $AutoPlay: false,
          $SlideDuration: 800,
          $SlideEasing: $Jease$.$OutQuint,
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
        var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_1_options);

        /*responsive code begin*/
        /*remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
          var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
          if (refSize) {
            refSize = Math.min(refSize, 1520);
            jssor_1_slider.$ScaleWidth(refSize);
          } else {
            window.setTimeout(ScaleSlider, 30);
          }
        }
        ScaleSlider();
        function MiniScaleSlider() {
          var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
          if (refSize) {
            refSize = Math.min(refSize, 250);
            jssor_2_slider.$ScaleWidth(refSize);
          } else {
            window.setTimeout(ScaleSlider, 30);
          }
        }
        MiniScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*responsive code end*/
      };