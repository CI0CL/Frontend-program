import { Team } from "./team";

export interface Match{
    id: number;
    homeTeam: Team;
    awayTeam: Team;
    homeTeamScore: number;
    awayTeamScore: number;
    date: String;
    time: String;
    location: String;

}