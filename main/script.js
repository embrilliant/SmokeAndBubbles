$(function() {

    function randomNum(t, l) {
        return {top: Math.floor(Math.random()*(t+1)), left: Math.floor(Math.random()*(l+1))};
    }

    var divWidth = 230;
    var maxWidth = $(window).width()-300;
    var divHeight = 230;
    var maxHeight = $(window).height()-300;

    var $divs = $("div");
    for (var d = 0; d < $divs.length; d++) {
        $divs.eq(d).offset(randomNum(maxHeight, maxWidth));
    }

    // $("div").draggable();

    animateDiv($("#green"));
    animateDiv($("#pink"));
    animateDiv($("#yellow"));
    animateDiv($("#purple"));
    animateDiv($("#white"));
    animateDiv($("#orange"));

    // $("div").one("click", splitToSmall);
    $("#yellow").one("click", function() { splitToSmall(this); changeVideo(this); });
    $("#orange").one("click", function() { splitToSmall(this); changeVideo(this); });
    $("#purple").one("click", function() { splitToSmall(this); changeVideo(this); });
    $("#pink").one("click", function() { splitToSmall(this); changeVideo(this); });
    $("#green").one("click", function() { splitToSmall(this); changeVideo(this); });
    $("#white").one("click", function() { splitToSmall(this); changeVideo(this); });

    function changeVideo(e) {

        var target = e;
        
        var which = $(target).attr("id");
        var vidSrc = document.getElementById("vidBgPg");
        vidSrc.src = "../media/video/"+which+".mp4";

        //var src = "";
        //$("#vidBgPg > source").attr("src", src);

        console.log("HRER-", e, target);
    }

    function splitToSmall(e) {
        
        var target = e;

    	var $this = $(target);

    	for (var i = 1; i < 7; i++) {
    		$this.append("<div></div>");
    	}

    	var $smallDivs = $this.children();
    	
        for (var index=0; index<6; index++) {
            var idN = index+1;
            $smallDivs.eq(index).addClass("s"+idN);
        }

    	$smallDivs.parent().css({"box-shadow":"none", "border":"none"});

        for (var s=1; s<7; s++) {
            $(".s"+s).switchClass("s"+s, "s"+s+"_move out", 5000, "easeOutExpo", out); 
        }

        function out() {
            $(this).parent().remove();
        }

        // var remain = $("div").length;
    	console.log();
    }

    function newPosition() {
    
        // Get viewport dimensions - the dimension of the div
        var h = $(window).height() - 227;
        var w = $(window).width() - 227;
        
        var newH = Math.floor(Math.random() * (h+1));
        var newW = Math.floor(Math.random() * (w+1));
        
        return [newH, newW];    
    
    }

    function animateDiv($target) {

        var newP = newPosition();
        
        $target.animate({top: newP[0], left: newP[1]}, 10000, function(){
          animateDiv($target);        
        });

    };

    

 });