# 🚀 ASP.NET Core React Boilerplate

A ready-to-use boilerplate for React frontend applications written in TypeScript with ASP.NET Core API Backend.

## 📁 Project Structure

- `/ClientApp`: React frontend application
- `/Controllers`: ASP.NET Core API controllers
- `/Data`: Database context and configurations
- `/Models`: C# model classes
- `/ClientApp/src`: React components and TypeScript files

## 📋 Prerequisites

- .NET 8.0 SDK
- Node.js and npm

## 🛠️ Project Setup

🔧 Run the following commands to set up the project:

```shell
dotnet tool install dotnet-ef --global
dotnet tool install dotnet-user-secrets --global
dotnet restore
```

## 🚀 Compiles and hot-reloads for development

🚀 Run the following command to compile and hot-reload the application for development:

```shell
dotnet watch run
```

## 📦 Packages Used

### ASP.NET Core Backend
- AutoMapper (11.0.1)
- AutoMapper.Extensions.Microsoft.DependencyInjection (11.0.0)
- Microsoft.AspNetCore.Authentication.JwtBearer (6.0.7)
- Microsoft.AspNetCore.Identity.EntityFrameworkCore (6.0.6)
- Microsoft.AspNetCore.Mvc.NewtonsoftJson (6.0.7)
- Microsoft.AspNetCore.SpaProxy (6.0.5)
- Microsoft.EntityFrameworkCore (6.0.7)
- Microsoft.EntityFrameworkCore.Sqlite (6.0.6)
- Microsoft.EntityFrameworkCore.Tools (6.0.6)
- Microsoft.OpenApi (1.3.2)
- Newtonsoft.Json (13.0.1)
- Serilog (2.11.0)
- Serilog.AspNetCore (5.0.0)
- Serilog.Sinks.Console (4.0.1)
- Swashbuckle.AspNetCore.Newtonsoft (6.3.2)
- Swashbuckle.AspNetCore.SwaggerGen (6.3.2)
- Swashbuckle.AspNetCore.SwaggerUI (6.3.2)

### React Frontend
- framer-motion (6.3.16)
- react (18.0.0)
- react-dom (18.0.0)
- react-router-dom (6.3.0)
- @types/node (17.0.34)
- @types/react (18.0.0)
- @types/react-dom (18.0.0)
- @vitejs/plugin-react (1.3.0)
- cross-env (7.0.3)
- openapi-typescript-codegen (0.22.0)
- sass (1.51.0)
- typescript (4.6.3)
- vite (2.9.9)
- vite-plugin-pwa (0.12.0)
- workbox-build (6.5.3)
- workbox-core (6.5.3)
- workbox-precaching (6.5.3)
- workbox-routing (6.5.3)
- workbox-strategies (6.5.3)


## 📝 License

📝 Copyright © 2024 [tooniez](https://github.com/tooniez). <br />
This project is [MIT](https://github.com/tooniez/Aspcore.ReactTemplate/blob/main/LICENSE) licensed.