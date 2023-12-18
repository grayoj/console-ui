module.exports = {
  apps: [
    {
      name: "Console",
      exec_mode: "cluster",
      instances: "max",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_local: {
        APP_ENV: "local",
      },
      env_dev: {
        APP_ENV: "dev",
      },
      env_prod: {
        APP_ENV: "prod",
      },
      autorestart: true,
      watch: true,
      max_restarts: 5,
    },
  ],
};
