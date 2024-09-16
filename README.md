# CoalWorks - Mining Operations Software for Productivity and Safety Management

## Overview
CoalWorks is a comprehensive mining operations software designed for enhancing the productivity and safety management of coal mines. With integrated web, mobile, and IoT solutions, it ensures seamless digital shift handover, safety compliance, and real-time monitoring. The solution adheres to the Directorate General of Mines Safety (DGMS) guidelines while incorporating AI and IoT for proactive decision-making and resource optimization.

---

## Table of Contents
- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)

---

## Problem Statement

**Problem ID**: 1645  
**Problem Title**: An app and web-based software for Productivity and Safety Management of Coal Mines.

Despite the transition towards renewable energy, coal remains essential for India's energy security. The coal industry faces the challenge of achieving a production target of 1.5 Bt by 2030. To meet this goal, improving the productivity and safety of mining operations is crucial.

The problem is divided into two key areas:

1. **Digital Shift Handover Log System**: A streamlined, digital solution is required to replace manual paper logs used for shift handovers. The new system will enhance communication, reduce time loss, and improve productivity by briefing the next shift about critical issues and tasks beforehand.
   
2. **Safety Management Plan (SMP)**: As per DGMS guidelines, every mine must implement an SMP based on hazard identification and control mechanisms. The challenge is to digitalize the SMP for better risk management and to integrate it with ERP systems.

---

## Solution Overview

**Project Title**: CoalWorks

CoalWorks provides a digital platform to address the issues faced in manual shift handovers and safety management. The software integrates with the current Statutory and non-statutory log formats and adheres to DGMS guidelines. It combines web and app-based platforms with AI and IoT technologies to streamline mining operations.

**Key Capabilities:**
- **Web Dashboard**: For supervisors to monitor activities, track tasks, and review shift logs.
- **Mobile App**: For workers to log events like issues, alerts, injuries, etc., and access shift details.
- **AI Assistant**: Helps in round planning, assigning personnel, and hazard detection.
- **Admin Dashboard**: Ensures integration with existing SMPs and logbooks, following DGMS guidelines.
- **OCR Technology**: Scans paper logbooks and converts them into digital forms.
- **ERP Integration**: Supports seamless data migration using data mapping and APIs.

---

## Features

- **Digital Shift Handover**: Transition logs from paper to digital, ensuring efficient shift handover and improved communication.
- **AI-Driven Productivity**: The AI engine assists in task allocation, hazard detection, and shift planning.
- **SMP Digitalization**: Safety Management Plan (SMP) automation for compliance with DGMS.
- **Predictive Simulation AI**: Supervisors can simulate operations and estimate future needs.
- **IoT Integration**: Ensures cross-validation of operations and safety measures, even in offline scenarios.
- **Cross-Platform Compatibility**: CoalWorks operates smoothly across various environments with Docker integration.
  
**Why We Stand Out:**
- **Predictive Simulation AI Engine**: For simulating mine operations and estimating resource needs.
- **Optimized Workflow and Resource Management**: AI optimizes task allocation and hazard detection.
- **Scalable IoT Deployment**: For cross-validation and safety, ensuring connectivity in remote areas.
- **Cross-Platform Solution**: Works seamlessly across app, web, and IoT systems using Docker integration.

---

## Technology Stack
**Web App**
- **Frontend**: Typescript, React.js, Electron.js (for both web and Desktop platforms)
- **Backend Integration**: 
  - **NodeJS and ExpressJS** (for the primary backend server)
  - **Kafka** (for real-time data streaming and message queuing)
  - **Zookeeper** (for managing Kafka clusters)
- **Database**: PostgreSQL, SQLite, TimeScale DB
- **AI/ML**: TensorFlow, Python for predictive simulations
- **OCR**: Tesseract.js
- **Docker**: For cross-platform compatibility and scalable deployment
- **File Storage**: Secure File Server (for securely storing logbooks and documents)
- **Web Server**: **Nginx** (for serving the mobile app’s backend services and ensuring secure file transfers)

