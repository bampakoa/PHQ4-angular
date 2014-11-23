'use strict';

angular.module('myApp')
  .controller('MainCtrl', ['$scope', '$window', '$famous', function ($scope, $window, $famous) {

        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Engine = $famous['famous/core/Engine'];

        $scope.icons = [];
        $scope.pictures = [];

        $scope.title = {
            origin: [.5, .75],
            size: [$window.innerWidth/ 3, $window.innerHeight / 7]
        };

        var tours = {
            origin: [1, 0],
            size: [$window.innerWidth/ 3, $window.innerHeight / 2],
            offset: $window.innerWidth / 3,
            image: {
                content: "tours-icon.png",
                height: $window.innerHeight / 2 - 30,
                width: $window.innerWidth / 3
            },
            text: {
                origin: [.5, .95],
                size: [$window.innerWidth / 3, $window.innerHeight / 30],
                content: "TOURS"
            }
        };

        var info = {
            origin: [0, .667],
            size: [$window.innerWidth/ 3, $window.innerHeight / 4],
            offset: ($window.innerWidth / 3) * -1,
            padding: '3%',
            image: {
                content: "info-icon.png",
                height: $window.innerHeight * .15
            },
            text: {
                origin: [.5, .77],
                size: [$window.innerWidth / 3, $window.innerHeight / 30],
                content: "PRACTICAL INFORMATION"
            }
        };

        var face = {
            origin: [1, 1],
            size: [$window.innerWidth/ 3, $window.innerHeight / 4],
            offset: $window.innerWidth,
            padding: '6%',
            image: {
                content: "face-icon.png",
                height: $window.innerHeight * .15
            },
            text: {
                origin: [.5, .9],
                size: [$window.innerWidth / 3, $window.innerHeight / 30],
                content: "FRANK"
            }
        };

        $scope.icons.push(tours);
        $scope.icons.push(info);
        $scope.icons.push(face);

        angular.forEach($scope.icons, function (i) {
            i.transitionable = new Transitionable([i.offset, 0, 1]);
        })

        var photographers = {
            transform: [$window.innerWidth * (2/3) * -1,0,0],
            origin: [0,0],
            height: $window.innerHeight / 2,
            offset: $window.innerWidth * (2/3) * -1,
            name: "goldfish.png",
            options: {
                size: [$window.innerWidth * (2/3), $window.innerHeight / 2],
                properties: {
                    overflow: 'hidden'
                }
            },
            text: {
                size: [$window.innerWidth, $window.innerHeight / 18],
                content: "PHOTOGRAPHERS"
            }
        }

        var house = {
            transform: [$window.innerWidth * (2/3),0,0],
            origin: [1,0.6665],
            height: $window.innerHeight / 4,
            offset: $window.innerWidth * (2/3),
            name: "glass-house.png",
            options: {
                size: [$window.innerWidth * (2/3), $window.innerHeight / 4],
                properties: {
                    overflow: 'hidden'
                }
            },
            text: {
                size: [$window.innerWidth, $window.innerHeight / 18],
                content: "PHOTOQUAI 2013"
            }
        }

        var favorites = {
            transform: [$window.innerWidth * (2/3) * -1,0,0],
            origin: [0,1],
            height: $window.innerHeight / 4,
            offset: $window.innerWidth * (2/3) * -1,
            name: "horseback.png",
            options: {
                size: [$window.innerWidth * (2/3), $window.innerHeight / 4],
                properties: {
                    overflow: 'hidden'
                }
            },
            text: {
                size: [$window.innerWidth, $window.innerHeight / 18],
                content: "FAVORITES"
            }
        }

        $scope.pictures.push(photographers);
        $scope.pictures.push(house);
        $scope.pictures.push(favorites);

        angular.forEach($scope.pictures, function (p) {
            p.transitionable = new Transitionable([p.offset, 0, 20]);
            p.transitionableMod = new Transitionable([0, 0, 0]);
        })

        $scope.animate = function(){
            angular.forEach($scope.icons, function (i) {
                i.transitionable.set([0, 0, 0], {duration: 600, curve: 'easeInOut'});
            })

            angular.forEach($scope.pictures, function (p) {
                p.transitionable.set([0, 0, 0], {duration: 600, curve: 'easeInOut'});
                p.transitionableMod.set([-25, 0, 0], {duration: 3000, curve: 'easeIn'}, function(){
                    //p.transitionableMod.set([-25, 0, 0], {duration: 3000, curve: 'easeInOut'});
                });

            })
        }

        $scope.reset = function(){
            angular.forEach($scope.icons, function (i) {
                i.transitionable.set([i.offset, 0, 0], {duration: 600, curve: 'easeInOut'});
            })

            angular.forEach($scope.pictures, function (p) {
                p.transitionable.set([p.offset, 0, 0], {duration: 600, curve: 'easeInOut'});
                p.transitionableMod.set([0, 0, 0], {curve: 'easeInOut'});
            })
        }

        var currentView = "splash";

        Engine.on('click', function() {
            if(currentView == "splash"){
                currentView = null;
                $scope.animate();
            }
            else{
                currentView = "splash"
                $scope.reset();
            }
        });
  }]);
