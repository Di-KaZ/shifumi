<script lang="ts">
    import Picker from "./lib/Picker.svelte";
    import Score from "./lib/Score.svelte";
</script>

<main class="grid grid-cols-3 h-screen w-screen">
    <Picker player="p1"/>
    <Score/>
    <Picker player="p2"/>
</main>