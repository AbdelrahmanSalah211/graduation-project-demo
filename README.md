<div align="center">
  
  ![ChefBot](Images/ChefBot.jpg)
  <h1>ChefBot</h1>
  
  ![GitHub contributors](https://img.shields.io/github/contributors/AdhamMagdy1/graduation-project-demo?logo=github&label=Contributors)
</div>


![NPM Version](https://img.shields.io/npm/v/express?logo=express&label=Express)
![NPM Version](https://img.shields.io/npm/v/socket.io?logo=socket.io&label=Socket.io)
![Static Badge](https://img.shields.io/badge/PostgreSQL-grey?logo=PostgreSQL)
![NPM Version](https://img.shields.io/npm/v/sequelize?logo=sequelize&label=Sequelize)
![NPM Version](https://img.shields.io/npm/v/passport?logo=passport&label=Passport)
![NPM Version](https://img.shields.io/npm/v/react?logo=react&label=React)
![NPM Version](https://img.shields.io/npm/v/vite?logo=vite&label=Vite)
![Static Badge](https://img.shields.io/badge/RASA-NPL_Framework-red?logo=rasa)
![Static Badge](https://img.shields.io/badge/Docker-grey?logo=Docker)


## Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Installation](#installation)

## About


ChefBot is a comprehensive food ordering platform that connects customers with various restaurants, providing a seamless and interactive ordering experience. The system is built with a real-time communication architecture using Socket.io and leverages NLP with the Rasa framework to interact with customers in Egyptian Arabic dialect. The platform is divided into two main parts: the restaurant side and the customer side.


## Key Features

<div>
  <h4>Restaurant Side</h4>
</div>

- Restaurant owners can easily create an account and register their restaurant on the platform.
- Owners can upload images of their menu and fill product data (product name/ingredients/size:price), and also food extras.
- Dashboard is provided for restaurant owners to gain insights into customer opions.
- Incoming orders are displayed in real-time on an order dashboard with detailed information about each order.
- Restaurant owners can manage order statuses dynamically (waiting/in-progress/delivered).

<div>
  <h4>Customer Side</h4>
</div>


- Customers can interact with an AI chatbot in real-time to order foods.
- The chatbot utilizes NLP with Rasa to understand customer preferences and provide recommendations based on the restaurant's offerings by accessing restaurant foods stored in databse.
- The chatbot communicates in Egyptian Arabic dialect, making it more accessible and user-friendly for local customers.
- Once a customer confirms an order with the AI bot, the system sends the order details to the respective restaurant order dashboard


## Installation



<div>
  <h4>Pre-requests</h4>
</div>

- Node
- NPM
- Docker


after cloning this repo and opening the project in an IDE, use a different terminal for each of following

```shell
cd graduation-project-demo/backend/
npm install
npm run start
```


```bash
cd graduation-project-demo/frontend/
npm install
npm run dev
```

