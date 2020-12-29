angular.module('FrameCtrl', []).controller('FrameController', ['$scope', '$location', '$rootScope', '$window', function ($scope, $location, $rootScope, $window) {

    $rootScope.aboutPage = $location.path() == '/about';
    $rootScope.connectPage = $location.path() == '/connect';
    $rootScope.projectPage = $location.path() == '/projects';
    $rootScope.resumePage = $location.path() == '/resume';
    $rootScope.$watch(function () {
        return $location.path();
    }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $rootScope.aboutPage = $location.path() == '/about';
            $rootScope.connectPage = $location.path() == '/connect';
            $rootScope.projectPage = $location.path() == '/projects';
            $rootScope.resumePage = $location.path() == '/resume';

        }

    });
    $rootScope.on = false;
    $scope.$on('$viewContentLoaded', function () {
        if (typeof($window.ga) !== 'undefined') {
            $window.ga('send', 'pageview', {page: $location.path()});
        }
    });
}]);
