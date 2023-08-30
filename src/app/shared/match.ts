import { Team } from "./team";

export interface Match{
    id: number;
    homeTeamEntity: Team;
    awayTeamEntity: Team;
    hometeamscore: number;
    awayteamscore: number;
    date: string;
    time: string;
    location: string;
    hometeam: string;
    awayteam: string;

}