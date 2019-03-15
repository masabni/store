<template>
    <main>
        <slot name="toolbar"/>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 md8>
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
            //
        }),
    }
</script>