- **ERP Integration**: Custom API development for data mapping and migration
- **Security**: End-to-end encryption, JWT, and data integrity checks for enhanced security

---
**Mobile App**
- **Framework**: Flutter (for building cross-platform mobile applications)
- **State Management**: BLoC (Business Logic Component for managing state and business logic)
- **Local Storage**: SQLite (for local database storage and offline capabilities)
- **Backend Integration**: HTTP / Dio (for making API calls to the backend)
- **UI Design**: Flutter Widgets (for creating responsive and native-like UI components)
---

**IoT Tech Stack**

### Core:
- **ESP32**: Microcontroller with Wi-Fi and Bluetooth capabilities.
  - **Mesh Networking**: For creating a reliable, scalable IoT network in the mine.
  - **ESP-Mesh SDK**: To manage communication between devices in the mesh network.
  - **FreeRTOS**: Real-time operating system for task management on IoT devices.

### Sensors:
- **MPU6050**: Motion sensor for monitoring movement and detecting potential hazards.
- **MAX30100/MAX30102**: Sensors for measuring SpO2 (oxygen levels) and heart rate for worker safety.
- **MQ-07**: Carbon monoxide sensor to detect harmful gas levels.
- **MQ-04**: Methane sensor to monitor gas levels and prevent explosions.
- **KY-037**: Sound sensor to detect anomalies in the mining environment.
- **BMP280**: Sensor for measuring temperature, pressure, and altitude.
- **SOS Button**: Emergency button for immediate alerts in case of accidents.

### Power:
- **3.7V LiPo Battery with BMS (Battery Management System)**: Ensures safe and efficient power management for IoT devices.



## Installation

### Prerequisites
- Node.js v20.9.0+
- Docker
- PostgreSQL, SQLite, TimeScale DB
- Python 3.x (for AI and simulations)
- Tesseract.js (for OCR functionality)

### Steps

1. **Preferred:** Run the application using Docker for consistency and ease of setup:
    ```bash
    docker-compose up
    ```

6. (Optional) Start the development server locally if Docker is not used:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/coalworks.git
    ```

2. Navigate into the project directory:
    ```bash
    cd coalworks
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Setup the database by running the migration scripts:
    ```bash
    npm run migrate
    ```
    ```bash
    npm run dev
    ```
---

> **Note:** Docker installation is preferred for a smoother and more consistent environment setup. Using `docker-compose up` will handle dependencies, database, and the application in a unified way.


## Usage

### Web Platform:
1. Navigate to `http://localhost:5173`.
2. Log in using your credentials.
3. Use the **Dashboard** to manage shift logs, view task assignments, and monitor safety incidents.

### Mobile App:
1. Download the **CoalWorks** mobile app (available on iOS/Android).
2. Log in with your credentials.
3. Access shift details, log events, and receive alerts in real-time.

---
## Screenshots

<table>
  <tr>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-homePage.png" alt="Home Page" width="200"/><br /><sub><b>Home Page</b></sub></td>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-criticalAlerts.png" alt="Critical Alerts" width="200"/><br /><sub><b>Critical Alerts</b></sub></td>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-logs.png" alt="Logs" width="200"/><br /><sub><b>Logs</b></sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-simulationEngine.png" alt="Simulation Engine" width="200"/><br /><sub><b>Simulation Engine</b></sub></td>
  </tr>
</table>

## System Design Diagrams

<table>
  <tr>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-useCaseDiagram.png" alt="Use Case Diagram" width="200"/><br /><sub><b>Use Case Diagram</b></sub></td>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-sequenceDiagram.png" alt="Sequence Diagram" width="200"/><br /><sub><b>Sequence Diagram</b></sub></td>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-deploymentDiagram.png" alt="Deployment Diagram" width="200"/><br /><sub><b>Deployment Diagram</b></sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-ER-Diagram.png" alt="ER Diagram" width="200"/><br /><sub><b>ER Diagram</b></sub></td>
    <td align="center"><img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-architectureDiagram.png" alt="Architecture Diagram" width="200"/><br /><sub><b>Architecture Diagram</b></sub></td>
  </tr>
</table>