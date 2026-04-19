const appJson = require("./app.json");

const expoConfig = appJson.expo ?? appJson;
const baseUrl = process.env.EXPO_BASE_PATH ?? "";

module.exports = {
  ...appJson,
  expo: {
    ...expoConfig,
    experiments: {
      ...(expoConfig.experiments ?? {}),
      baseUrl,
    },
  },
};
