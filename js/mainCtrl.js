angular.module('friendsList')
    .controller('mainCtrl', function($scope){
      $scope.friends = ["Me","Myself","I"];
      $scope.addFriend = function (newFriend) {
        $scope.friends.push(newFriend);
        $scope.newFriendName = "";
      }
    });
