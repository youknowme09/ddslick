/**
 * Created by ansonliu on 2016/3/15.
 */

(function () {

    angular.module('ng.ddslick', []);


    /**
     * options : { data : []}
     *
     *  {
   *    text: "Facebook",
        value: 1,
   *  },
     *  {
        text: "Facebook",
        value: 1,
        selected: false,
        description: "Description with Facebook",
        imageSrc: "http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png"
      }
     */
    angular.module('ng.ddslick').directive('ddslickSelect', ddslickSelect);

    function ddslickSelect() {

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                'options': '=options'
            },
            link: function (scope, element, attr, ngModelCtrl) {

                scope.options['onSelected'] = function(data){
                    //console.log(data);
                    ngModelCtrl.$setViewValue(data.selectedData);
                };
                $(element).ddslick(scope.options);

            },
            controller: ddslickCtrl
        }

    };

    function ddslickCtrl() {

    }

})();
