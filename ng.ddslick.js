/**
 * Created by ansonliu on 2016/3/15.
 */

(function(){

    angular.module('ng.ddslick', []);


    angular.module('ng.ddslick').directive('ddslickSelect', ddslickSelect);



    function ddslickSelect(){

        return {
            restrict: 'E',
            scope : {
                'ddData' : '=ddData',
                'options' : '=options'
            },
            link : function(scope, element, attr){
                $(element).ddslick(scope.options);
            },
            controller : ddslickCtrl
        }

    };

    function ddslickCtrl(){

    }

})();
