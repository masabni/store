<template>
    <div>
        <FilePond
                name="picture"
                ref="input"
                :server="{
                 url:base+server,
                 process: {
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${token}`
                    },
                    onload: onResponse
                },
                 revert: {
                    method: 'DELETE',
                    headers: {
                      'Authorization': `Bearer ${token}`
                    },
                    onload: onDeleteResponse
                }}"
                :label-idle="label"
                :file="file"
                :acceptedFileTypes="type"
                :maxFileSize="maxSize"
                imagePreviewWidth="500"
                imagePreviewHeight="500"
                imageCropAspectRatio="16:9"
                imageResizeTargetWidth= "500"
                imageResizeTargetHeight= "500"
                :labelFileWaitingForSize="$t('waiting_for_size')"
                :labelFileSizeNotAvailable="$t('size_not_available')"
                :labelFileLoading="$t('loading')"
                :labelFileLoadError="$t('error_during_load')"
                :labelFileProcessing="$t('uploading')"
                :labelFileProcessingComplete="$t('upload_complete')"
                :labelFileProcessingAborted="$t('upload_canceled')"
                :labelFileProcessingError="$t('error_during_upload')"
                :labelTapToCancel="$t('tap_to_cancel')"
                :labelTapToRetry="$t('tap_to_retry')"
                :labelTapToUndo="$t('tap_to_undo')"
                :labelButtonRemoveItem="$t('remove')"
                :labelButtonAbortItemLoad="$t('abort')"
                :labelButtonRetryItemLoad="$t('retry')"
                :labelButtonAbortItemProcessing="$t('cancel')"
                :labelButtonUndoItemProcessing="$t('undo')"
                :labelButtonRetryItemProcessing="$t('retry')"
                :labelButtonProcessItem="$t('upload')"
                :imageValidateSizeLabelFormatError="$t('image_type_not_supported')"
                :imageValidateSizeLabelImageSizeTooSmall="$t('image_is_too_small')"
                :imageValidateSizeLabelImageSizeTooBig="$t('image_is_to_big')"
                :labelFileTypeNotAllowed="$t('file_of_invalid_type')"
                :labelMaxFileSizeExceeded="$t('image_is_too_large')"
                :labelMaxFileSize="$t('max_image_size')"
        ></FilePond>

    </div>
</template>

<script>
    // Import Vue FilePond
    import vueFilePond from 'vue-filepond';
    // Import FilePond styles
    import 'filepond/dist/filepond.min.css';
    // Import FilePond plugins
    import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
    import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
    import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
    import FilePondPluginImageResize from 'filepond-plugin-image-resize';
    import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
    //        FilePondPluginFileEncode,

    // Please note that you need to install these plugins separately

    // Import image preview plugin styles
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
    // use image preview and file type validation plugins
    const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateSize,
        FilePondPluginImageCrop, FilePondPluginImageResize, FilePondPluginImageTransform);

    export default {
        name: "file-input",
        props: ['label', 'type', 'server', 'file', 'maxSize'],
        data: function () {
            return {

            };
        },
        computed: {
            token() {
                return localStorage.getItem('user_token');
            },
            base() {
//                return this.$router.options.base;
                return document.querySelector('base').getAttribute('href');
            },
        },
        methods: {
            onResponse(data) {
                let r = JSON.parse(data);
                this.$emit('input', r.image_key);
                Event.fire('removeLoader','');
                return r.image_key;
            },
            onDeleteResponse() {
                this.$emit('input', '');
            },
        },
        mounted() {

        },
        components: {
            FilePond
        }
    }
</script>

