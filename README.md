# Grafana Panel Plugin Template

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## What is Grafana Panel Plugin?

Panels are the building blocks of Grafana. They allow you to visualize data in different ways. While Grafana has several types of panels already built-in, you can also build your own panel, to add support for other visualizations.

For more information about panels, refer to the documentation on [Panels](https://grafana.com/docs/grafana/latest/features/panels/panels/)

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

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System

# grafana-jsontext-panel

## 上傳自製panel-plugin步驟

### step1. 
執行
```bash
   yarn build
```
當前專案目錄會產生一個dist目錄，內部都是編譯好的檔案，然後把這些檔案打包成zip
(注意! 不要多一層目錄)

### step2.
把zip上傳到github release 提供下載

### step3. 
在docker-compose加上github release路徑
例如 https://github.com/Aryido/grafana-jsontext-panel/releases/download/v0.0.1-beta/jsontext.zip;jsontext 
```
GF_INSTALL_PLUGINS:"https://github.com/Aryido/grafana-jsontext-panel/releases/download/v0.0.1-beta/jsontext.zip;jsontext" 
```

