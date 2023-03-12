angular.module('ProjectCtrl', []).controller('ProjectController', ['$scope', function ($scope) {
    $scope.projects = [
        {
            title: "BrokerBot",
            description: "Discord Bot used to get real time stock and cryptocurrency reporting.",
            imageURL: '/assets/wsbet.gif',
            link: "https://github.com/JoeParrinello/brokerbot"
        },
        {
            title: "BrokerBot Charty Extension",
            description: "Cloud function endpoint for BrokerBot used to embed ticker charts for single assets.",
            imageURL: '/assets/wsbet.gif',
            link: "https://github.com/JoeParrinello/brokerbot-charty"
        },
        {
            title: "OnTap",
            description: "IRC Bot coded in Ruby, with some dabbling in Docker. Used on the #hardorange IRC Channel. Used as a joke \"reward\" system on the channel.",
            imageURL: '/assets/BeerTap.jpg',
            link: "https://github.com/JoeParrinello/OnTap"
        },
        {
            title: "Java DES Cryptosystem",
            description: "Created for CS 408 - Cryptography & Internet Security. Created all the component parts for a naive DES cryptosystem. Unable to be posted online due to restrictions placed on the source code.",
            imageURL: '/assets/JavaClip.png',
            link: ""
        },
        {
            title: "JDistributedWork",
            description: 'Programmed using Java Sockets, Threading, and File IO, this was an attempt to recreate a distributed work applications, like BOINC, onto multiple machines. The idea was to make a framework where the input would be a java class file that would have a slice of work to be done, and a method to call when all the slices were complete. Found a wierd bug where I would never be reported the n-1th thread, where n was the number of cores reported on the system.',
            imageURL: '/assets/JavaClip.png',
            link: "https://github.com/HardOrange/JDistributedWork"
        },
    ];
    $scope.goToPage = function (project) {
        if (project.link !== ""){
            window.open(project.link, '_newtab');
        }
    };

    //{title:"This Personal Website", description:'Backend in Node.js and ExpressJS, with a frontend written with AngularJS and Twitter Bootstrap, this was my first experiment using Angular in a personal projects. I\'ve been toying with Angular and CSS3 animations, which you can see on the Home Page and this projects page.', imageURL:'/assets/WebsiteClip.png', link:"https://github.com/Taevis662/parrinello.me"},
}]);
