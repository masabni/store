import VueRouter from 'vue-router'

// Pages
import Home from './pages/Home.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Dashboard from './pages/user/Dashboard.vue'
import Products from './pages/user/Products.vue'
import ProductCreate from './pages/user/Product/Create.vue'
import ProductEdit from './pages/user/Product/Edit.vue'
import AdminDashboard from './pages/admin/Dashboard.vue'
import Header from './components/Header.vue';
import DashboardHeader from './components/DashboardHeader.vue';
// Routes
const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            header: Header,
            default: Home,
        },
        meta: {
            auth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        components: {
            header: Header,
            default: Register,
        },
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            header: Header,
            default: Login,
        },
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: '/dashboard',
        name: 'dashboard',
        components: {
            header: DashboardHeader,
            default: Dashboard,
        },
        meta: {
            auth: true
        }
    },
    {
        path: '/products',
        name: 'products',
        components: {
            header: DashboardHeader,
            default: Products,
        },
        meta: {
            auth: true
        }
    },
    {
        path: '/add-product',
        name: 'add product',
        components: {
            default: ProductCreate,
        },
        meta: {
            auth: true
        }
    },
    {
        path: '/edit-product/:id',
        name: 'edit product',
        components: {
            default: ProductEdit,
        },
        meta: {
            auth: true
        },
        props: { default: true, header: false}
    },
    // ADMIN ROUTES
    {
        path: '/admin',
        name: 'admin.dashboard',
        components: {
            header: Header,
            default: AdminDashboard,
        },
        meta: {
            auth: {roles: 'admin', redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    transitionOnLoad: true,
    base: `/${document.querySelector('html').getAttribute('lang') === "ar" ? "":"en"}`,
    /* Save The Scroll Position , Useful When Redirecting Back */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

export default router
