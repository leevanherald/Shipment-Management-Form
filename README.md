# Title of the Project
### **Shipping-Management-Form**
# Table of contents
 - Description
 - Benefits of using JsonPowerDB
 - Use cases
 - Illustrations
 - Scope of functionalities
 - Project status
 - Sources

# Description
Project Using JPDB

This project is a Shipment Management Form that will store data in SHIPMENT-TABLE relation of DELIVERY-DB database

The Input Fields are : Shipment-No.
- Description
- Source
- Destination
- Shipping-Date
- Expected-Delivery-Date

Primary key: Shipment No

# Benefits of using JsonPowerDB
- Ease of Use: JsonPowerDB is user-friendly and supports real-time interactions, making it easy to work with. 
- Schema-Free and Maintenance-Friendly: It doesn't require fixed data structures, allowing for easy adaptations and updates without complex maintenance. 
- Versatile Data Handling: It manages different types of data efficiently in one place, simplifying data management. 
- Fast Indexing with PowerIndex: JsonPowerDB uses a powerful indexing engine for quick data retrieval and efficient queries. 
- Scalability and Extensive Indexing: It scales well and supports millions of indexes on a single instance. 
- Enhanced Security: It provides robust encryption and multiple security layers for data protection. 
- Optimized Performance: As a server-side NoSQL solution, it ensures top performance for various applications. 
- Cost-Effective Development: It reduces development costs and time-to-market for applications. 
- Smooth Integration: JsonPowerDB seamlessly integrates with different applications, reducing complexity. 
- High Data Processing: It handles large amounts of data efficiently, boosting data processing capabilities. 
- Bridging Traditional and Big Data: It serves as a bridge between traditional databases and big data solutions, offering scalability. 
- Customizable and Extendable: It allows for easy integration of new algorithms and user-defined APIs. 
- Low Total Ownership Cost: JsonPowerDB's efficiency and scalability lead to reduced overall ownership costs.

# Use cases
- All RDMS use cases.
- All key-value use cases.
- All document use cases.
- Time series and geographic analytics.
- Real-time data analytics application.
- HTML templates that are currently in use.
- Any software application that requires a backend database. (Dynamic web applications/mobile applications/desktop applications)


# Illustrations

Form

![image](https://github.com/leevanherald/Shipment-Management-Form/assets/64959644/4c3e40d9-1ad3-4c1e-9276-5a7ac3a57942)


Saving Request

![image](https://github.com/leevanherald/Shipment-Management-Form/assets/64959644/38961129-b1d9-430a-94d4-f37d9ad30fd7)


Updating Request

![image](https://github.com/leevanherald/Shipment-Management-Form/assets/64959644/bf3cdf76-7b40-4909-bf85-cf60a6cdeb3d)







# Scope of functionalities

Shiping Management Form
Primary Key: ShipmentNo

[Save] Button
[Update] Button
[Reset] Button

Upon loading the page or any button click:

The form loads with an empty display, cursor on the "Shipment-No" field, and other buttons disabled.
Workflow:

1. New Entry:

User enters data in the "Shipment No" field.
If the Shipment No doesn't exist in the database, [Save] and [Reset] buttons are enabled.
Cursor moves to the next field for data entry.
User can fill out the form, ensuring no empty fields.
Clicking [Save] stores data in the database and resets the form for a new entry.

2. Update Existing Entry:

If the Shipment No exists in the database:
Data corresponding to that record displays in the form.
[Update] and [Reset] buttons enable while keeping "Shipment No" field disabled.
Cursor moves to the next field for data modification.
User updates the form, ensuring no empty fields.
Clicking [Update] updates the database entry and resets the form for further updates.

3. Reset Functionality:

[Reset] button resets all the values in the form to NULL.

# Project status
Completed

# Sources
JPDB API
http://api.login2explore.com:5577/

JBDB functions library
https://login2explore.com/jpdb/resources/js/0.0.3/jpdb-commons.js

# Release History
Version 1
