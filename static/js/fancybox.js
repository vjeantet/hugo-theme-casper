$.fancybox && ($(".post-content").each && $(".post-excerpt").each(function() {
	$(this).find("img").each(function() {
		$(this).wrap('<a class="fancybox" href="' + this.src + '" data-fancybox="gallery" data-caption="' + this.title + '"></a>')
	})
	}), $(".fancybox").fancybox({
	    selector: ".fancybox",
	    protect: !0
}))