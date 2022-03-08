# Grafana-jsonPretty-Panel

This panel is a Grafana Panel Plugin for making pretty-json in Grafana 7.0+

## Getting started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

# FAQ

## How to download this plugin by docker-compose? 

```

GF_INSTALL_PLUGINS:"https://github.com/Aryido/grafana-jsontext-panel/releases/download/v1.2.2-beta/fondus-jsonpretty-panel.zip; fondus-jsonpretty-panel"" 

```

## Unsigned plugin is not showing in GUI 
Grafana required all plugins to be signed, but fondus-jsonpretty-panel have not signed yet. 
So, we need to add the following Grafana environment into your docker-compose to allow unsigned plugin.
```

GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS: fondus-jsonpretty-panel

```
then
![image](https://user-images.githubusercontent.com/60870275/157214124-63ad2204-c2e6-424d-ba9c-9fd99e4d8de9.png)

# Result

![image](https://user-images.githubusercontent.com/60870275/157215046-5d3a4662-fb6b-46d9-bf34-281a3af7d6cf.png)

![image](https://user-images.githubusercontent.com/60870275/157217416-6451733c-203e-4d32-80c2-bf19d795eef4.png)

# Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System


