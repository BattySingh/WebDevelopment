var movies = [
    {
        title: "In Bruges",
        rating: "5",
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: "4.5",
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: "5",
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: "3.5",
        hasWatched: false
    }
];

movies.forEach(function(num) {
    if (num.hasWatched == true) {
        console.log("You have watched " + num.title + " - " + num.rating + " stars");
    }
    else if (num.hasWatched == false) {
        console.log("You have watched " + num.title + " - " + num.rating + " stars");
    }
});
