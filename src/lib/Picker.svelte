<script lang="ts">
    import {Moves, voteForPlayer, vote} from "../stores/score.js";
    import { tweened } from "svelte/motion";
    import { quartInOut } from "svelte/easing";
    import clsx from "clsx";

    export let player: 'p1' | 'p2';
    function moveSelected(move: Moves) {
        return move === $vote[player];
    }
</script>

<div class="grid grid-rows-3 grid-cols-1">
    <button class={clsx("text-9xl","transition-opacity", {"opacity-0": $vote[player] && !moveSelected(Moves.ROCK)})} on:click={() => voteForPlayer(player, Moves.ROCK)}>🪨</button>
    <button class={clsx("text-9xl","transition-opacity", {"opacity-0": $vote[player] && !moveSelected(Moves.PAPER)})} on:click={() => voteForPlayer(player, Moves.PAPER)}>🤚</button>
    <button class={clsx("text-9xl","transition-opacity", {"opacity-0": $vote[player] && !moveSelected(Moves.SCISSORS)})} on:click={() => voteForPlayer(player, Moves.SCISSORS)}>✂️</button>
</div>