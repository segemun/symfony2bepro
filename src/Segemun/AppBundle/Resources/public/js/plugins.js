/* file:           plugins.js
 * version:        1.3
 * last update:   23.03.2014
 * description:    All template plugins included in this file 
*/

$(document).ready(function(){
 
    /* mCustomScrollbar */    
    $(".page-navigation").mCustomScrollbar({autoHideScrollbar: true,scrollInertia: 20, advanced: {autoScrollOnFocus: false}});
    
    gScroll = {
        init: function(container){
            if($(container+" .scroll").length > 0) 
               $(container+" .scroll").mCustomScrollbar({autoHideScrollbar: true, advanced: {autoScrollOnFocus: false}});
        }
    }
    
    $(".modal").on("shown.bs.modal",function(){
        $(this).find(".scroll").mCustomScrollbar("update");
    });        
    /* eof mCustomScrollbar */
  
    /* My Custom Progressbar */
    $.mpb = function(action,options){

        var settings = $.extend({
            state: '',            
            value: [0,0],
            position: '',
            speed: 20,
            complete: null
        },options);

        if(action == 'show' || action == 'update'){
            
            if(action == 'show'){
                $(".mpb").remove();
                var mpb = '<div class="mpb '+settings.position+'">\n\
                               <div class="mpb-progress'+(settings.state != '' ? ' mpb-'+settings.state: '')+'" style="width:'+settings.value[0]+'%;"></div>\n\
                           </div>';
                $('body').append(mpb);
            }
            
            var i  = $.isArray(settings.value) ? settings.value[0] : $(".mpb .mpb-progress").width();
            var to = $.isArray(settings.value) ? settings.value[1] : settings.value;            
            
            var timer = setInterval(function(){
                $(".mpb .mpb-progress").css('width',i+'%'); i++;
                
                if(i > to){
                    clearInterval(timer);
                    if($.isFunction(settings.complete)){
                        settings.complete.call(this);
                    }
                }
            }, settings.speed);

        }

        if(action == 'destroy'){
            $(".mpb").remove();
        }                
        
    }
    /* Eof My Custom Progressbar */
    gPlugins("body");
});


function gPlugins(container){
    gScroll.init(container);
}

