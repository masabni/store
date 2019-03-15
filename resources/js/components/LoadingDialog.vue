<template>
    <v-dialog
            persistent
            v-model="dialog"
            width="300"
    >
        <v-card>
            <v-card-text>
                <div class="text-xs-center">
                    <v-progress-circular
                            :size="70"
                            :width="7"
                            color="primary"
                            indeterminate
                    ></v-progress-circular>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "LoadingDialog",
        props:['dialog']
    }
</script>

<style scoped>

</style>