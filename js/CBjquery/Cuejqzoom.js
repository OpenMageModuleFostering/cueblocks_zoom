/* :- CueBlocks_Zoom-1.5.tgz
 * Version :- 1.5
 * Edition :- Community
 * Developed By :- CueBlocks.com
 * 
 */
var zoomDone = new Array();
// SWITCH MAIN IMAGE BASED ON MORE IMAGES ON MEDIA FILE
function switchmore(imagename) {
    jQuery("#imageShowcase a").hide();
    jQuery("#productImg" + imagename).show();
    jQuery("#anchorproductImg" + imagename).attr("style", "display:block");
    var options = {

        zoomWidth: 250,

        zoomHeight: 250,

        showEffect: 'show',

        hideEffect: 'fadeout',

        fadeoutSpeed: 'slow',

        title: false,

        zoomtype: 'innerzoom',


        yOffset: 70

    }

    if (!zoomDone.in_array(imagename)) {
        jQuery("#anchorproductImg" + imagename).jqzoom(options);
        zoomDone.push(imagename);
    }

}

//IN ARRAY FUNCTION
Array.prototype.in_array = function (p_val) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] == p_val) {
            return true;
        }
    }
    return false;
}


	
