<template>
    <div>
        <h4 class="card-title">
            {{ text }}
        </h4>
        <hr>
    </div>
</template>

<script>
export default {
    props: [ 'text' ]
}
</script>