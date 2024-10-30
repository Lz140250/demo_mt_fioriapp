sap.ui.define([], function(){
    return {
        getState: function(status){
            switch (status) {
                case 'Available':
                    return 'Success';
                    break;
                case 'Out Of Stock':
                    // return 'Warning';
                    return 'Standard';
                    break;
                case 'Discontinued':
                    return 'Error';
                    break;
                default:
                    break;
            }
        }
    }
});