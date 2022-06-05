const connection = require("../startup/db");
module.exports = async function () {
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected");
    }
  });

  connection.query(
    "create table if not exists video (" +
      "id int auto_increment primary key," +
      "NAME varchar(255) not null," +
      "Description varchar(255) not null," +
      "ACTIVE boolean )",
    function (err, result) {
      console.log("Video table created");
    }
  );

  connection.query(
    "create table if not exists videolist (" +
      "list_id int auto_increment primary key," +
      "video_id int," +
      "name varchar(255) not null," +
      "link varchar(255) not null," +
      "foreign key (video_id) references video(id) )",
    function (err, result) {
      if (err) throw err;
      console.log("videolist table created");
    }
  );
};
