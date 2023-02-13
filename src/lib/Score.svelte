<script>
    import {score} from "../stores/score.ts";
</script>

<div class="flex items-center justify-center text-center">
    <div class="grid grid-cols-3 grid-rows-2 items-center text-7xl lg:text-8xl">
        <h1 class="col-span-3 ">Round {$score.rounds}</h1>
        <h1>{$score.p1}</h1>
        <span>VS</span>
        <h1>{$score.p2}</h1>
    </div>
</div>
