public class InfiniteScrollController {
    @AuraEnabled
    public static String searchForIds(Decimal sizeLimit) {
        sizeLimit+=1;
        
        return [SELECT Id, Name
        FROM Account
        LIMIT :sizeLimit];
    }
}
