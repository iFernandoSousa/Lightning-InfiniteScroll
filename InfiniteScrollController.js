({
    initHandler : function(component, event, helper) {
        let sizeLimit = component.get('v.sizeLimit');
        
        helper.loadData(component, sizeLimit);
    }
})
