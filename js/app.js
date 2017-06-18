var myApp = angular.module("MyApp", []);

myApp.controller("MainCtrl", ["$scope", function ($scope) {

    $scope.validateDates = function (startDate, endDate) {
        $scope.errMessage = '';
        var curDate = new Date();

        if (new Date(startDate) > new Date(endDate)) {
            $scope.errMessage = 'End Date should be greater than start date!';
            $scope.endDate = '';
            return false;
        }
        if (new Date(startDate) < curDate) {
            $scope.errMessage = 'Start date should greater than today!';
            $scope.startDate = '';
            return false;
        }
    };

    $scope.generateGraph = function (percent) {
        var ctx = document.getElementById('circularLoader').getContext('2d');
        var start = 4.72;
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height;
        var diff = ((percent / 100) * Math.PI * 2 * 10).toFixed(2);

        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 17;
        ctx.fillStyle = "#F5B7B1";
        ctx.strokeStyle = "#F5B7B1";
        ctx.textAlign = "center";
        ctx.font = "48px serif";
        ctx.fillText(percent + '%', cw * .52, ch * .5 + 5, cw + 12);
        ctx.beginPath();
        ctx.arc(100, 100, 75, start, diff / 10 + start, false);
        ctx.stroke();
        percent++;
    }

}]);