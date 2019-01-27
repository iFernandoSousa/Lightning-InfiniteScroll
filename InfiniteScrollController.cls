public class InfiniteScrollController {
    @AuraEnabled
    public static String loadMoreData(Decimal sizeLimit) {
        sizeLimit+=1;
        
        List<Account> results = [SELECT Id, Name
                                 FROM Account
                                 LIMIT :sizeLimit];
        
        return JSON.serialize(results);
    }
}
