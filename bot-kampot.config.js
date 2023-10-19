module.exports = {
  apps: [
    {
      name: "bot-kampot",
      cwd: "/home/ubuntu/pm/bot-kampot",
      script: "index.js",
      log_date_format: "YYYY-MM-DD HH:mm Z",

      env: {
        DS_TOKEN: "",

        DS_LOG_CHANNEL_ID: "",
      },
    },
  ],
};
