import './bootstrap';
import '../css/app.css';
import '../css/admin/css/adminlte.css'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from 'react-redux';
import store from '../js/redux/store/store';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
        // <App {...props} />
        <Provider store={store}> {/* Wrap your Inertia app with Provider */}
            <App {...props} />
        </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
