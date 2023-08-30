import { Team } from "./team";

export interface Match{
    matchId: number;
    homeTeam: Team;
    awayTeam: Team;
    homeTeamScore: number;
    awayTeamScore: number;
    date: String;
    time: String;
    location: String;

}