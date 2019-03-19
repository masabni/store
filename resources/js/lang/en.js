export default {
    validations: {
        attributes: {
            name: 'Name',
            code: 'Code',
            store_name: 'Store Name',
            main_product: 'Main Product',
            full_name: 'Name',
            website: 'Website',
            email: 'Email Address',
            tags: 'Tags',
            tags2:'Tags',
            city: 'City',
            address: 'Address',
            category: 'Category',
            password: 'Password',
            first_name: 'First Name',
            last_name: 'Last Name',
            father_name: 'Father Name',
            mother_name: 'Mother Name',
            gender: 'Gender',
            phone_number: 'Phone Number',
            re_password: 'Confirm Password',
            birth_date: 'Birth Date',
            birth_place: 'Birth Place',
            product_name: 'Product Name',
            price: 'Price',
            sale: 'Sale',
            description: 'Description',
            product_description: 'Product Description',
            total_quantity: 'Total Quantity',
            quantity: 'Quantity',
            color: 'Color',
            size: 'Size',
            color_size: 'Color, Size',
            package_quantity: 'Package Quantity',
            main_category_id: '@:validations.attributes.main_product',
            city_id: '@:validations.attributes.city',
        },
        messages: {
            after: "The {0} must be after or equal to {1}.",
            alpha: "The {0} field may only contain alphabetic characters.",
            alpha_dash: "The {0} field may contain alpha-numeric characters as well as dashes and underscores.",
            alpha_num: "The {0} field may only contain alpha-numeric characters.",
            alpha_spaces: "The {0} field may only contain alphabetic characters as well as spaces.",
            before: "The {0} must be before or equal to {1}.",
            between: "The {0} field must be between {1} and {2}.",
            confirmed: "The {0} confirmation does not match.",
            credit_card: "The {0} field is invalid.",
            date_between: "The {0} must be between {1} and {2}.",
            date_format: "The {0} must be in the format {1}.",
            decimal: "The {0} field must be numeric and may contain {1} decimal points.",
            digits: "The {0} field must be numeric and exactly contain {1} digits.",
            dimensions: "The {0} field must be {1} pixels by {2} pixels.",
            email: "The {0} field must be a valid email.",
            excluded: "The {0} field must be a valid value.",
            ext: "The {0} field must be a valid file.",
            image: "The {0} field must be an image.",
            included: "The {0} field must be a valid value.",
            integer: "The {0} field must be an integer.",
            ip: "The {0} field must be a valid ip address.",
            length: "The {0} length must be between {1} and {2}.",
            max: "The {0} field may not be greater than {1} characters.",
            max_value: "The {0} field must be {1} or less.",
            mimes: "The {0} field must have a valid file type.",
            min: "The {0} field must be at least {1} characters.",
            min_value: "The {0} field must be {1} or more.",
            numeric: "The {0} field may only contain numeric characters.",
            regex: "The {0} field format is invalid.",
            required: "The {0} field is required.",
            required_if: "The {0} field is required when the {1} field has this value.",
            size: "The {0} size must be less than NaN undefined.",
            url: "The {0} field is not a valid URL.",
            _default: "The {0} value is not valid.",
        },
        custom: {
            pictures: {
                required: 'You must upload one picture at least'
            }
        }
    },
    lang: 'English',
    ma5zan: 'Al-Ma5zan',
    store:'Store',
    buyer: 'Buyer',
    _ar : '(AR)',
    _en : '(EN)',
    home: 'Home',


    status: 'Status',
    copyright: 'All rights reserved &copy; ' + new Date().getFullYear(),
    made_with: 'Made with',
    404: 'Ooopps.! The Page you were looking for, couldn\'t be found.',
    your_information: 'Your Information',
    store_information: 'Store Information',
    confirm: 'Confirm',
    confirmation: 'Confirmation',
    read_more: 'Read More',
    back: 'Back',
    close: 'Close',
    options: 'Options',
    no_result: 'No Results Found',

    have_physical_store: 'Have a Physical Store?',
    enter_store_address: 'Enter store address...',
    syria: 'Syria',
    aleppo: 'Aleppo',
    headquarters: 'Headquarters',
    message: 'Message',
    at_least_characters: 'At least {0} characters',
    subject: 'Subject',
    services: 'Services',
    send_us_email: 'Send us an Email',
    send_message: 'Send Message',
    log_in_to_account: 'Login to your Account',
    forgot_your_password: 'Forgot Your Password?',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    sign_up_as: 'Sign Up As',
    new_sign_up: 'New Signup? Register for an Account',
    register_now: 'Register Now',
    success_register: 'Successfully Signed Up',
    send: 'Send',
    update: 'Update',
    delete: 'Delete',
    save: 'Save',
    add: 'Add',
    date: 'Date',
    timing: 'Timing',
    location: 'Location',


    pick_image: 'Pick Image',
    not_selected: 'Not Selected',
    admin_panel: 'Admin Panel',
    unauthorized: 'Un Authorized',
    country: 'Country',
    content: 'Content',
    title: 'Title',
    en: ' (EN)',
    ar: ' (AR)',




    period: 'Period',
    pick_doc: 'Pick a Document',
    image: 'Image',
    poster: 'Poster',
    images: 'Images',
    reset: 'Reset',
    mail_send_success: 'Mail Sent Successfully,Thank You.',
    save_success: 'Saved Successfully',
    send_email: 'Send an E-Mail',
    nationality: 'Nationality',
    crop: 'Crop',


    classes: 'Classes',
    order: 'Order',
    icon: 'Icon',
    color: 'Color',
    account: 'Account',
    by_email: 'By Email',
    about_us: 'About Us',

    remember: 'Remember me',
    welcome_sign_in_to_ur_account: 'Welcome to Sanad, Sign in to your account',
    sign_in_to_ur_account: 'Sign in to your account',
    sign_in: 'Sign in',
    sign_up_to_ur_account: 'Sign Up to get instant access',
    sign_up: 'Sign up',
    search: 'Type & Hit Enter..',
    most_recent: 'Most Recent',
    by_category: 'By Category',
    use_social_login: 'Or Use Social Login',
    previous: '&laquo; Previous',
    next: 'Next &raquo;',
    reset_password: 'Your password has been reset!',
    password_reset : 'Password Reset',
    sent: 'We have e-mailed your password reset link!',
    view_profile: 'View Profile',





    male: 'Male',
    female: 'Female',



    fax: 'Fax',
    choose_username: 'Choose Username',
    choose_password: 'Choose Password',
    your_profile_bio: 'Your Profile Bio',
    personnel: 'Personnel',
    contact: 'Contact',
    career: 'Career',
    educational_qualifications: 'Educational Qualifications',
    messages: 'Messages',
    about_me: 'About Me',
    enter_email_phone : 'Enter your Email Or Phone Number',
    have_an_account : 'Have an account ?',
    enter_first_name : 'first name...',
    enter_last_name : 'last name...',
    enter_your_email : 'Enter your email...',
    enter_national_id : 'Enter your national id...',
    enter_your_password : 'Enter your password',
    enter_password : 'Enter password...',
    retype_password : 'Retype password...',
    password_reset_phrase : 'Fill with your mail to receive instructions on how to reset your password',
    welcome : 'Welcome {first} {last} !',
    are_you_sure: 'Are you sure yo want to do that?',
    yes: 'Yes',
    cancel: 'Cancel',
    no: 'No',
    amount : 'Amount',
    card_number : 'Card Number',
    sequence_number : 'Sequence Number',
    confirm_email: 'Please confirm your account through the confirmation message in your email.',
    confirmation_email_sent: 'A confirmation email has been sent to you to confirm your account.',
    admin_dashboard: 'Admin Dashboard',
    resend_email: 'Resend Email',
    dataIterator: {
        rowsPerPageText: 'Items per page:',
        rowsPerPageAll: 'All',
        pageText: '{0}-{1} of {2}',
        noResultsText: 'No matching records found',
        nextPage: 'Next page',
        prevPage: 'Previous page'
    },
    dataTable: {
        rowsPerPageText: 'Rows per page:'
    },
    waiting_for_size: 'Waiting for Size',
    size_not_available: 'Size not available',
    loading: 'Loading',
    error_during_load: 'Error during load',
    uploading: 'Uploading',
    upload_complete: 'Upload Complete',
    upload_canceled: 'Upload Canceled',
    error_during_upload: 'Error during upload',
    tap_to_cancel: 'Tap to cancel',
    tap_to_retry: 'Tap to retry',
    tap_to_undo: 'Tap to undo',
    remove: 'Remove',
    abort: 'Abort',
    retry: 'Retry',
    undo: 'Undo',
    upload: 'Upload',
    image_type_not_supported: 'Image type not supported',
    image_is_too_small: 'Image is too small',
    image_is_to_big: 'Image is to big',
    file_of_invalid_type: 'File of invalid type',
    image_is_too_large: 'Image is too large',
    max_image_size: 'Maximum file size is {filesize}',
    add_product: 'Add Product',
    s_p:'S.P',
    product_creation: 'Product Creation Page',
    price_after_sale: 'Price After Sale',
    upload_product_pictures: 'Drag & Drop your images or <span class="filepond--label-action" tabindex="0">Browse</span>',
    delete_product: 'Delete Product',
    product_edit: 'Product Edit Page',
    products: 'Products',
    product_info: 'Product Info',
    variations: 'Variations',
    tags_hit: 'Maximum of 5 tags',
    add_some_tags: 'Add some tags',
    no_results_matching:'No results matching ',
    press: 'Press',
    to_create_new_one:'to create a new one',
    product_long_description: 'Write a long & customized description about this product...',
    variation_theme: 'Variation Theme',
    add_variations: 'Add Variations',
    product_images: 'Product Images',
    you_can_choose_main_image: 'you can change the main image by selecting under the image you want',
    total_quantity_should_be_equal: 'The sum of variations quantity should be equal to Total Quantity',
    please_choose_main_image: 'Please choose main image for the product.',

    dashboard: 'Dashboard',
    orders: 'Orders',
    chat: 'Chat',
    stats: 'Stats',
    help: 'Help',
    add_to_cart:'Add To Cart',
    reviews:'Reviews',
    quantity:'Quantity'
}