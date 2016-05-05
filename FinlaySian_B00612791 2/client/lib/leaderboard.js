Template.leaderboard.helpers({
    leaderboard: function () {
        // get leaderboard, and sort from ascending stars amount
        return Leaderboard.find({}, {
          sort: { stars: -1 }
        });
    }
  });