<script lang="ts">
    const date = new Date()
    const hour = date.getHours()

    let message = ""

    if(hour >= 19) {
        message = "Good evening!"
    } else if(hour >= 12) {
        message = "Good afternoon!"
    } else {
        message = "Good morning!"
    }
</script>

<h2 class="text-4xl font-bold">{message}</h2>