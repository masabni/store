<template>
    <main>
        <v-snackbar
                v-model="snackbar"
                absolute
                top
                right
                color="success"
        >
            <span>Saved successfully!</span>
            <v-icon dark>check_circle</v-icon>
        </v-snackbar>

        <slot name="toolbar"/>

        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 md6>
                    <slot/>
                </v-flex>
                <!--<slot name="footer"/>-->
            </v-layout>
        </v-container>
    </main>
</template>
<script>
    export default {
        data: () => ({
            snackbar: false,
        }),
    }
</script>
