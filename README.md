# Laravel Inertia React
1. Add given code in vite.config.js if you run in Laravel sail.
    ```
    plugins:[

    ],
    <--------- after plugins ----------->
    server: {
        hmr: {
            host: 'localhost',
        },
    }
    ```
