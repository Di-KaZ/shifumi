import {writable} from "svelte/store";
interface Score {
    p1: number;
    p2: number;
    rounds: number;
}
export enum Moves {
    ROCK = "🪨",
    PAPER = "🤚",
    SCISSORS = "✂️",
}

interface Vote {
    p1: Moves | null;
    p2: Moves | null;
}


export const score = writable<Score>({
    p1: 0,
    p2: 0,
    rounds: 1
})


export const vote = writable<Vote>({p1: null, p2: null})


const p1Wins: Vote[] = [
    {p1: Moves.PAPER, p2: Moves.ROCK},
    {p1: Moves.ROCK, p2: Moves.SCISSORS},
    {p1: Moves.SCISSORS, p2: Moves.PAPER}
]

function roundEnd(vote: Vote) {
    if (!vote.p1 || !vote.p2) return false;
    score.update(value => {
        if (vote.p1 === vote.p2) return {...value, rounds: value.rounds + 1};
        if (p1Wins.some(combin => combin.p1 === vote.p1 && combin.p2 === vote.p2 )) return {...value, p1: value.p1 + 1, rounds: value.rounds + 1}
        else return {...value, p2: value.p2 + 1, rounds: value.rounds + 1};
    })
    return true;
}

export function voteForPlayer(player: 'p1' | 'p2', move: Moves) {
    vote.update(value => {
        if (player === 'p1') {
            const newVote = {...value, p1: move};
            if (roundEnd(newVote)) return {p1: null, p2: null}
            else return newVote;
        } else {
            const newVote = {...value, p2: move};
            if (roundEnd(newVote)) return {p1: null, p2: null}
            else return newVote;
        }
    })
}