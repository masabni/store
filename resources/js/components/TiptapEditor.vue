<template>
    <div class="editor">
        <v-layout align-center justify-center>
            <editor-menu-bar :editor="editor">
                <div class="menubar" slot-scope="{ commands, isActive }">

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.bold() }"
                            @click="commands.bold"
                    >
                        <v-icon>format_bold</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.italic() }"
                            @click="commands.italic"
                    >
                        <v-icon>format_italic</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.strike() }"
                            @click="commands.strike"
                    >
                        <v-icon>format_strikethrough</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.underline() }"
                            @click="commands.underline"
                    >
                        <v-icon>format_underline</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.code() }"
                            @click="commands.code"
                    >
                        <v-icon>code</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.paragraph() }"
                            @click="commands.paragraph"
                    >
                        <v-icon>short_text</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                            @click="commands.heading({ level: 1 })"
                    >
                        H1
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                            @click="commands.heading({ level: 2 })"
                    >
                        H2
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                            @click="commands.heading({ level: 3 })"
                    >
                        H3
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.bullet_list() }"
                            @click="commands.bullet_list"
                    >
                        <v-icon>format_list_bulleted</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.ordered_list() }"
                            @click="commands.ordered_list"
                    >
                        <v-icon>format_list_numbered</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.blockquote() }"
                            @click="commands.blockquote"
                    >
                        <v-icon>format_quote</v-icon>
                    </button>

                    <!--<button-->
                            <!--class="menubar__button"-->
                            <!--@click="commands.horizontal_rule"-->
                    <!--&gt;-->
                        <!--<v-icon>space_bar</v-icon>-->
                    <!--</button>-->

                    <button
                            class="menubar__button"
                            @click="commands.undo"
                    >
                        <v-icon>undo</v-icon>
                    </button>

                    <button
                            class="menubar__button"
                            @click="commands.redo"
                    >
                        <v-icon>redo</v-icon>
                    </button>

                </div>
            </editor-menu-bar>
        </v-layout>
        <!--<v-layout>-->
            <editor-content class="editor__content" :editor="editor" @input="updateValue($event.target.value)"/>
        <!--</v-layout>-->
    </div>
</template>

<script>
    import {Editor, EditorContent, EditorMenuBar} from 'tiptap'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
        Placeholder
    } from 'tiptap-extensions'

    export default {
        components: {
            EditorContent,
            EditorMenuBar,
        },
        props: ['text','label'],
        data() {
            return {
                editor: new Editor({
                    onUpdate: ({getHTML}) => {
                        const state = getHTML()
                        this.$emit('input', state)
                    },
                    extensions: [
                        new Blockquote(),
                        new BulletList(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({levels: [1, 2, 3]}),
                        new HorizontalRule(),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Link(),
                        new Strike(),
                        new Underline(),
                        new History(),
                        new Placeholder({
                            emptyClass: 'is-empty',
                            emptyNodeText: this.label,
                            showOnlyWhenEditable: true,
                        }),
                    ]}), //, content: ``
        }
        },
        methods: {
            updateValue(text) {
                // editor.setContent(this.value)
                this.$emit('input', text);
            },
        },
        watch: {
            text () {
                this.editor.setContent(this.text)
            }
        },
        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style>

</style>
