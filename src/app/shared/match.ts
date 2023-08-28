import { Team } from "./team";

export interface Match{
    matchId: number;
    team1: string; // Team is shit
    team2: string; // Team is shit
    team1Score: number;
    team2Score: number;
    date: String;
    time: String;
    location: String;

}