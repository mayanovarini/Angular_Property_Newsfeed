app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        avatar: 'img/avatar1.png',
        name: 'Maya Novarini'
      },
      comment: {
        img: 'img/house1.jpg',
        text: 'This house is on sale, hurry up guys. Open house Today!'
      }
    },


    {
      author: {
        avatar: 'img/avatar2.jpg',
        name: 'Mr. Bear'
      },
      comment: {
        img: 'img/house2.jpg',
        text: 'I used to live here, pretty nice place. Back on the market now, should be affordable.'
      }
    }
  ];
}]);
