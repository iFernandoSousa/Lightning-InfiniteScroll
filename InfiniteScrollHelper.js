({
    loadData : function(component, sizeLimit) {
        /*Controller Method receive how many records need to bring*/
        let action = component.get('c.loadMoreData');
        
        component.set('v.isLoadinig', true);
        
        action.setParams({'sizeLimit' : sizeLimit});
        
        action.setCallback(this, function(response) {
            let state = response.getState();
            
            if (state === 'SUCCESS') { 
                let jsonResult = response.getReturnValue();
                let resultData = JSON.parse(jsonResult);
                
                component.set('v.hasMore', resultData.length > sizeLimit);
                
                if (resultData.length > sizeLimit)
                    resultData.splice(resultData.length - 1, 1);
                
                component.set('v.records', resultData);
                component.set('v.isLoadinig', false);
            }
        });
        
        $A.enqueueAction(action);
    },
    prepareLoadMore: function(component) {
        let sizeLimit = component.get('v.sizeLimit');
        sizeLimit += 50;
        
        component.set('v.sizeLimit', sizeLimit);
        
        this.loadData(component, sizeLimit); 
    },
    loadMoreData : function(component, parent, target) {
        let hasMore = component.get('v.hasMore');
        let isLoading = component.get('v.isLoadinig');
        
        if (!isLoading && hasMore) {
            let maxToReload = parent.scrollHeight - target.currentTarget.clientHeight - 150;
            let positionScroll = Math.abs(parent.getBoundingClientRect().top);
            
            if (positionScroll >= maxToReload) {
                this.prepareLoadMore(component);
            }
        }
    }
})
