import { Team } from "./team";

export interface Match{
    id: number;
    team1: Team;
    team2: Team;
    team1Score: number;
    team2Score: number;
    date: String;
    time: String;
    location: String;

}