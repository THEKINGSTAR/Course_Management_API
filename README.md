# ***```Course_Management_API```***

# **```BackEnd Task```**

### **```Task Title – Course Management API```**


**```Task Objective```**

Develop a backend RESTful API using **```Node.js```**, **```Express.js```**, and MongoDB to support a Course Management Dashboard. The API will handle course data operations such as create, read,
update, and delete **(CRUD)**.

--- 

## **```🗃🗃 1. Database Design```**

• Create a MongoDB schema/model for Course

* Fields should include
    * title: **String (required)**
    * description: **String (required)**
    * image: **String (can be base64 or image URL)**
    * startDate: **Date (optional)**
    * endDate: **Date (optional)**
    * price: **Number (required)**
    * createdAt & updatedAt: **Timestamps**
---

## **```🌐 2. API Endpoints```**

|**Method** |       ***Route***    |    **Description**        |
|-----------|----------------------|---------------------------|
| GET       |  /api/courses        |  Get all courses          |
| GET       |  /api/courses/:id    |  Get single course by ID  |
| POST      |  /api/courses        |  Add a new course         |
| PUT       |  /api/courses/:id    |  Update existing course   |
| DELETE    |  /api/courses/:id    |  Delete course by ID      |
----------------------------------------------------------------


## **```✅ 3. Functional Requirements```**

• Return proper success and error messages

• Handle edge cases (e.g., course not found)

• Validate input data (title, description, price must be required)

• Store and return timestamps for each course

---