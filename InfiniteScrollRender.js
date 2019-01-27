({
    afterRender : function(component, helper) {
       this.superAfterRender(); 
        
        var infiniteScroll = component.find("infiniteScroll").getElement();
        
        infiniteScroll.parentElement.addEventListener('touchmove',function(e) {
            helper.loadMoreData(component, infiniteScroll, e);

            //Prevent Push to Down (Remove if you want to keep it)
            e.stopPropagation();
        },false); 
    }
})
