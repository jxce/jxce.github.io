/**
 * Created by dadi on 2018/9/21.
 */

(function ($) {
  Drupal.behaviors.sysuZocStatistics = {
    first: true,
    attach: function (context, settings) {
      if (!this.first) return false;
      if (settings.statistics.url) {
        // for page statistics
        $.ajax({
          url: settings.statistics.url,
          type: "GET",
          success: function(data){
            if(data.status){
              $(".page-views-number").html(data.views);
            }
          }
        });
      }
      this.first = false;
    }
  };
})(jQuery);
