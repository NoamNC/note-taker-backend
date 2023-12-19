# note taker server

an api for the note taker app

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [to do](#to do)


## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account or local MongoDB server

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:NoamNC/note-taker-backend.git

   ```
2. 

   ```bash
   cd note-taker-backend

   ```

3. 
   ```bash
   npm install
   ```

4. Set up the environment variables:

 Create a .env file in the root directory.

 ```bash
PORT=5001
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority
```
Replace placeholders with your MongoDB credentials.

## Usage 
Run the application:
```bash
npm start
```
The server will be running at http://localhost:5001 (or the specified PORT).


## Endpoints

*Create a Note:
POST /notes/create

*Get All Notes:
GET /notes/all

*Get a Note by ID:
GET /notes/:id

*Edit a Note:
PUT /notes/:id

*Delete a Note:
DELETE /notes/:id


## to do

add tracking:

1. User Interactions:

Track when a user creates a new note.
Track when a user reads an existing note.
Track when a user updates a note.
Track when a user deletes a note.

2. Note Statistics:
Keep count of how many times each note is viewed, edited, or deleted.
measure how long does it take for each action + time in app