# CoalWorks
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

2. (Optional) Start the development server locally if Docker is not used:

3. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/coalworks.git
   ```

4. Navigate into the project directory:

   ```bash
   cd coalworks
   ```

5. Install dependencies:

   ```bash
   npm install
   ```

6. Setup the database by running the migration scripts:
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

---

## Screenshots

<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <td style="width: 50%; text-align: center;">
      <img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-homePage.png" alt="Home Page" style="width: 90%; max-width: 500px;"/><br />
      <sub><b>Home Page</b></sub>
    </td>
    <td style="width: 50%; text-align: center;">
      <img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-criticalAlerts.png" alt="Critical Alerts" style="width: 90%; max-width: 500px;"/><br />
      <sub><b>Critical Alerts</b></sub>
    </td>
  </tr>
  <tr>
    <td style="width: 50%; text-align: center;">
      <img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-logs.png" alt="Logs" style="width: 90%; max-width: 500px;"/><br />
      <sub><b>Logs</b></sub>
    </td>
    <td style="width: 50%; text-align: center;">
      <img src="https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-simulationEngine.png" alt="Simulation Engine" style="width: 90%; max-width: 500px;"/><br />
      <sub><b>Simulation Engine</b></sub>
    </td>
  </tr>
</table>


## System Design Diagrams

### Architecture Diagram
![Architecture Diagram](https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-architectureDiagram.png)

**Description:**
The Architecture Diagram provides a high-level overview of the CoalWorks system's structure. It depicts the key components, their interactions, and how they integrate to form the overall application architecture.

**Key Points:**

- **Frontend Components**: Shows the web and mobile app interfaces built with React.js and Flutter, respectively. These components interact with backend services to provide a user interface for managing shift logs, alerts, and safety compliance.
- **Backend Services**: Illustrates the Node.js and Express.js servers that handle API requests, business logic, and data processing. They also interface with the database and Kafka for real-time data handling.
- **Database Systems**: Includes PostgreSQL and SQLite databases, storing structured and unstructured data, respectively.
- **AI and Machine Learning**: Depicts the TensorFlow and Python components used for predictive simulations and data analysis.
- **Integration Points**: Highlights external integrations such as ERP systems and the file server for secure storage of documents.

---

### Use Case Diagram
![Use Case Diagram](https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-useCaseDiagram.png)

**Description:**
This Use Case Diagram illustrates the interactions between different actors (Admin, Supervisor, Worker) and the system. It depicts how each actor engages with the system's functionalities, such as managing shift logs, monitoring alerts, and handling safety protocols.

**Key Points:**
- **Admin**: Manages user roles, oversees system operations, and handles high-level configurations.
- **Supervisor**: Monitors shift activities, tracks task progress, and manages critical alerts.
- **Worker**: Logs shift activities, reports issues, and follows safety instructions.

### Sequence Diagram
![Sequence Diagram](https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-sequenceDiagram.png)

**Description:**
The Sequence Diagram illustrates the flow of events and interactions between components in the CoalWorks system. It details how different parts of the application communicate during specific processes such as logging shift information, handling alerts, and updating safety data.

**Key Points:**

- **Shift Logging Process**: Demonstrates how a Worker logs shift activities through the mobile app. The request is sent to the backend server, which processes the data and updates the database accordingly.
- **Alert Handling**: Shows the sequence of events when a critical alert is triggered. The system sends notifications to the Supervisor and updates the web dashboard with real-time information.
- **Data Synchronization**: Illustrates how periodic data from IoT devices is collected via Kafka, processed by the backend, and synchronized with the database. This ensures that the web dashboard and mobile app reflect the most current information.
- **Safety Compliance Update**: Details the steps involved in updating and reviewing safety compliance information. The Admin can review and modify safety protocols through the web interface, which communicates with the backend to store changes securely.

### Deployment Diagram
![Deployment Diagram](https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-deploymentDiagram.png)

**Description:**
The Deployment Diagram outlines the physical arrangement of components in the CoalWorks system. It visualizes how various servers, databases, and IoT devices are deployed and interconnected, highlighting the infrastructure required to support the application's functionalities.

**Key Points:**

- **Web Servers**: Depicts the Nginx web server setup, which handles HTTP/HTTPS requests from Admin, Supervisor, and Worker devices. It manages load balancing and ensures secure and efficient delivery of web content.
- **Backend Services**: Illustrates the backend servers that handle API requests, process data, and interface with the database and Kafka message broker.
- **Database Servers**: Shows PostgreSQL and SQLite servers responsible for storing application data, including shift logs, user information, and safety compliance records.
- **IoT Devices**: Highlights the ESP32-based IoT devices collecting real-time data from the mining environment, which is processed and transmitted to the backend via Kafka.
- **Network Configuration**: Demonstrates how components are connected over the network, including the use of firewalls and encryption to ensure secure communication.

---

### ER Diagram
![ER Diagram](https://github.com/Alien501/sih-coal-work/blob/main/client/src/assets/documentation/coalWorks-ER-Diagram.png)

**Description:**
The ER Diagram provides a detailed view of the data model for CoalWorks. It maps out the entities, their attributes, and the relationships between them, showcasing how data is structured and organized within the system.

**Key Points:**

- **Entities**: Includes key entities such as Users, Shift Logs, Alerts, and Safety Compliance Records.
  - **Users**: Represents Admin, Supervisor, and Worker entities with attributes like user ID, role, and credentials.
  - **Shift Logs**: Details shift-related data including shift ID, worker ID, and log entries.
  - **Alerts**: Contains information about critical alerts, their severity, and timestamps.
  - **Safety Compliance**: Tracks safety management plans and compliance records.
- **Relationships**: Illustrates how entities are connected. For example:
  - **Users** create and manage **Shift Logs**.
  - **Shift Logs** generate **Alerts**.
  - **Safety Compliance Records** are linked to specific **Users** and **Shift Logs**.
- **Attributes**: Lists important attributes for each entity, such as IDs, timestamps, and status indicators, essential for effective data management.


