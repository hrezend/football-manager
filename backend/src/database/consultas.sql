select * from teams;
select * from players;
select * from teams_players;
select players.name from players left join teams_players on players.id = teams_players.player_id left join teams on teams_players.team_id = teams.id where teams_players.active = true and teams_players.team_id = "";